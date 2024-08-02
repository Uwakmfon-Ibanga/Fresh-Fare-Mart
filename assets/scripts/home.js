// This script is in charge of the slides on the home page

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto slideshow
let slideInterval = setInterval(function () {
    plusSlides(1);
}, 5000); // Change image every 5 seconds

// Pause on hover
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseover', function () {
    clearInterval(slideInterval);
});
slideshowContainer.addEventListener('mouseout', function () {
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 5000); // Change image every 5 seconds
});
