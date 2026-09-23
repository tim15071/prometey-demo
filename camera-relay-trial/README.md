# Camera relay: bounded Windows trial

Experimental local HLS relay for an isolated Windows VPS. This folder contains source code and synthetic tests only. It is not a production service or a public camera endpoint. No credentials, device identifiers, media, browser profiles, binaries or installers are included.

Requirements: Windows with a graphical session, Node.js 24, FFmpeg/FFprobe with H.264/HLS support, and the official Falcon Eye plugin installed separately. Windows Server/plugin compatibility and operation after RDP disconnection must be tested. A Windows Evaluation license does not make VPS rental free or authorize indefinite production use.

## Files

- `falcon-avi-tail.mjs`: reads H.264 from a growing AVI in the observed Falcon writer format.
- `falcon-live-hls.mjs`: finite AVI-to-HLS relay, listening only on `127.0.0.1:8898`.
- `probe-camera-continuity.mjs`: finite observation of the local playlist.
- `watch-falcon-recording.ps1`: emergency guardian for one explicitly identified fresh plugin process on a dedicated VPS.
- Three `test-*` files: synthetic tests; they do not connect to a camera or network.

## Before recording

The JavaScript scripts DO NOT STOP NATIVE CAMERA RECORDING. Configure and verify an independent recording bound before recording or disconnecting RDP.

The PowerShell guardian closes the entire explicitly selected plugin process, not just its recording. It requires its PID, full EXE path, exact UTC StartTime ticks, VPS computer name, `-DedicatedVps`, and `-Seconds 30..300`. The process must be less than 15 minutes old. It holds a handle and rechecks identity before requesting window closure five seconds before the deadline, then forcing that same process to exit if necessary. Forced exit may leave an unfinished AVI.

Run the guardian in a separate OS process, verify its `Guardian armed` log before recording, and first confirm that stopping this dedicated plugin actually stops AVI growth. Never point it at an existing personal/user viewing session. It cannot survive Windows sign-out, reboot or termination of the guardian itself. A guardian error is not proof that recording stopped. It does not change camera settings, services or firewall rules.

## Test commands

Preserve this folder layout when copying to a location such as `C:\CameraTrial`. Keep recordings and reports in a private sibling directory such as `C:\CameraTrialPrivate`, outside the entire checkout. Output folders must be new and empty; report files must not exist.

```powershell
Set-Location 'C:\CameraTrial'
node scripts/test-falcon-avi-tail.mjs
node scripts/test-probe-camera-continuity.mjs
powershell.exe -NoProfile -File scripts/test-watch-falcon-recording.ps1
```

Once a bounded native AVI recording is active, use its actual absolute path:

```powershell
node scripts/falcon-live-hls.mjs --input 'C:\CameraTrialPrivate\recording\active.avi' --output 'C:\CameraTrialPrivate\hls-01' --ffmpeg 'C:\Tools\ffmpeg\bin\ffmpeg.exe' --seconds 300
```

In another terminal after HLS starts updating:

```powershell
node scripts/probe-camera-continuity.mjs --output 'C:\CameraTrialPrivate\continuity-01.json' --seconds 180
```

Both utilities accept 30–300 seconds. Disconnect RDP for 60–90 seconds without signing out; reconnect and inspect the continuity report. The probe records progression, errors, ten-second stalls, sequence resets, ended playlists and gaps. It does not prove video decoding, camera-image freshness or public delivery. Verify decoded video separately.

The tested writer starts H.264 Annex B chunks at byte 2048, with no odd-chunk padding; the relay assumes 25 fps. Other formats are not automatically adapted. Do not change camera settings merely to fit this prototype.

Automatic login/reconnect, AVI rotation, disk retention, reboot recovery and public HTTPS delivery are not implemented. Confirm native recording has stopped after every test; a relay timeout alone does not stop it.