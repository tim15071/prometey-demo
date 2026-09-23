# Camera relay: bounded Windows trial

Experimental local HLS relay for an isolated Windows VPS. This folder contains source code and synthetic tests only. It is not a production service or a public camera endpoint. No credentials, device identifiers, media, browser profiles, binaries or installers are included.

Requirements: Windows with a graphical session, Node.js 24, FFmpeg/FFprobe with H.264/HLS support, and the official Falcon Eye plugin installed separately. Windows Server/plugin compatibility and operation after RDP disconnection must be tested. A Windows Evaluation license does not make VPS rental free or authorize indefinite production use.

## Files

- `falcon-avi-tail.mjs`: reads H.264 from a growing AVI in the observed Falcon writer format.
- `falcon-live-hls.mjs`: finite AVI-to-HLS relay, listening only on `127.0.0.1:8898`.
- `probe-camera-continuity.mjs`: finite observation of the local playlist.
- `watch-falcon-recording.ps1`: emergency guardian for one explicitly identified fresh plugin process on a dedicated VPS.
- Four `test-*` files in `scripts/`: synthetic tests; they do not connect to a camera or network.
- `https-preview/`: standalone password-protected acceptance-test player and loopback gate. Its README describes authentication, separate TLS preparation and cleanup. It is not automatically published by this repository.
- Per-directory `SHA256SUMS.txt` manifests cover source/assets, excluding tools and real runtime data.

## Before recording

The JavaScript scripts DO NOT STOP NATIVE CAMERA RECORDING. Configure and verify an independent recording bound before recording or disconnecting RDP.

The PowerShell guardian closes the entire explicitly selected plugin process, not just its recording. It requires its PID, full EXE path, exact UTC StartTime ticks, VPS computer name, `-DedicatedVps`, and `-Seconds 30..300` for ordinary tests. Only an explicitly approved hour test may use `-ApprovedHourTest` and a deadline up to3900seconds: up to300seconds of private preparation plus at most3600seconds of protected viewing. The process must be less than 15 minutes old. It holds a handle and rechecks identity before requesting window closure five seconds before the deadline, then forcing that same process to exit if necessary. Forced exit may leave an unfinished AVI.

Run the guardian in a separate OS process, verify its `Guardian armed` log before recording, and first confirm that stopping this dedicated plugin actually stops AVI growth. Never point it at an existing personal/user viewing session. It cannot survive Windows sign-out, reboot or termination of the guardian itself. A guardian error is not proof that recording stopped. It does not change camera settings, services or firewall rules.

## Test commands

Preserve this folder layout when copying to a location such as `C:\CameraTrial`. Keep recordings and reports in a private sibling directory such as `C:\CameraTrialPrivate`, outside the entire checkout. Output folders must be new and empty; report files must not exist.

```powershell
Set-Location 'C:\CameraTrial'
node scripts/test-falcon-avi-tail.mjs
node scripts/test-falcon-live-hls.mjs
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

The ordinary relay ceiling remains300seconds; its default duration remains180seconds. Longer capture/relay runs require `--approved-hour-test true` and an explicit `--seconds` (relay) or `--max-seconds` (tail) of at most3900seconds. No unlimited mode is added. The protected public gate has a separate hard maximum3600seconds and uses `--approved-protected-test --seconds 3600`; start it only after password/TLS checks pass. Private preparation time must not become extra public viewing time. Real camera credentials stay on the VPS; this source package contains no actual account data.

The continuity probe continues to accept30–300seconds; it is a short sample, not proof of an entire hour. Disconnect RDP for60–90seconds without signing out; reconnect and inspect the continuity report. The probe records progression, errors, ten-second stalls, sequence resets, ended playlists and gaps. It does not prove video decoding, camera-image freshness or public delivery. Verify decoded video separately.

The tested writer starts H.264 Annex B chunks at byte 2048, with no odd-chunk padding; the relay assumes 25 fps. Other formats are not automatically adapted. Do not change camera settings merely to fit this prototype.

Automatic login/reconnect, AVI rotation, disk retention and reboot recovery are not implemented. The separate HTTPS preview supports a bounded protected test, not permanent public delivery. Confirm native recording has stopped after every test; a relay/gate timeout alone does not stop it.
