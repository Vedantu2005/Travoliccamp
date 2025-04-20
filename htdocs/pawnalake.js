// Navigation Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-img');
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Form Validation
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    
    // Basic validation
    let isValid = true;
    let errorMessage = '';

    // Name validation
    if (name.length < 2) {
        isValid = false;
        errorMessage += 'Please enter a valid name\n';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        errorMessage += 'Please enter a valid phone number\n';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address\n';
    }

    // Date validation
    const selectedDate = new Date(date);
    const today = new Date();
    if (selectedDate < today) {
        isValid = false;
        errorMessage += 'Please select a future date\n';
    }

    // Guests validation
    if (guests < 1 || guests > 20) {
        isValid = false;
        errorMessage += 'Number of guests must be between 1 and 20\n';
    }

    if (isValid) {
        // Form is valid, you can submit it here
        alert('Booking submitted successfully! We will contact you soon.');
        bookingForm.reset();
    } else {
        alert(errorMessage);
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});