# Finite HTTPS camera preview — private staging only

This package is a **300-second external acceptance test**, not a permanent camera service. Default Caddy configuration exposes only a locked loopback health endpoint. No camera credentials, camera URLs, native recordings or plugin binaries are included. Nothing changes the production website.

Prerequisites: dedicated Windows Server 2022 VPS, official verified Caddy 2.11.4, portable Node 24, and the already tested bounded Falcon AVI-to-HLS relay listening only on 127.0.0.1:8898. The relay, official plugin and its independent native-recording guardian are separate. **This package does not start or stop native camera recording.** Retain the independently tested guardian for every test.

## Validate without opening public ports

From this extracted directory (adapt executable paths):

```powershell
& C:\Tools\node\node.exe --test .\test-relay-gate.mjs
& C:\Tools\caddy\caddy.exe validate --config .\Caddyfile --adapter caddyfile
$env:TRIAL_PUBLIC_IPV4 = '203.0.113.10' # reserved example, validation only
& C:\Tools\caddy\caddy.exe validate --config .\Caddyfile.public.template --adapter caddyfile
```

Both Caddy configurations passed local official Caddy validation. Gate unit tests passed. Blocked Caddy was separately verified on the VPS: health 200, media 503. Only the default blocked configuration may run before publication approval:

```powershell
& C:\Tools\caddy\caddy.exe run --config .\Caddyfile --adapter caddyfile
```

It binds only 127.0.0.1:8890. Stop this foreground process with Ctrl+C when finished. There is no automated Caddy process launcher or service in this package.

## Public test — only after separate explicit approval

The user must approve the specific camera scene being publicly visible without a viewer password for up to **300 seconds**, and opening TCP 80/443 on the VPS for this test. The package never changes firewall rules and never contains the bob password. Do not use this mode for a private/sensitive scene or indefinite service.

1. Confirm actual VPS public IPv4 and that ports 80/443 are free. Do not stop unrelated services.
2. After approval, allow TCP 80/443 temporarily using the separately reviewed VPS procedure. Let's Encrypt uses HTTP-01 on port 80. No tunnel or VPN is needed for this VPS endpoint.
3. Start the existing finite native recording, independent recording guardian, and AVI-to-HLS relay. Confirm HLS sequence is advancing on localhost8898. Bound native recording independently to at most 300 seconds.
4. In a dedicated terminal from this package directory, start the gate:

```powershell
& C:\Tools\node\node.exe .\relay-gate.mjs --approved-public-test --seconds 300
```

5. In a second terminal in the same package directory, launch Caddy AFTER setting the real VPS IPv4 (replace the placeholder):

```powershell
$env:TRIAL_PUBLIC_IPV4 = 'PUBLIC_IPV4'
& C:\Tools\caddy\caddy.exe run --config .\Caddyfile.public.template --adapter caddyfile
```

6. Open https://PUBLIC_IPV4/ externally and click the viewing button. The gate timer starts before ACME issuance; certificate setup reduces the available viewing period. Caddy explicitly requests a public short-lived IP certificate; real issuance is not yet verified. Do not repeatedly restart the gate automatically if it fails.
7. Observe moving video on an external device and the remaining time. A downloaded final frame is not proof of continuity. If testing RDP disconnect, the independent native-recording guardian must already be running.
8. At expiry the gate closes port8899, so Caddy cannot serve additional HLS bytes. During detected relay failure the gate returns503; after gate exit Caddy normally returns502. Caddy itself can still serve only the static player until separately stopped. **Stop foreground Caddy with Ctrl+C** and close temporary firewall rules using the reviewed procedure. Verify public ports no longer listen, gate has exited, and the separate guardian has stopped native AVI growth. Do not leave scheduled restarts/services.

## Fail-closed behavior and limits

The gate binds localhost8899 and fetches only localhost8898. It requires observed sequence progress, blocks unavailable/ended/reset/stalled streams, uses 2-second upstream deadlines, bounds response size, rejects redirects and path/query tricks, and serves no file backups. Poll interval is2seconds; frozen-sequence tolerance is up to8seconds. Already delivered bytes/browser buffers cannot be recalled instantly. The player checks health every2seconds, clears its video source after loss, and stops displaying a frozen image as live.

Only the standalone player, its exact assets, health endpoint and exact HLS paths are routed. No directories, AVI recordings or server files are exposed. No CORS or framing permission is added: this is a standalone preview with frame-ancestors 'none', not yet an embedded site player. The public Caddy listener lifetime is controlled separately with Ctrl+C; only media publication is bounded automatically by the gate. No viewer authentication is configured for this explicitly approved short public test.

Not included: 24/7 recording rotation, disk quotas, plugin auto-login/reconnect/reboot recovery, permanent viewer authentication, production monitoring or certificate-renewal supervision. These need a separate implementation and tests before continuous publication.

## Caddy source verification

Official archive:
https://github.com/caddyserver/caddy/releases/download/v2.11.4/caddy_2.11.4_windows_amd64.zip

Official checksums:
https://github.com/caddyserver/caddy/releases/download/v2.11.4/caddy_2.11.4_checksums.txt

Official SHA512 matched:
cd5ccfd86a4b40732cf715890d0dca5bf3f63adefec5a7914de85adf240c60ce7e5d2791631b88ef9758e46b23bb1730e020b9c5d696889740b284ffd4788e35

Locally computed archive SHA256:
1708333f79e274c7697285afe6d592ab39314e0b131e9ec6bea08ad27df62ebf

Caddy binaries are excluded from this source package. Included hls.js1.7.3 is from the installed project dependency; its license is under www/HLS-LICENSE.txt. SHA256SUMS.txt covers the exact source/assets. No process-tree wrapper, installers, plugin binaries, credentials or media are packaged.