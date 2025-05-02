const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
  overlay.classList.toggle('show')
  menuToggle.classList.toggle("white")
});

overlay.addEventListener('click', () => {
  navbar.classList.remove('show');
  overlay.classList.remove('show');
  menuToggle.classList.remove("white")
});