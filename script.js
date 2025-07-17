// Toggle hamburger menu
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('show');
});

// Scroll effect for navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
