console.log("Website loaded successfully!");

const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
