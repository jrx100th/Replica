// Optional: Client side message append (if no full-page reload on send)

// Example: listen to Enter key, append user message, get bot response from server if API available, else fallback.

const input = document.querySelector('input[name="message"]');
const messages = document.getElementById('messages');
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  // Optional: Add client-side validations or enhancements here
  // Usually form is submitted to server and new page renders with updated chatHistory
});








const fileInput = document.getElementById('fileInput');
const blackhole = document.getElementById('blackhole');

fileInput.addEventListener('mouseenter', () => {
  // Start animation
  blackhole.classList.add('animate');

  // Remove animation class after it ends to allow repeat
  blackhole.addEventListener('animationend', () => {
    blackhole.classList.remove('animate');
  }, { once: true });
});

fileInput.addEventListener('mouseleave', () => {
  // Optionally stop animation early, or let it finish
  blackhole.classList.remove('animate');
});

