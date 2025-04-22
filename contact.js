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
// Google Maps Integration
function initMap() {
    // Replace with your actual coordinates
    const location = { lat: 34.0259, lng: -118.7798 }; // Malibu coordinates
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location,
        styles: [
            {
                "featureType": "landscape",
                "stylers": [
                    { "hue": "#FFBB00" },
                    { "saturation": 43.400000000000006 },
                    { "lightness": 37.599999999999994 },
                    { "gamma": 1 }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    { "hue": "#FFC200" },
                    { "saturation": -61.8 },
                    { "lightness": 45.599999999999994 },
                    { "gamma": 1 }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    { "hue": "#FF0300" },
                    { "saturation": -100 },
                    { "lightness": 51.19999999999999 },
                    { "gamma": 1 }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    { "hue": "#0078FF" },
                    { "saturation": -13.200000000000003 },
                    { "lightness": 2.4000000000000057 },
                    { "gamma": 1 }
                ]
            }
        ]
    });

    // Add marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Travollic Beach Camping'
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: '<div><h3>Travollic Beach Camping</h3><p>123 Beach Road, Malibu, CA 90265</p></div>'
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    
}
