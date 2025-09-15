// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
const video = document.getElementById('coffeeVideo');
const btn = document.getElementById('playPauseBtn');

btn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    btn.textContent = '⏸ Pause';
  } else {
    video.pause();
    btn.textContent = '▶ Play';
  }
});

// Menu Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding content
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.name.value;
        const email = this.email.value;
        const message = this.message.value;
        
        // Simulate sending data
        alert(`Thank you, ${name}! Your message has been received.\n\nWe'll respond to ${email} soon.`);
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.about, .menu, .contact, .hero-content').forEach(section => {
    section.classList.add('animated');
    observer.observe(section);
});

// Scroll animation for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    
    if (window.scrollY > hero.offsetHeight / 4) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.08)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.pageYOffset;
    
    if (heroImage) {
        const parallaxSpeed = 0.5;
        heroImage.style.backgroundPositionY = scrollPosition * parallaxSpeed + 'px';
    }
});

// Add subtle floating effect to decorative elements
const decorations = document.querySelectorAll('.decoration');
decorations.forEach(decoration => {
    decoration.addEventListener('mouseenter', () => {
        decoration.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    decoration.addEventListener('mouseleave', () => {
        decoration.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add hover effects to menu items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.borderLeftColor = '#8d6e63';
        item.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.borderLeftColor = '#8d6e63';
        item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
    });
});

// Add typing effect to hero headline
const heroHeadline = document.querySelector('.hero-content h2');
const text = heroHeadline.textContent;
heroHeadline.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroHeadline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Wait for page load before starting typing animation
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter();
    }, 800);
});

// Create ice cream animation that follows mouse
const iceCreamAnimation = document.querySelector('.ice-cream-animation');
if (iceCreamAnimation) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX - 40;
        const y = e.clientY - 80;
        iceCreamAnimation.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    // Make ice cream visible after page load
    setTimeout(() => {
        iceCreamAnimation.style.opacity = '0.8';
    }, 2000);
}

// Initialize Google Maps when page loads
function initMap() {
    // Coordinates for Luna Gelato (Portland, OR)
    const location = { lat: 45.523452, lng: -122.676207 };
    
    // Create map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: location,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    });
    
    // Add custom marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 15,
            fillColor: '#8d6e63',
            fillOpacity: 1,
            strokeColor: '#5d4037',
            strokeWeight: 2
        }
    });
    
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="min-width: 250px; padding: 15px; background-color: white; border-radius: 10px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);">
                <h3 style="color: #5d4037; margin-bottom: 5px; font-size: 1.3rem;">Luna Gelato</h3>
                <p style="color: #5d4037; margin: 5px 0; font-size: 1rem;">123 Vintage Avenue</p>
                <p style="color: #5d4037; margin: 5px 0; font-size: 1rem;">Historic District</p>
                <p style="color: #5d4037; margin: 5px 0; font-size: 1rem;">Portland, OR 97205</p>
                <p style="color: #5d4037; margin: 5px 0; font-size: 1rem;">Est. 1923</p>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
                    <p style="color: #8d6e63; margin: 0; font-weight: 600; font-size: 1rem;">Hours:</p>
                    <p style="color: #5d4037; margin: 3px 0; font-size: 0.9rem;">Mon-Fri: 7am-7pm</p>
                    <p style="color: #5d4037; margin: 3px 0; font-size: 0.9rem;">Sat-Sun: 8am-8pm</p>
                </div>
            </div>
        `,
        maxWidth: 300
    });
    
    // Open info window on marker click
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
    
    // Add event listener for when the map is fully loaded
    google.maps.event.addListenerOnce(map, 'idle', function() {
        // Add a subtle fade-in effect when the map loads
        const mapElement = document.getElementById('map');
        mapElement.style.opacity = '0';
        mapElement.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            mapElement.style.opacity = '1';
        }, 100);
    });
    
    // Add custom control to show address
    const addressControlDiv = document.createElement('div');
    const addressControl = document.createElement('div');
    addressControl.style.marginTop = '10px';
    addressControl.style.padding = '10px 15px';
    addressControl.style.backgroundColor = 'white';
    addressControl.style.borderRadius = '5px';
    addressControl.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    addressControl.style.fontFamily = "'Playfair Display', serif";
    addressControl.style.fontSize = '14px';
    addressControl.style.color = '#5d4037';
    addressControl.style.fontWeight = '500';
    addressControl.innerHTML = '123 Vintage Ave, Portland, OR 97205';
    addressControlDiv.appendChild(addressControl);
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(addressControlDiv);
}

// Load Google Maps API dynamically
function loadGoogleMapsAPI() {
    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
        initMap();
        return;
    }
    
    // Create script element
    const script = document.createElement('script');
    script.src = `https://www.google.com/maps/place/Luna+gelato/@35.4272755,7.1426835,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID74ofWRA!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAC9h4nrAMj_x61-bzv_-zU_rZmgfLUQ__NEd1Mka75nU2R5npKBE6zjYEzj-_II_gSXM0WDIDIaGoKx7UccJgA19CMXBgQ84Is-nrF2Bgj5ggyy6gy2n0tpXGVrhEYyfBb-mgM9odWKP%3Dw203-h392-k-no!7i1080!8i2089!4m9!3m8!1s0x12f7210072f5e7cf:0xbbcbd670270ad673!8m2!3d35.4273104!4d7.1425221!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11wbhksppl?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D`;
    script.async = true;
    script.defer = true;
    
    // Add error handling
    script.onerror = () => {
        console.error('Failed to load Google Maps API');
        // Fallback to static image or message
        const mapContainer = document.querySelector('.map-container');
        if (mapContainer) {
            mapContainer.innerHTML = `
                <div class="map-header">
                    <h3>Find Your Way to Luna Gelato</h3>
                    <p>Step into our historic sanctuary where time slows down and every scoop tells a story</p>
                </div>
                <div class="map-fallback">
                    <img src="https://maps.app.goo.gl/zv9uN7zCoGfsK45Z7" alt="Luna Gelato Location" class="map">
                    <div class="map-footer">
                        <div class="map-location">
                            <div class="location-icon">📍</div>
                            <div class="location-info">
                                <h4>Luna Gelato</h4>
                                <p>123 Vintage Avenue, Portland, OR 97205</p>
                            </div>
                        </div>
                        <div class="map-directions">
                            <a href="https://maps.app.goo.gl/zv9uN7zCoGfsK45Z7" target="_blank" class="btn btn-secondary">Get Directions</a>
                        </div>
                    </div>
                </div>
            `;
        }
    };
    
    // Append script to head
    document.head.appendChild(script);
}

// Initialize maps when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Only load maps if the container exists
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        loadGoogleMapsAPI();
    }
});