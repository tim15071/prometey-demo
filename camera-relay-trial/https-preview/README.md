# Protected one-hour HTTPS camera preview — private staging only

This package supports an explicitly approved, **password-protected external acceptance test of at most 3,600 seconds**, not a permanent camera service. Anonymous publication is not authorized. Default Caddy configuration exposes only a locked loopback health endpoint. No real viewer credentials, camera credentials, camera URLs, native recordings or plugin binaries are included. Nothing changes the production website.

Prerequisites: dedicated Windows Server 2022 VPS, official verified Caddy 2.11.4, portable Node 24, and the already tested bounded Falcon AVI-to-HLS relay listening only on 127.0.0.1:8898. The relay, official plugin and its independent native-recording guardian are separate. **This package does not start or stop native camera recording.** Retain the independently tested guardian for every test.

## Validate without opening public ports

From this extracted directory (adapt executable paths):

```powershell
& C:\Tools\node\node.exe --test .\test-relay-gate.mjs .\test-player.mjs .\test-caddy-auth.mjs
& C:\Tools\caddy\caddy.exe validate --config .\Caddyfile --adapter caddyfile
```

All 11 offline tests passed, including Caddy adaptation with a published documentation fixture, missing-hash rejection, authentication ordering, exact one-hour expiry and stale playback callback regression. Set `CADDY_TEST_EXECUTABLE` to a separately verified local Caddy executable when testing the source package without bundled tools. The fixture is not a real viewer account and must never be used to launch a public service. No listener or camera request is started by these tests. Blocked Caddy was separately verified on the VPS: health 200, media 503. The default blocked configuration remains available:

```powershell
& C:\Tools\caddy\caddy.exe run --config .\Caddyfile --adapter caddyfile
```

It binds only 127.0.0.1:8890. Stop this foreground process with Ctrl+C when finished. There is no automated Caddy process launcher or service in this package.

## Protected one-hour test

The user approved viewing with a password for up to one hour. The username is `viewer`, separate from the camera account. Supply the real bcrypt hash through the `TRIAL_VIEWER_BCRYPT` process environment, loaded from the separately prepared private handoff or private hash file. No default password exists; an empty hash makes Caddy adaptation fail. Never put a real password or hash into source, CMS, URLs, logs or this package. The package does not generate actual viewer credentials or change firewall rules.

The template places `basic_auth` at the start of an explicit route, before all assets, health, playlist, segments and fallback responses. It strips Authorization before loopback proxying. Real camera credentials remain on the VPS only. Do not print a real adapted Caddy config because it contains the real viewer hash.

1. Confirm actual VPS public IPv4 and that ports 80/443 are free. Do not stop unrelated services.
2. After approval, allow TCP 80/443 temporarily using the separately reviewed VPS procedure. Let's Encrypt uses HTTP-01 on port 80. No tunnel or VPN is needed for this VPS endpoint.
3. First prepare the trusted HTTPS certificate using the protected Caddy template with the real hash loaded. Do this before starting native capture or the gate, so certificate setup does not consume the media test. Verify anonymous and wrong-password requests receive401 for root, assets, health, playlist and segments. The user completes the real browser authentication prompt. Authenticated player access should work while media remains unavailable with the gate stopped. Do not bypass certificate warnings.
4. Start the existing finite native recording, independent recording guardian, and AVI-to-HLS relay. Confirm sequence advancement on localhost8898. The explicit approved-hour runtime option permits at most3900seconds for the guardian and private relay: up to300seconds of preparation plus3600seconds of protected viewing. Ordinary runtime limits remain300seconds without that explicit option. Verify the independent recording deadline and start the public gate only after auth/TLS checks pass:

```powershell
& C:\Tools\node\node.exe .\relay-gate.mjs --approved-protected-test --seconds 3600
```

5. For the protected Caddy launch in step3, use a dedicated terminal in this directory with the real viewer hash already loaded through `TRIAL_VIEWER_BCRYPT`; then set the real IPv4 and run:

```powershell
$env:TRIAL_PUBLIC_IPV4 = 'PUBLIC_IPV4'
& C:\Tools\caddy\caddy.exe run --config .\Caddyfile.public.template --adapter caddyfile
```

6. Open https://PUBLIC_IPV4/ externally, authenticate as `viewer`, and click the viewing button. The one-hour timer starts when the gate starts. Native capture can end earlier if its independent guardian started earlier; do not extend capture beyond its approved deadline to fill the gate window. Do not restart the gate automatically if it fails.
7. Observe moving video on an external device and the remaining time. A downloaded final frame is not proof of continuity. If testing RDP disconnect, the independent native-recording guardian must already be running.
8. At expiry the gate closes port8899, so Caddy cannot serve additional HLS bytes. During detected relay failure the gate returns503; after gate exit Caddy normally returns502. All responses remain behind viewer authentication. Caddy itself can still serve the password-protected static player until separately stopped. **Stop foreground Caddy with Ctrl+C**, clear `TRIAL_VIEWER_BCRYPT` from the terminal environment and close temporary firewall rules using the reviewed procedure. Verify public ports no longer listen, gate has exited, and the separate guardian has stopped native AVI growth. Gate expiry alone does not stop native recording. Do not leave scheduled restarts/services.

## Fail-closed behavior and limits

The gate binds localhost8899 and fetches only localhost8898. It requires observed sequence progress, blocks unavailable/ended/reset/stalled streams, uses 2-second upstream deadlines, bounds response size, rejects redirects and path/query tricks, and serves no file backups. Poll interval is2seconds; frozen-sequence tolerance is up to8seconds. Already delivered bytes/browser buffers cannot be recalled instantly. The player checks health every2seconds, clears its video source after loss, and stops displaying a frozen image as live.

Only the standalone player, its exact assets, health endpoint and exact HLS paths are routed, all after viewer authentication. No directories, AVI recordings or server files are exposed. No CORS or framing permission is added: this is a standalone preview with frame-ancestors 'none', not yet an embedded site player. The public Caddy listener lifetime is controlled separately with Ctrl+C; only media publication is bounded automatically by the gate. Password sharing gives access to anyone who possesses it; individual resident accounts are outside this test.

Not included: 24/7 recording rotation, disk quotas, plugin auto-login/reconnect/reboot recovery, individual viewer accounts, production monitoring or certificate-renewal supervision. These need a separate implementation and tests before continuous publication. The protected test accepts only30..3600seconds; the previous public-test CLI flag is rejected.

Authentication/order references: https://caddyserver.com/docs/caddyfile/directives/basic_auth and https://caddyserver.com/docs/caddyfile/directives/route

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
