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

  // ✨ Анх харагдахгүй байлгах
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
// Simple Slider Functionality
/*const slider = document.querySelector('[data-js="sslide"]');
  const allImages = slider ? slider.querySelectorAll("img") : [];
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  if (slider && allImages.length > 0 && nextButton && prevButton) {
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
    let autoSlide = setInterval(() => {
      slideIndex = (slideIndex + 1) % allImages.length;
      updateSlider();
    }, 5000);

    // Автоматаар гүйхийг тогтоох, дахин эхлүүлэх
    [nextButton, prevButton].forEach((button) => {
      button.addEventListener("click", () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
          slideIndex = (slideIndex + 1) % allImages.length;
          updateSlider();
        }, 5000);
      });
    });
  }
});*/
