// Font Awesome CSS линкийг JavaScript-ээр оруулах
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
fontAwesomeLink.integrity = "sha512-YOUR_INTEGRITY_KEY_HERE";
fontAwesomeLink.crossOrigin = "anonymous";
fontAwesomeLink.referrerPolicy = "no-referrer";

// Линкийг <head> рүү нэмэх
document.head.appendChild(fontAwesomeLink);

// Toggle Mobile Navigation
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

mobileNav.addEventListener("click", () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
});

// Simple Slider Functionality
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('[data-js="sslide"]');
  const allImages = slider.querySelectorAll("img");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  let slideIndex = 0;

  const updateSlider = () => {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  };

  nextButton.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % allImages.length;
    updateSlider();
  });

  prevButton.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + allImages.length) % allImages.length;
    updateSlider();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    slideIndex = (slideIndex + 1) % allImages.length;
    updateSlider();
  }, 5000);
});
