(() => {
  const canvas = document.getElementById('about-starfield');
  const ctx = canvas.getContext('2d');

  let width, height;
  let stars = [];
  const starCount = 1000;

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
    ctx.scale(dpr, dpr);
    createStars();
  }

  class Star {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 1.2 + 0.3;
      this.vx = (width / 2 - this.x) * 0.0015;
      this.vy = (height / 2 - this.y) * 0.0015;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // When near center, respawn at edges
      const centerRadius = 200;
      if (
        Math.abs(this.x - width / 2) < centerRadius &&
        Math.abs(this.y - height / 2) < centerRadius
      ) {
        const edge = Math.floor(Math.random() * 4);
        switch (edge) {
          case 0: this.x = 0; this.y = Math.random() * height; break;
          case 1: this.x = width; this.y = Math.random() * height; break;
          case 2: this.x = Math.random() * width; this.y = 0; break;
          case 3: this.x = Math.random() * width; this.y = height; break;
        }
        this.vx = (width / 2 - this.x) * 0.0015;
        this.vy = (height / 2 - this.y) * 0.0015;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 8;
      ctx.fill();
    }
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0B3D91';
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
