// Portfolio JavaScript Functionality

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
const loading = document.getElementById('loading');
const typingElement = document.getElementById('typingText');
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselIndicators = document.getElementById('carouselIndicators');
const contactForm = document.getElementById('contactForm');

// Global Variables
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-slide').length;

// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        loading.classList.add('hidden');
        initializeCarousel();
    }, 1000);
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
navLinks.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Typing Animation
const typingTexts = [
    'Full Stack Developer',
    'Web Developer',
    'Software Engineer',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 100 : 150;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeText, typeSpeed);
}

// Start typing animation
setTimeout(typeText, 1000);

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                const value = Math.ceil(current);
                if (counter.textContent.includes('%')) {
                    counter.textContent = value + '%';
                } else {
                    counter.textContent = value + '+';
                }
                setTimeout(updateCounter, 20);
            } else {
                if (counter.textContent.includes('%')) {
                    counter.textContent = target + '%';
                } else {
                    counter.textContent = target + '+';
                }
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Carousel Functionality
function initializeCarousel() {
    if (!carouselTrack || totalSlides === 0) return;

    // Create indicators
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        carouselIndicators.appendChild(indicator);
    }

    // Auto-play carousel
    setInterval(nextSlide, 5000);
}

function updateCarousel() {
    if (!carouselTrack) return;
    
    const translateX = -currentSlide * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Carousel Event Listeners
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);

// Contact Form Handler
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple form validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--glass-bg);
                border: 1px solid var(--glass-border);
                border-radius: 10px;
                padding: 1rem;
                backdrop-filter: blur(20px);
                color: var(--text-light);
                max-width: 400px;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            
            .notification-success {
                border-left: 4px solid #10b981;
            }
            
            .notification-error {
                border-left: 4px solid #ef4444;
            }
            
            .notification-info {
                border-left: 4px solid var(--primary-color);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--text-light);
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 50%;
                transition: background 0.3s ease;
            }
            
            .notification-close:hover {
                background: rgba(255, 255, 255, 0.1);
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Download CV Function
function downloadCV() {
    // Create a temporary link to download CV
    const link = document.createElement('a');
    
    // In a real implementation, you would have an actual CV file
    // For demo purposes, we'll create a data URL with CV content
    const cvContent = `Michael Maxwell Mwasame - Full Stack Developer
    
Contact Information:
Email: michaelmwasame6@gmail.com
Phone: +254743493619
Location: Kutus, Kenya
LinkedIn: linkedin.com/in/michaelmwasame
GitHub: github.com/maximasprim

Education:
- BS Computer Science, Kirinyaga University (Sep 2021 - April 2025)
- Teach2Give Full Stack Development Bootcamp (May 2024 - August 2024)

Skills:
- Languages: JavaScript, TypeScript, Python, PHP, HTML, CSS, SCSS
- Frameworks: React.js, Node.js, Hono, Laravel, Drizzle ORM
- Databases: PostgreSQL, MySQL, Supabase, Firebase
- Tools: Git/GitHub, Docker, Vercel, Azure, Figma

Experience:
- Networking Engineer at Cyber Eyes Networks (Jan 2024 - Feb 2025)
- Software Developer Trainee at Teach2Give (April 2024 - June 2024)
- ICT Attaché at ICT Authority (May 2023 - August 2023)

Projects:
- AgroMart AI - Smart Agricultural Marketplace
- Unified Property Management System
- Smart AI Poultry System
- Vehicle Rental System
- Maximas AI Chatbot
- Real-Time Chat Application

Certifications:
- Full Stack Software Development Certificate (Teach2Give, August 2024)
- English C2 Proficiency Certificate (EF SET, April 2024)`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    link.href = url;
    link.download = 'Michael_Maxwell_Mwasame_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('CV downloaded successfully!', 'success');
}

// Make downloadCV function global
window.downloadCV = downloadCV;

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroElements = document.querySelectorAll('.hero');
    
    heroElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Particle Effect for Hero Section
function createParticles() {
    const particleCount = 50;
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(99, 102, 241, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.pointerEvents = 'none';
        hero.appendChild(particle);
    }
}

// Initialize particles after page load
window.addEventListener('load', createParticles);

// Skill tag hover effects
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Add loading effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('loading')) return;
            
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Navbar active link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add active link styles
const navStyles = document.createElement('style');
navStyles.textContent = `
    .nav-links a.active {
        color: var(--accent-color);
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(navStyles);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active nav link
    updateActiveNavLink();
    
    // Add smooth scroll behavior to HTML
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

// Error handling for missing elements
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element not found: ${selector}`);
    }
    return element;
}

// Console welcome message
console.log(`
🚀 Welcome to Michael Maxwell Mwasame's Portfolio!
💻 Built with modern web technologies
🎨 Featuring smooth animations and interactive elements
📧 Contact: michaelmwasame6@gmail.com
🌐 GitHub: github.com/maximasprim
`);

console.log('Portfolio loaded successfully! 🎉');