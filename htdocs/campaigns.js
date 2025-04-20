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


    // Google Maps Integration
    function initMap() {
        const alibaug = { lat: 18.6000, lng: 72.8833 };
        const map = new google.maps.Map(document.getElementById("google-map-container"), {
            zoom: 12,
            center: alibaug,
            mapTypeId: "roadmap"
        });
        new google.maps.Marker({
            position: alibaug,
            map: map,
            title: "Alibaug, Maharashtra"
        });
    }
    window.initMap = initMap;

   // Modal and Form Functionality
 const modal = document.getElementById("booking-modal");
 const closeModal = document.querySelector(".close-modal");
 const campaignIdInput = document.getElementById("campaign-id");

 function openBookingModal(campaignId) {
     if (modal && campaignIdInput) {
        document.getElementById("booking-modal").style.display = "flex";
         campaignIdInput.value = campaignId;
     }
 }
 
 if (modal && closeModal) {
     closeModal.addEventListener("click", () => modal.style.display = "none");
     window.addEventListener("click", (event) => {
         if (event.target === modal) {
            document.getElementById("booking-modal").style.display = "none";
         }
     });
 }


 // Form Validation
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;
        
        let isValid = true;
        let errorMessage = '';

        if (name.length < 2) {
            isValid = false;
            errorMessage += 'Please enter a valid name.\n';
        }

        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(phone)) {
            isValid = false;
            errorMessage += 'Please enter a valid phone number.\n';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to avoid issues with timezones
        
        if (selectedDate < today) {
            isValid = false;
            alert('Please select a future date'); // Popup message for past date
        }

        if (guests < 1 || guests > 20) {
            isValid = false;
            errorMessage += 'Number of guests must be between 1 and 20.\n';
        }

        if (isValid) {
            alert('Booking submitted successfully! We will contact you soon.');
            bookingForm.reset();
        } else if (errorMessage) {
            alert(errorMessage);
        }
    });
}


    // Form submission handling
    const form = document.getElementById("sheetdb-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(form)
            })
            .then(response => response.json())
            .then(() => window.open("page2.html", "_blank"));
        });
    }

    // Campaign Search Functionality
    const searchForm = document.getElementById("search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const locationInput = document.getElementById("location").value.trim().toLowerCase();
            document.querySelectorAll(".campaign-card").forEach(card => {
                const cardLocationElement = card.querySelector(".campaign-details span i.fa-map-marker-alt");
                if (cardLocationElement) {
                    const cardLocation = cardLocationElement.parentNode.textContent.trim().toLowerCase();
                    card.style.display = locationInput === "" || cardLocation.includes(locationInput) ? "flex" : "none";
                }
            });
        });
    }
});
