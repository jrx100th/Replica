(() => {
  const canvas = document.getElementById('outer-starfield');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;

  const stars = [];
  const starCount = 2500;
  let centerX = width / 2;
  let centerY = height / 2;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    centerX = width / 2;
    centerY = height / 2;
  }

  class Star {
    constructor() {
      this.reset();
    }

    reset() {
      this.angle = Math.random() * 2 * Math.PI;
      this.distance = 0;
      this.speed = 0.5 + Math.random() * 1.5;
      this.radius = 0.5 + Math.random() * 1.2;
    }

    update() {
      this.distance += this.speed;
      this.x = centerX + Math.cos(this.angle) * this.distance;
      this.y = centerY + Math.sin(this.angle) * this.distance;

      if (
        this.x < 0 || this.x > width ||
        this.y < 0 || this.y > height
      ) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#FFFFFF';
      ctx.shadowBlur = 10;
      ctx.fill();
    }
  }

  for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#000010';
    ctx.fillRect(0, 0, width, height);

    stars.forEach(star => {
      star.update();
      star.draw();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
})();








function resize() {
  const dpr = window.devicePixelRatio || 1;
  width = canvas.clientWidth;
  height = canvas.clientHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);

  focalLength = width;

  createStarsBasedOnSize();
}

// Example to adjust star count depending on width (responsive performance tweak)
function createStarsBasedOnSize() {
  stars = [];
  const baseStarCount = 150;
  const scaledCount = Math.min(baseStarCount, Math.floor(width / 5));  // fewer stars on narrower screens
  for (let i = 0; i < scaledCount; i++) {
    stars.push(new Star());
  }
}

window.addEventListener('resize', () => {
  resize();
  // Optional: update other sizes dependent state here
});
