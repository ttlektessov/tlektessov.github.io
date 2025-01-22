function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// document.getElementById('theme-toggle').addEventListener('click', function () {
//   document.body.classList.toggle('dark-mode');
//   // Optional: Change button text
//   const isDarkMode = document.body.classList.contains('dark-mode');
//   this.textContent = isDarkMode ? 'Light Mode' : 'Night Mode';
// });
