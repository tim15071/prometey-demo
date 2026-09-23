# Pure synthetic validation only. Never attaches to or stops a process.
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'watch-falcon-recording.ps1')

function Assert-True { param([bool]$Value, [string]$Message) if (-not $Value) { throw $Message } }
function Assert-Rejected { param([scriptblock]$Action) $rejected = $false; try { & $Action | Out-Null } catch { $rejected = $true }; Assert-True $rejected 'Expected target validation rejection.' }
$testNow = [DateTime]::UtcNow.Ticks
$testProcess = if ($PID -eq 9876) { 9877 } else { 9876 }
$base = @{
    TargetProcessId = $testProcess
    TargetExecutablePath = 'C:\DedicatedPlugin\vLocalServer.exe'
    ExpectedStartTicks = $testNow - [TimeSpan]::FromSeconds(30).Ticks
    DurationSeconds = 60
    ExpectedHost = 'TRIAL-VPS'
    ActualHost = 'trial-vps'
    IsDedicatedVps = $true
    NowUtcTicks = $testNow
}
$spec = Get-FalconWatchdogSpec @base
Assert-True ($spec.CloseAtSeconds -eq 55) 'Graceful close must precede the deadline by five seconds.'
$snapshot = [pscustomobject]@{ HasExited = $false; ProcessId = $testProcess; ExecutablePath = 'c:\dedicatedplugin\VLOCALSERVER.EXE'; StartTimeUtcTicks = $base.ExpectedStartTicks }
Assert-True (Test-FalconWatchdogIdentity -Spec $spec -Snapshot $snapshot) 'Identity comparison must tolerate Windows path case.'
$snapshot.StartTimeUtcTicks++
Assert-True (-not (Test-FalconWatchdogIdentity -Spec $spec -Snapshot $snapshot)) 'A reused PID must not match.'
$snapshot.StartTimeUtcTicks = $base.ExpectedStartTicks
$snapshot.ExecutablePath = 'C:\OtherPlugin\vLocalServer.exe'
Assert-True (-not (Test-FalconWatchdogIdentity -Spec $spec -Snapshot $snapshot)) 'A different executable path must not match.'
$snapshot.ExecutablePath = $spec.ExecutablePath
$snapshot.ProcessId++
Assert-True (-not (Test-FalconWatchdogIdentity -Spec $spec -Snapshot $snapshot)) 'A different PID must not match.'
$snapshot.ProcessId = $testProcess
$snapshot.HasExited = $true
Assert-True (-not (Test-FalconWatchdogIdentity -Spec $spec -Snapshot $snapshot)) 'An exited process must not be acted upon.'
foreach ($change in @(
    @{ IsDedicatedVps = $false }, @{ ActualHost = 'PERSONAL-PC' }, @{ ExpectedHost = '' },
    @{ DurationSeconds = 29 }, @{ DurationSeconds = 301 }, @{ TargetProcessId = 4 }, @{ TargetProcessId = $PID },
    @{ TargetExecutablePath = 'vLocalServer.exe' }, @{ TargetExecutablePath = '\\server\share\vLocalServer.exe' },
    @{ TargetExecutablePath = 'C:\DedicatedPlugin\another.exe' }, @{ TargetExecutablePath = 'C:\DedicatedPlugin:ads\vLocalServer.exe' },
    @{ ExpectedStartTicks = $testNow + 1 }, @{ ExpectedStartTicks = $testNow - [TimeSpan]::FromMinutes(16).Ticks }, @{ ExpectedStartTicks = 0 }
)) {
    $candidate = $base.Clone()
    foreach ($key in $change.Keys) { $candidate[$key] = $change[$key] }
    Assert-Rejected { Get-FalconWatchdogSpec @candidate }
}
Write-Output 'Falcon guardian synthetic checks passed; no process handles opened and no camera or process changed.'
