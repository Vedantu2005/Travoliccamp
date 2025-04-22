document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            // Toggle 'nav-active' class to show/hide navigation links
            navLinks.classList.toggle("nav-active");

            // Toggle 'active' class on hamburger to animate it (e.g., turning into a cross)
            hamburger.classList.toggle("active");
        });
    }

});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.transition = 'all 0.3s ease-in-out';
        } else {
            navbar.style.background = 'rgba(255, 255, 255)'; // Light background instead of transparent
            navbar.style.boxShadow = 'none';
        }
    }
});


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Search Form
const searchForm = document.getElementById('search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Search submitted');
    });
}

// Modal and Form Functionality
const modal = document.getElementById("booking-modal");
const closeModal = document.querySelector(".close-modal");
const campaignIdInput = document.getElementById("campaign-id");

function openBookingModal(campaignId) {
    if (modal && campaignIdInput) {
        modal.style.display = "flex";
        campaignIdInput.value = campaignId;
    }
}

if (modal && closeModal) {
    closeModal.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Gallery Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close');

if (galleryItems.length > 0 && lightbox && lightboxImg && closeLightbox) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImg.src = item.src;
            lightbox.style.display = "flex";
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}


// Redirect "Know More" button for Alibaug Beach Camp
document.addEventListener("DOMContentLoaded", function () {
    const alibaugButton = document.querySelector('.spot-card:nth-child(1) .spot-button');
    if (alibaugButton) {
        alibaugButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = "alibag.html";
        });
    }

    // Redirect "Know More" button for Pawna Lake
    const pawnaButton = document.querySelector('.spot-card:nth-child(2) .spot-button');
    if (pawnaButton) {
        pawnaButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = "pawnalake.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "assets/front.jpg",
        "assets/gruopphoto.jpg",
        "assets/bonfire.jpg"
    ];

    let currentIndex = 0;
    const heroSection = document.querySelector(".hero");

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${images[currentIndex]}')`;
    }

    // Preload images for smoother transitions
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    setTimeout(() => {
        setInterval(changeBackground, 5000);
    }, 5000);
});






