// Mobile Navigation
document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("nav-active");
            hamburger.classList.toggle("active");
        });
    }
});
// Lightbox Functionality

function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";  // Show lightbox
    lightboxImg.src = img.src;        // Set clicked image in lightbox
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target.id === "lightbox") {
        closeLightbox();
    }
});

// Ensure only one video plays at a time
const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("play", function () {
        videos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause(); // Pause other videos when one starts playing
            }
        });
    });
});
