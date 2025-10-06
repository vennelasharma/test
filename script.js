// Mobilmeny toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-active");
  navMenu.classList.toggle("active");
});

// Lukker meny ved klikk på lenke
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      mobileMenu.classList.remove("is-active");
    }
  });
});

// Scroll-animasjoner
const sections = document.querySelectorAll(".fade-in, .slide-up");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});
