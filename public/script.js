// Toggle Mobile Navigation
document.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.querySelector(".hamburger");
  const navbar = document.querySelector(".menubar");
  const backButton = document.querySelector(".back-button");

  if (mobileNav && navbar) {
    mobileNav.addEventListener("click", () => {
      navbar.classList.toggle("active");
      mobileNav.classList.toggle("hamburger-active");
    });
  }
  if (backButton) {
    backButton.addEventListener("click", () => {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        mobileNav.classList.remove("hamburger-active");
      }
    });
  }
  const backArrow = document.getElementById("backArrow");
  const profileContent = document.getElementById("profileContent");
  const showButton = document.getElementById("showButton");

  // Анх харагдахгүй байлгах
  profileContent.classList.add("hidden");

  showButton.addEventListener("click", () => {
    profileContent.style.display = "block"; // ✨ Эхлээд харагдуулна
    setTimeout(() => {
      profileContent.classList.add("visible");
      profileContent.classList.remove("hidden");
    }, 10);
  });

  backArrow.addEventListener("click", () => {
    profileContent.classList.add("hidden");
    profileContent.classList.remove("visible");

    setTimeout(() => {
      profileContent.style.display = "none"; // ✨ 0.3 сек дараа бүрэн нуух
    }, 300);
  });
});
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click: function (event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// main.js
import { fetchAnimeData } from "./fetchanime.js";
import { displayAnimeList } from "./display.js";
import { searchAnime } from "./search.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchAnimeData(displayAnimeList);
});

document.querySelector("#search").addEventListener("input", searchAnime);
