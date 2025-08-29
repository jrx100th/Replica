let supernovaTimeout;
let lastMouseX = null;
let lastMouseY = null;

function createSupernova(x, y) {
  const sn = document.createElement('div');
  sn.style.position = 'fixed';
  sn.style.left = `${x - 50}px`;
  sn.style.top = `${y - 50}px`;
  sn.style.width = '100px';
  sn.style.height = '100px';
  sn.style.borderRadius = '50%';
  sn.style.background = 'radial-gradient(circle, white 0%, rgba(255, 255, 255, 0) 70%)';
  sn.style.pointerEvents = 'none';
  sn.style.zIndex = 9999;
  sn.style.animation = 'supernovaBlast 1.5s forwards';
  sn.style.filter = 'drop-shadow(0 0 10px white)';
  document.body.appendChild(sn);

  sn.addEventListener('animationend', () => {
    sn.remove();
  });
}

document.addEventListener('mousemove', (e) => {
  if (lastMouseX === e.clientX && lastMouseY === e.clientY) return;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;

  clearTimeout(supernovaTimeout);
  supernovaTimeout = setTimeout(() => {
    createSupernova(e.clientX, e.clientY);
  }, 6000);
});
