# Emergency bound for one fresh, dedicated Falcon plugin process on a disposable VPS.
# This is not a native recording-stop implementation and must not target a user's session.
[CmdletBinding()]
param(
    [int]$ProcessId = 0,
    [string]$ExecutablePath,
    [long]$StartTimeUtcTicks = 0,
    [int]$Seconds = 0,
    [string]$ExpectedComputerName,
    [switch]$DedicatedVps
)

function Get-FalconWatchdogSpec {
    param(
        [int]$TargetProcessId,
        [string]$TargetExecutablePath,
        [long]$ExpectedStartTicks,
        [int]$DurationSeconds,
        [string]$ExpectedHost,
        [string]$ActualHost,
        [bool]$IsDedicatedVps,
        [long]$NowUtcTicks = [DateTime]::UtcNow.Ticks
    )
    if (-not $IsDedicatedVps) { throw 'Explicit -DedicatedVps is required.' }
    if ([string]::IsNullOrWhiteSpace($ExpectedHost) -or
        -not [string]::Equals($ExpectedHost, $ActualHost, [StringComparison]::OrdinalIgnoreCase)) {
        throw 'The explicitly named VPS does not match this computer.'
    }
    if ($TargetProcessId -le 4 -or $TargetProcessId -eq $PID) { throw 'An explicit plugin process ID is required.' }
    if ($DurationSeconds -lt 30 -or $DurationSeconds -gt 300) { throw 'Duration must be 30-300 seconds.' }
    if ([string]::IsNullOrWhiteSpace($TargetExecutablePath) -or
        $TargetExecutablePath -notmatch '^[A-Za-z]:[\\/]' -or
        $TargetExecutablePath.Substring(2).Contains(':') -or
        $TargetExecutablePath -match '[\x00-\x1f<>"|?*]') {
        throw 'The executable must be an explicit absolute local Windows path.'
    }
    $fullPath = [IO.Path]::GetFullPath($TargetExecutablePath)
    if (-not [string]::Equals([IO.Path]::GetFileName($fullPath), 'vLocalServer.exe', [StringComparison]::OrdinalIgnoreCase)) {
        throw 'Only the explicitly named vLocalServer.exe can be watched.'
    }
    if ($ExpectedStartTicks -le 0 -or $ExpectedStartTicks -gt $NowUtcTicks -or
        ($NowUtcTicks - $ExpectedStartTicks) -gt [TimeSpan]::FromMinutes(15).Ticks) {
        throw 'StartTime must identify a fresh process started within the last 15 minutes.'
    }
    [pscustomobject]@{
        ProcessId = $TargetProcessId
        ExecutablePath = $fullPath
        StartTimeUtcTicks = $ExpectedStartTicks
        Seconds = $DurationSeconds
        CloseAtSeconds = $DurationSeconds - 5
        ExpectedComputerName = $ExpectedHost
    }
}

function Test-FalconWatchdogIdentity {
    param([object]$Spec, [object]$Snapshot)
    if ($Snapshot.HasExited) { return $false }
    return ($Snapshot.ProcessId -eq $Spec.ProcessId -and
        $Snapshot.StartTimeUtcTicks -eq $Spec.StartTimeUtcTicks -and
        [string]::Equals($Snapshot.ExecutablePath, $Spec.ExecutablePath, [StringComparison]::OrdinalIgnoreCase))
}

function Get-FalconWatchdogSnapshot {
    param([Diagnostics.Process]$TargetProcess)
    $TargetProcess.Refresh()
    if ($TargetProcess.HasExited) { return [pscustomobject]@{ HasExited = $true } }
    [pscustomobject]@{
        HasExited = $false
        ProcessId = $TargetProcess.Id
        ExecutablePath = [IO.Path]::GetFullPath($TargetProcess.MainModule.FileName)
        StartTimeUtcTicks = $TargetProcess.StartTime.ToUniversalTime().Ticks
    }
}

