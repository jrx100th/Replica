document.getElementById('warpButton').addEventListener('click', function () {
  const buttonText = document.getElementById('buttonText');
  const starfieldCanvas = document.getElementById('starfield-canvas');

  // Fade out text
  buttonText.classList.add('fade-out-text');

  // After 1s delay (fade duration), play starfield warp animation
  setTimeout(() => {
    starfieldCanvas.classList.add('warp-drive');
  }, 1000);

  // After warp animation ends (2.5s total approx), navigate away or reload page or do next action
  setTimeout(() => {
    window.location.href = '/chat'; // change to your next page URL
  }, 2500);
});
