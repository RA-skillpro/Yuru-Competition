(() => {
  const wordmark = document.querySelector('.hero-wordmark');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!wordmark) return;
  let timer;
  function play() {
    if (motion.matches || wordmark.classList.contains('is-playing')) return;
    wordmark.classList.add('is-playing');
    timer = window.setTimeout(() => wordmark.classList.remove('is-playing'), 1400);
  }
  wordmark.addEventListener('pointerenter', play);
  motion.addEventListener('change', () => {
    window.clearTimeout(timer);
    wordmark.classList.remove('is-playing');
  });
  play();
})();
