const hero = document.querySelector('#hero');
const button = document.querySelector('#reelButton');
const video = document.querySelector('video');

button.addEventListener('click', () => {
  const paused = hero.classList.toggle('is-paused');
  if (video.currentSrc) paused ? video.pause() : video.play();
  button.innerHTML = paused
    ? '<span class="play">▶</span> Play atmosphere'
    : '<span class="play">Ⅱ</span> Pause atmosphere';
});

window.addEventListener('pointermove', (event) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (event.clientX / window.innerWidth - .5) * -8;
  const y = (event.clientY / window.innerHeight - .5) * -5;
  document.querySelector('.hero__poster').style.transform = `scale(1.04) translate3d(${x}px, ${y}px, 0)`;
});
