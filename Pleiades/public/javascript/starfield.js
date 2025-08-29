const canvas = document.getElementById('starfield-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let stars = [];
const numStars = 800;
let focalLength;


function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  
  canvas.width = width;
  canvas.height = height;
  
  focalLength = width; // or update any other variables depending on canvas size

  // Optional: recreate stars array if your code depends on size at star creation
  createStars();
}

// Call this on window resize event
window.addEventListener('resize', resize);

// Initial call
resize();




function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  focalLength = width; // focal length defines how stars move
}
window.addEventListener('resize', resize);
resize();

// Star object
class Star {
  constructor() {
    // x and y from -width/2 to +width/2 (centered coordinate system)
    this.x = Math.random() * width - width/2;
    this.y = Math.random() * height - height/2;
    this.z = Math.random() * width;
  }

  update() {
    this.z -= 8; // how fast stars move toward viewer
    if (this.z <= 1) {
      this.x = Math.random() * width - width/2;
      this.y = Math.random() * height - height/2;
      this.z = width;
    }
  }

  draw() {
    let sx = (this.x / this.z) * focalLength + width/2;
    let sy = (this.y / this.z) * focalLength + height/2;
    let radius = (1 - this.z / width) * 3; // size decreases with depth

    // draw star if on screen
    if (sx < 0 || sx >= width || sy < 0 || sy >= height) return;

    ctx.beginPath();
    ctx.arc(sx, sy, radius, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 15;
    ctx.fill();
  }
}

function createStars() {
  stars = [];
  for (let i=0; i<numStars; i++) {
    stars.push(new Star());
  }
}

createStars();

function animate() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);

  for (let star of stars) {
    star.update();
    star.draw();
  }
  requestAnimationFrame(animate);
}

animate();
