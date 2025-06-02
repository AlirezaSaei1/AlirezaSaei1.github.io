console.log("Website loaded successfully!");

const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

const progressBar = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});