function Invoke-FalconRecordingWatchdog {
    param([object]$Spec)
    $ErrorActionPreference = 'Stop'
    $targetProcess = $null
    try {
        if (-not [IO.File]::Exists($Spec.ExecutablePath)) { throw 'The explicit plugin executable does not exist.' }
        $targetProcess = [Diagnostics.Process]::GetProcessById($Spec.ProcessId)
        # Hold a handle to this process for the whole lifetime. Do not re-select by name or PID.
        $heldHandle = $targetProcess.Handle
        if ($heldHandle -eq [IntPtr]::Zero) { throw 'Cannot hold the selected plugin process handle.' }
        $initial = Get-FalconWatchdogSnapshot -TargetProcess $targetProcess
        if (-not (Test-FalconWatchdogIdentity -Spec $Spec -Snapshot $initial)) { throw 'Plugin identity does not match; no action taken.' }
        $watch = [Diagnostics.Stopwatch]::StartNew()
        Write-Output ('Guardian armed for the explicit plugin process; close at {0}s, force deadline {1}s.' -f $Spec.CloseAtSeconds, $Spec.Seconds)
        $closeAttempted = $false
        while ($true) {
            $snapshot = Get-FalconWatchdogSnapshot -TargetProcess $targetProcess
            if ($snapshot.HasExited) {
                Write-Output 'Selected plugin process has exited. Verify recording is closed and the AVI is finalized.'
                return
            }
            if (-not (Test-FalconWatchdogIdentity -Spec $Spec -Snapshot $snapshot)) {
                throw 'Plugin identity changed; refusing to act on any other process.'
            }
            if ($watch.Elapsed.TotalSeconds -ge $Spec.Seconds) {
                # Recheck immediately before the only forced mutation. InputObject keeps the held process identity.
                $beforeStop = Get-FalconWatchdogSnapshot -TargetProcess $targetProcess
                if ($beforeStop.HasExited) { Write-Output 'Selected plugin process exited before the force deadline.'; return }
                if (-not (Test-FalconWatchdogIdentity -Spec $Spec -Snapshot $beforeStop)) { throw 'Identity mismatch at force deadline; no stop attempted.' }
                Stop-Process -InputObject $targetProcess -Force -ErrorAction Stop
                if (-not $targetProcess.WaitForExit(2000)) { throw 'Plugin exit was not confirmed after the force attempt.' }
                Write-Output 'Explicit plugin process was stopped at the deadline. The AVI may be unfinalized; inspect it before reuse.'
                return
            }
            if (-not $closeAttempted -and $watch.Elapsed.TotalSeconds -ge $Spec.CloseAtSeconds) {
                $beforeClose = Get-FalconWatchdogSnapshot -TargetProcess $targetProcess
                if ($beforeClose.HasExited) { Write-Output 'Selected plugin process exited before the close attempt.'; return }
                if (-not (Test-FalconWatchdogIdentity -Spec $Spec -Snapshot $beforeClose)) { throw 'Identity mismatch before close; no close attempted.' }
                $closeAttempted = $true
                try {
                    $sent = $targetProcess.CloseMainWindow()
                    Write-Output ('Graceful close requested for the selected plugin: {0}. Force deadline remains armed.' -f $sent)
                } catch {
                    Write-Output 'Graceful close was unavailable. Identity will be rechecked at the force deadline.'
                }
            }
            [Threading.Thread]::Sleep(100)
        }
    } finally {
        if ($null -ne $targetProcess) { $targetProcess.Dispose() }
    }
}

if ($MyInvocation.InvocationName -ne '.') {
    try {
        $spec = Get-FalconWatchdogSpec -TargetProcessId $ProcessId -TargetExecutablePath $ExecutablePath `
            -ExpectedStartTicks $StartTimeUtcTicks -DurationSeconds $Seconds -ExpectedHost $ExpectedComputerName `
            -ActualHost $env:COMPUTERNAME -IsDedicatedVps ([bool]$DedicatedVps)
        Invoke-FalconRecordingWatchdog -Spec $spec
    } catch {
        # Avoid arbitrary process/module exceptions in logs. No fallback process selection is allowed.
        [Console]::Error.WriteLine('Guardian failed or refused the target. Confirm identity, permissions, and manual recording stop; do not assume recording was stopped.')
        exit 1
    }
}
