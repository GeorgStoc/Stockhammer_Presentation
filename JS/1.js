const button = document.getElementById("h-button");
const nav = document.getElementById("navigation");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});