// Font Awesome иконы линк динамикаар дуудаж байна
const fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/cf8c8b75c6.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}