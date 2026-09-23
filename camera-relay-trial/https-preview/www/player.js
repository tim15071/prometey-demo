'use strict';
const video = document.querySelector('#video');
const button = document.querySelector('#start');
const overlay = document.querySelector('#overlay');
const message = document.querySelector('#message');
const status = document.querySelector('#status');
const remaining = document.querySelector('#remaining');
let hls;
let requested = false;
let attempt = 0;
let lastTime = -1;
let lastProgress = 0;
let networkFailureAt = 0;
function state(text, live = false) { status.textContent = text; status.dataset.live = String(live); }
function countdown(seconds) {
  if (!Number.isFinite(seconds)) return '';
  const value = Math.max(0, Math.ceil(seconds));
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const rest = value % 60;
  return `Осталось ${hours ? `${hours}:` : ''}${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}
function stop(text) {
  attempt++; requested = false; hls?.destroy(); hls = undefined;
  video.pause(); video.removeAttribute('src'); video.load();
  overlay.hidden = false; button.disabled = false; button.textContent = 'Повторить проверку'; message.textContent = text;
  state('Трансляция недоступна');
}
async function health() {
  try {
    const response = await fetch('/healthz', { cache: 'no-store', credentials: 'same-origin', signal: AbortSignal.timeout(2000) });
    const data = await response.json();
    networkFailureAt = 0;
    remaining.textContent = countdown(data.remainingSeconds);
    if (!response.ok || !data.ready) { if (requested) stop(data.reason === 'test_expired' ? 'Время проверки завершилось.' : 'Живое видео сейчас не поступает.'); return false; }
    return true;
  } catch {
    networkFailureAt ||= Date.now();
    if (requested && Date.now() - networkFailureAt >= 3000) stop('Сервер завершил проверку или соединение потеряно.');
    return false;
  }
}
button.addEventListener('click', async () => {
  const currentAttempt = ++attempt;
  button.disabled = true; message.textContent = 'Проверяем поступление видео…';
  const healthy = await health();
  if (currentAttempt !== attempt) return;
  if (!healthy) { button.disabled = false; message.textContent = 'Поток ещё не готов или время проверки закончилось.'; return; }
  requested = true; lastTime = -1; lastProgress = Date.now(); state('Подключение…');
  if (window.Hls?.isSupported()) {
    hls = new Hls({ enableWorker: true, backBufferLength: 10, maxBufferLength: 10, manifestLoadingMaxRetry: 0, levelLoadingMaxRetry: 1, fragLoadingMaxRetry: 1 });
    hls.on(Hls.Events.ERROR, (_, data) => { if (data.fatal && requested && currentAttempt === attempt) stop('Не удалось продолжить живую трансляцию.'); });
    hls.on(Hls.Events.MANIFEST_PARSED, () => { if (!requested || currentAttempt !== attempt) return; video.play().catch(() => { if (!requested || currentAttempt !== attempt) return; overlay.hidden = true; state('Нажмите воспроизведение'); }); });
    hls.loadSource('/hls/index.m3u8'); hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = '/hls/index.m3u8'; video.play().catch(() => { if (!requested || currentAttempt !== attempt) return; overlay.hidden = true; state('Нажмите воспроизведение'); });
  } else stop('В этом браузере не поддерживается HLS-видео.');
});
video.addEventListener('timeupdate', () => {
  if (!requested || video.paused || !video.videoWidth || video.currentTime === lastTime) return;
  lastTime = video.currentTime; lastProgress = Date.now(); overlay.hidden = true; state('Идёт тестовая трансляция', true);
});
video.addEventListener('waiting', () => { if (requested) state('Ожидаем новые кадры…'); });
video.addEventListener('pause', () => { if (requested) state('На паузе'); });
video.addEventListener('error', () => { if (requested) stop('Не удалось воспроизвести видео.'); });
setInterval(() => { void health(); if (requested && !video.paused && Date.now() - lastProgress > 10000) stop('Новые кадры не поступают.'); }, 2000);
void health();
