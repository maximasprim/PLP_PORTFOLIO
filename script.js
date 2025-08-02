// // Portfolio JavaScript Functionality

// // DOM Elements
// const navbar = document.getElementById('navbar');
// const mobileMenu = document.getElementById('mobileMenu');
// const navLinks = document.getElementById('navLinks');
// const loading = document.getElementById('loading');
// const typingElement = document.getElementById('typingText');
// const carouselTrack = document.getElementById('carouselTrack');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const carouselIndicators = document.getElementById('carouselIndicators');
// const contactForm = document.getElementById('contactForm');

// // Global Variables
// let currentSlide = 0;
// const totalSlides = document.querySelectorAll('.carousel-slide').length;

// // Loading Screen
// window.addEventListener('load', function() {
//     setTimeout(() => {
//         loading.classList.add('hidden');
//         initializeCarousel();
//     }, 1000);
// });

// // Navbar Scroll Effect
// window.addEventListener('scroll', function() {
//     if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// // Mobile Menu Toggle
// mobileMenu.addEventListener('click', function() {
//     navLinks.classList.toggle('active');
//     const icon = this.querySelector('i');
//     icon.classList.toggle('fa-bars');
//     icon.classList.toggle('fa-times');
// });

// // Close mobile menu when clicking on a link
// navLinks.addEventListener('click', function(e) {
//     if (e.target.tagName === 'A') {
//         navLinks.classList.remove('active');
//         const icon = mobileMenu.querySelector('i');
//         icon.classList.remove('fa-times');
//         icon.classList.add('fa-bars');
//     }
// });

// // Smooth Scrolling for Navigation Links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             const offsetTop = target.offsetTop - 80; // Account for fixed navbar
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Typing Animation
// const typingTexts = [
//     'Full Stack Developer',
//     'Web Developer',
//     'Software Engineer',
//     'Artificial Intelligence Expert',
//     'Problem Solver',
//     'Tech Innovator',
//     'Founder & CEO -AGRILINK'
// ];

// let textIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function typeText() {
//     const currentText = typingTexts[textIndex];
    
//     if (isDeleting) {
//         typingElement.textContent = currentText.substring(0, charIndex - 1);
//         charIndex--;
//     } else {
//         typingElement.textContent = currentText.substring(0, charIndex + 1);
//         charIndex++;
//     }
    
//     let typeSpeed = isDeleting ? 100 : 150;
    
//     if (!isDeleting && charIndex === currentText.length) {
//         typeSpeed = 2000;
//         isDeleting = true;
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         textIndex = (textIndex + 1) % typingTexts.length;
//         typeSpeed = 500;
//     }
    
//     setTimeout(typeText, typeSpeed);
// }

// // Start typing animation
// setTimeout(typeText, 1000);

// // Scroll Animation Observer
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px'
// };

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//     });
// }, observerOptions);

// // Observe all fade-in elements
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.fade-in').forEach(el => {
//         observer.observe(el);
//     });
// });

// // Counter Animation for Stats
// function animateCounters() {
//     const counters = document.querySelectorAll('.stat-number');
//     counters.forEach(counter => {
//         const target = parseInt(counter.textContent.replace(/\D/g, ''));
//         const increment = target / 100;
//         let current = 0;
        
//         const updateCounter = () => {
//             if (current < target) {
//                 current += increment;
//                 const value = Math.ceil(current);
//                 if (counter.textContent.includes('%')) {
//                     counter.textContent = value + '%';
//                 } else {
//                     counter.textContent = value + '+';
//                 }
//                 setTimeout(updateCounter, 20);
//             } else {
//                 if (counter.textContent.includes('%')) {
//                     counter.textContent = target + '%';
//                 } else {
//                     counter.textContent = target + '+';
//                 }
//             }
//         };
        
//         updateCounter();
//     });
// }

// // Trigger counter animation when stats section is visible
// const statsSection = document.querySelector('.stats-grid');
// if (statsSection) {
//     const statsObserver = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 animateCounters();
//                 statsObserver.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.5 });
    
//     statsObserver.observe(statsSection);
// }

// // Carousel Functionality
// function initializeCarousel() {
//     if (!carouselTrack || totalSlides === 0) return;

//     // Create indicators
//     for (let i = 0; i < totalSlides; i++) {
//         const indicator = document.createElement('div');
//         indicator.classList.add('indicator');
//         if (i === 0) indicator.classList.add('active');
//         indicator.addEventListener('click', () => goToSlide(i));
//         carouselIndicators.appendChild(indicator);
//     }

//     // Auto-play carousel
//     setInterval(nextSlide, 500);
// }

// function updateCarousel() {
//     if (!carouselTrack) return;
    
//     const translateX = -currentSlide * 100;
//     carouselTrack.style.transform = `translateX(${translateX}%)`;
    
//     // Update indicators
//     document.querySelectorAll('.indicator').forEach((indicator, index) => {
//         indicator.classList.toggle('active', index === currentSlide);
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     updateCarousel();
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//     updateCarousel();
// }

// function goToSlide(slideIndex) {
//     currentSlide = slideIndex;
//     updateCarousel();
// }

// // Carousel Event Listeners
// if (nextBtn) nextBtn.addEventListener('click', nextSlide);
// if (prevBtn) prevBtn.addEventListener('click', prevSlide);

// // Contact Form Handler
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const formData = new FormData(this);
//         const data = Object.fromEntries(formData);
        
//         // Simple form validation
//         if (!data.name || !data.email || !data.subject || !data.message) {
//             showNotification('Please fill in all fields', 'error');
//             return;
//         }
        
//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(data.email)) {
//             showNotification('Please enter a valid email address', 'error');
//             return;
//         }
        
//         // Simulate form submission
//         const submitBtn = this.querySelector('button[type="submit"]');
//         const originalText = submitBtn.innerHTML;
        
//         submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//         submitBtn.disabled = true;
        
//         setTimeout(() => {
//             showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
//             this.reset();
//             submitBtn.innerHTML = originalText;
//             submitBtn.disabled = false;
//         }, 2000);
//     });
// }

// // Notification System
// function showNotification(message, type = 'info') {
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type}`;
//     notification.innerHTML = `
//         <div class="notification-content">
//             <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
//             <span>${message}</span>
//         </div>
//         <button class="notification-close">
//             <i class="fas fa-times"></i>
//         </button>
//     `;
    
//     // Add notification styles if not already added
//     if (!document.querySelector('#notification-styles')) {
//         const style = document.createElement('style');
//         style.id = 'notification-styles';
//         style.textContent = `
//             .notification {
//                 position: fixed;
//                 top: 100px;
//                 right: 20px;
//                 background: var(--glass-bg);
//                 border: 1px solid var(--glass-border);
//                 border-radius: 10px;
//                 padding: 1rem;
//                 backdrop-filter: blur(20px);
//                 color: var(--text-light);
//                 max-width: 400px;
//                 z-index: 10000;
//                 animation: slideInRight 0.3s ease;
//                 display: flex;
//                 align-items: center;
//                 justify-content: space-between;
//                 gap: 1rem;
//             }
            
//             .notification-success {
//                 border-left: 4px solid #10b981;
//             }
            
//             .notification-error {
//                 border-left: 4px solid #ef4444;
//             }
            
//             .notification-info {
//                 border-left: 4px solid var(--primary-color);
//             }
            
//             .notification-content {
//                 display: flex;
//                 align-items: center;
//                 gap: 0.5rem;
//             }
            
//             .notification-close {
//                 background: none;
//                 border: none;
//                 color: var(--text-light);
//                 cursor: pointer;
//                 padding: 0.25rem;
//                 border-radius: 50%;
//                 transition: background 0.3s ease;
//             }
            
//             .notification-close:hover {
//                 background: rgba(255, 255, 255, 0.1);
//             }
            
//             @keyframes slideInRight {
//                 from {
//                     transform: translateX(100%);
//                     opacity: 0;
//                 }
//                 to {
//                     transform: translateX(0);
//                     opacity: 1;
//                 }
//             }
//         `;
//         document.head.appendChild(style);
//     }
    
//     document.body.appendChild(notification);
    
//     // Close button functionality
//     notification.querySelector('.notification-close').addEventListener('click', () => {
//         notification.remove();
//     });
    
//     // Auto remove after 5 seconds
//     setTimeout(() => {
//         if (notification.parentNode) {
//             notification.remove();
//         }
//     }, 5000);
// }

// // Download CV Function
// // Download CV as PDF Function
// function downloadCV() {
//     // Create a new jsPDF instance
//     // Since you want to avoid libraries, we'll use the browser's print-to-PDF functionality
    
//     // Method 1: Create a formatted HTML content and use window.print()
//     const cvContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <meta charset="UTF-8">
//             <title>Michael Maxwell Mwasame - CV</title>
//             <style>
//                 body {
//                     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//                     max-width: 8.5in;
//                     margin: 0 auto;
//                     padding: 0.75in;
//                     line-height: 1.4;
//                     color: #000;
//                     font-size: 11pt;
//                 }
//                 .header {
//                     text-align: center;
//                     margin-bottom: 20px;
//                 }
//                 .name {
//                     font-size: 18pt;
//                     font-weight: bold;
//                     color: #4472C4;
//                     letter-spacing: 2px;
//                     margin-bottom: 5px;
//                 }
//                 .contact-line {
//                     font-size: 10pt;
//                     margin-bottom: 3px;
//                 }
//                 .email-links {
//                     font-size: 9pt;
//                     color: #0066CC;
//                     margin-bottom: 15px;
//                 }
//                 .section-title {
//                     font-size: 12pt;
//                     font-weight: bold;
//                     color: #4472C4;
//                     text-transform: uppercase;
//                     letter-spacing: 1px;
//                     margin: 20px 0 10px 0;
//                     border-bottom: none;
//                 }
//                 .education-item, .project-item, .experience-item {
//                     margin-bottom: 12px;
//                 }
//                 .project-title, .job-title {
//                     font-weight: bold;
//                     font-size: 11pt;
//                 }
//                 .project-subtitle {
//                     font-style: italic;
//                     color: #666;
//                     margin-bottom: 3px;
//                 }
//                 .date {
//                     float: right;
//                     font-weight: normal;
//                     font-size: 10pt;
//                 }
//                 .project-description, .job-description {
//                     font-size: 10pt;
//                     text-align: justify;
//                     margin-top: 3px;
//                     line-height: 1.3;
//                 }
//                 .github-link {
//                     color: #0066CC;
//                     font-size: 9pt;
//                 }
//                 ul {
//                     margin: 8px 0;
//                     padding-left: 20px;
//                 }
//                 li {
//                     margin-bottom: 3px;
//                     font-size: 10pt;
//                 }
//                 .skills-grid {
//                     display: block;
//                 }
//                 .skill-item {
//                     margin-bottom: 5px;
//                     font-size: 10pt;
//                 }
//                 .skill-category {
//                     font-weight: bold;
//                     display: inline;
//                 }
//                 .community-item {
//                     margin-bottom: 10px;
//                 }
//                 .community-title {
//                     font-weight: bold;
//                     font-size: 10pt;
//                 }
//                 .languages-section, .certifications-section {
//                     display: flex;
//                     justify-content: space-between;
//                 }
//                 .lang-left, .cert-left {
//                     flex: 1;
//                 }
//                 .lang-right, .cert-right {
//                     flex: 1;
//                     text-align: right;
//                 }
//                 @media print {
//                     body { 
//                         margin: 0; 
//                         padding: 0.5in; 
//                         font-size: 10pt;
//                     }
//                     .name { font-size: 16pt; }
//                     .section-title { font-size: 11pt; }
//                 }
//             </style>
//         </head>
//         <body>
//             <div class="header">
//                 <div class="name">MICHAEL MAXWELL MWASAME</div>
//                 <div class="contact-line">Kutus, Kenya | +254743493619</div>
//                 <div class="email-links">
//                     <a href="mailto:michaelmwasame6@gmail.com">michaelmwasame6@gmail.com</a> | 
//                     <a href="https://linkedin.com/in/michaelmwasame">linkedin.com/in/michaelmwasame</a> | 
//                     <a href="https://github.com/maximasprim">github.com/maximasprim</a>
//                 </div>
//             </div>

//             <div class="section">
//                 <div class="section-title">EDUCATION</div>
//                 <div class="education-item">
//                     • BS Computer Science, Kirinyaga University (Sep 2021 – April 2025)
//                 </div>
//                 <div class="education-item">
//                     • Teach2Give(The Jitu) (May 2024-August 2024)
//                 </div>
//             </div>

//             <div class="section">
//                 <div class="section-title">SKILLS</div>
//                 <div class="skills-grid">
//                     <div class="skill-item">
//                         <span class="skill-category">Database:</span> PostgreSQL, MySQL, Supabase, Firebase, pgAdmin, Neon
//                     </div>
//                     <div class="skill-item">
//                         <span class="skill-category">Languages:</span> JavaScript, TypeScript, Python, Php, Scripting Languages (Html, Css, Scss, TailwindCss)
//                     </div>
//                     <div class="skill-item">
//                         <span class="skill-category">Frameworks:</span> Node.js, React.js, Hono, Drizzle-ORM, Laravel
//                     </div>
//                     <div class="skill-item">
//                         <span class="skill-category">Tooling:</span> Git/GitHub, Visual Studio, Vercel, Render, Azure, Figma, Docker (containerization)
//                     </div>
//                     <div class="skill-item">
//                         <span class="skill-category">On-Going Advancements:</span> Golang, Rust, Docker, Flutter
//                     </div>
//                 </div>
//             </div>

//             <div class="section">
//                 <div class="section-title">PROJECTS</div>
                
//                 <div class="project-item">
//                     <div class="project-title">
//                         Unified Property Management System – Full-Stack Development
//                         <span class="date">Jan 2025 – April 2025</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Developed a centralized platform for managing residential and commercial properties(Land, Vehicles, Houses) with comprehensive history information for each listed property. Implemented features like tenant management, fee tracking, secure authentication processing, and analytics dashboards for property managers. <a href="#" class="github-link">GitHub Link</a> | <a href="#" class="github-link">Deployed link</a>
//                     </div>
//                 </div>

//                 <div class="project-item">
//                     <div class="project-title">
//                         AgroMart AI – Full-Stack On-demand AI Integration
//                         <span class="date">June 2025</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Developed a smart agricultural digital marketplace connecting farmers, buyers, and agro-dealers. Integrated AI-powered product recommendations, dynamic pricing suggestions, secure user verification, and real-time messaging system. Engineered complete digital transformation for agro-products through a responsive web interface and mobile-first design. <a href="#" class="github-link">GitHub Link</a>
//                     </div>
//                 </div>

//                 <div class="project-item">
//                     <div class="project-title">
//                         Smart AI Poultry System – IoT integrated with AI
//                         <span class="date">July 2025</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Built an intelligent poultry management system to automate and optimize layer farming operations. Integrated advanced real-time monitoring, predictive analytics for production prediction, inventory tracking, and secured data storage. Delivered efficient layer management through a user-friendly web interface and mobile application. <a href="#" class="github-link">GitHub Link</a>
//                     </div>
//                 </div>

//                 <div class="project-item">
//                     <div class="project-title">
//                         Vehicle Rental System – Full-Stack Development
//                         <span class="date">May 2024-June 2024</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Developed a fully functional web application to manage vehicle rentals, enabling seamless booking and secure payment processing. Implemented features for user registration, vehicle browsing, real-time availability tracking, admin and customer dashboards, and Stripe-integrated transactions. <a href="#" class="github-link">GitHub Link</a> | <a href="#" class="github-link">Deployed link</a>
//                     </div>
//                 </div>

//                 <div class="project-item">
//                     <div class="project-title">
//                         Maximas AI Chatbot – Full-Stack Development
//                         <span class="date">June 2025</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Engineered a comprehensive AI chatbot application featuring robust user authentication, persistent conversation history (integrated from SQLite to PostgreSQL), and natural language processing. Implemented real-time conversational interface with user latency. <a href="#" class="github-link">GitHub Link</a> | <a href="#" class="github-link">Deployed link</a>
//                     </div>
//                 </div>

//                 <div class="project-item">
//                     <div class="project-title">
//                         Chat App – Full-Stack Development
//                         <span class="date">Nov 2024</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Built a real-time messaging application with user authentication, group chats, message history, and multimedia support using Web Socket for seamless communication. Built using WebSocket for seamless communication with low latency. <a href="#" class="github-link">GitHub Link</a>
//                     </div>
//                 </div>
//             </div>

//             <div class="section">
//                 <div class="section-title">EXPERIENCE</div>
                
//                 <div class="experience-item">
//                     <div class="project-title">
//                         Software Developer Trainee – Teach2Give(The Jitu), Nyeri Kenya
//                         <span class="date">April 2024 – June 2024</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         I am an experienced software developer with strong background in web development and cloud computing, specializing in React, Node.js, Hono, Django CRUD with PostgreSQL/MySQL. I have successfully built and deployed numerous full-stack applications, user analytics and manage servers. I actively engage in Agile methodologies, use Git for version control, and communicate effectively within teams to deliver quality software solutions. <a href="#" class="github-link">Link</a>
//                     </div>
//                 </div>

//                 <div class="experience-item">
//                     <div class="project-title">
//                         Networking Engineer – Cyber Eyes Networks, Kirinyaga Kenya
//                         <span class="date">Jan 2024 – Feb 2025</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Designed and maintained secure network infrastructure, configured routers/switches, and provided technical support for optimal performance. Implemented security patches and resolved network traffic.
//                     </div>
//                 </div>

//                 <div class="experience-item">
//                     <div class="project-title">
//                         ICT Attaché – ICT Authority, Bungoma Kenya
//                         <span class="date">May 2023 – August 2023</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Supported government IT projects, assisted in system audits, and trained staff on cybersecurity protocols and hardware/software troubleshooting.
//                     </div>
//                 </div>
//             </div>

//             <div class="section">
//                 <div class="section-title">LEADERSHIP AND COMMUNITY INVOLVEMENT</div>
                
//                 <div class="community-item">
//                     <div class="community-title">
//                         Web Development Lead – Computer Society of Kirinyaga
//                         <span class="date">September 2022 – 2023</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Lead a team of students in developing and maintaining the club's web system. Provided technical direction and ensured project execution aligned with club goals.
//                     </div>
//                 </div>

//                 <div class="community-item">
//                     <div class="community-title">
//                         Member – Nairobi DevOps Community
//                         <span class="date">2023 – Present</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Engaged in knowledge-sharing on DevOps tools (Docker, CI/CD) and collaborated on automation projects to streamline deployment workflows.
//                     </div>
//                 </div>

//                 <div class="community-item">
//                     <div class="community-title">
//                         ALX Kenya Program Participant
//                         <span class="date">2022 – 2024</span>
//                     </div>
//                     <div style="clear: both;"></div>
//                     <div class="project-description">
//                         Actively engaged in ALX's tech training programs, focusing on software development and leadership skills through peer learning and project-based challenges.
//                     </div>
//                 </div>
//             </div>

//             <div class="section">
//                 <div class="section-title">LANGUAGES</div>
//                 <div class="languages-section">
//                     <div class="lang-left">English – Proficient</div>
//                     <div class="lang-right">Swahili – Native</div>
//                 </div>
//             </div>

//             <div class="section">
//                 <div class="section-title">CERTIFICATIONS</div>
//                 <div class="certifications-section">
//                     <div class="cert-left">
//                         Full Stack Software Development Certificate –<br>
//                         Teach2Give | August 2024
//                     </div>
//                     <div class="cert-right">
//                         English (C2 Proficiency) Certificate –<br>
//                         EF SET | April 2024
//                     </div>
//                 </div>
//             </div>
//         </body>
//         </html>
//     `;

//     // Open the CV content in a new window for printing/saving as PDF
//     const printWindow = window.open('', '_blank');
//     printWindow.document.write(cvContent);
//     printWindow.document.close();
    
//     // Wait for content to load, then trigger print dialog
//     printWindow.onload = function() {
//         printWindow.print();
//         // Close the window after printing (optional)
//         printWindow.onafterprint = function() {
//             printWindow.close();
//         };
//     };
    
//     showNotification('CV opened for download. Use "Save as PDF" in the print dialog.', 'success');
// }

// // Alternative method: Create a downloadable HTML file that can be converted to PDF
// function downloadCVAsHTML() {
//     const cvContent = `<!DOCTYPE html>
// <html>
// <head>
//     <meta charset="UTF-8">
//     <title>Michael Maxwell Mwasame - CV</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             max-width: 800px;
//             margin: 0 auto;
//             padding: 20px;
//             line-height: 1.6;
//             color: #333;
//         }
//         .header {
//             text-align: center;
//             border-bottom: 2px solid #333;
//             padding-bottom: 20px;
//             margin-bottom: 30px;
//         }
//         .name {
//             font-size: 28px;
//             font-weight: bold;
//             margin-bottom: 5px;
//         }
//         .title {
//             font-size: 18px;
//             color: #666;
//             margin-bottom: 20px;
//         }
//         .contact-info {
//             display: flex;
//             justify-content: center;
//             flex-wrap: wrap;
//             gap: 20px;
//             font-size: 14px;
//         }
//         .section {
//             margin-bottom: 25px;
//         }
//         .section-title {
//             font-size: 20px;
//             font-weight: bold;
//             color: #333;
//             border-bottom: 1px solid #ddd;
//             padding-bottom: 5px;
//             margin-bottom: 15px;
//         }
//         .subsection {
//             margin-bottom: 15px;
//         }
//         .job-title, .education-title {
//             font-weight: bold;
//             font-size: 16px;
//         }
//         .company, .institution {
//             font-style: italic;
//             color: #666;
//         }
//         .date {
//             float: right;
//             color: #888;
//             font-size: 14px;
//         }
//         .skills-list, .projects-list {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//             gap: 10px;
//         }
//         .skill-category, .project-item {
//             background: #f5f5f5;
//             padding: 10px;
//             border-radius: 5px;
//         }
//         ul {
//             margin: 10px 0;
//             padding-left: 20px;
//         }
//         li {
//             margin-bottom: 5px;
//         }
//         @media print {
//             body { margin: 0; padding: 15px; }
//             .contact-info { flex-direction: column; align-items: center; gap: 5px; }
//         }
//     </style>
// </head>
// <body>
//     <div class="header">
//         <div class="name">Michael Maxwell Mwasame</div>
//         <div class="title">Full Stack Developer</div>
//         <div class="contact-info">
//             <div>📧 michaelmwasame6@gmail.com</div>
//             <div>📱 +254743493619</div>
//             <div>📍 Kutus, Kenya</div>
//             <div>💼 linkedin.com/in/michaelmwasame</div>
//             <div>🔗 github.com/maximasprim</div>
//         </div>
//     </div>

//     <div class="section">
//         <div class="section-title">Education</div>
//         <div class="subsection">
//             <div class="education-title">BS Computer Science</div>
//             <div class="institution">Kirinyaga University</div>
//             <div class="date">Sep 2021 - April 2025</div>
//             <div style="clear: both;"></div>
//         </div>
//         <div class="subsection">
//             <div class="education-title">Teach2Give Full Stack Development Bootcamp</div>
//             <div class="date">May 2024 - August 2024</div>
//             <div style="clear: both;"></div>
//         </div>
//     </div>

//     <div class="section">
//         <div class="section-title">Technical Skills</div>
//         <div class="skills-list">
//             <div class="skill-category">
//                 <strong>Languages:</strong><br>
//                 JavaScript, TypeScript, Python, PHP, HTML, CSS, SCSS
//             </div>
//             <div class="skill-category">
//                 <strong>Frameworks:</strong><br>
//                 React.js, Node.js, Hono, Laravel, Drizzle ORM
//             </div>
//             <div class="skill-category">
//                 <strong>Databases:</strong><br>
//                 PostgreSQL, MySQL, Supabase, Firebase
//             </div>
//             <div class="skill-category">
//                 <strong>Tools:</strong><br>
//                 Git/GitHub, Docker, Vercel, Azure, Figma
//             </div>
//         </div>
//     </div>

//     <div class="section">
//         <div class="section-title">Professional Experience</div>
//         <div class="subsection">
//             <div class="job-title">Networking Engineer</div>
//             <div class="company">Cyber Eyes Networks</div>
//             <div class="date">Jan 2024 - Feb 2025</div>
//             <div style="clear: both;"></div>
//         </div>
//         <div class="subsection">
//             <div class="job-title">Software Developer Trainee</div>
//             <div class="company">Teach2Give</div>
//             <div class="date">April 2024 - June 2024</div>
//             <div style="clear: both;"></div>
//         </div>
//         <div class="subsection">
//             <div class="job-title">ICT Attaché</div>
//             <div class="company">ICT Authority</div>
//             <div class="date">May 2023 - August 2023</div>
//             <div style="clear: both;"></div>
//         </div>
//     </div>

//     <div class="section">
//         <div class="section-title">Key Projects</div>
//         <div class="projects-list">
//             <div class="project-item">
//                 <strong>AgroMart AI</strong><br>
//                 Smart Agricultural Marketplace
//             </div>
//             <div class="project-item">
//                 <strong>Property Management System</strong><br>
//                 Unified Property Management Solution
//             </div>
//             <div class="project-item">
//                 <strong>Smart AI Poultry System</strong><br>
//                 IoT-based Poultry Management
//             </div>
//             <div class="project-item">
//                 <strong>Vehicle Rental System</strong><br>
//                 Full-stack Rental Platform
//             </div>
//             <div class="project-item">
//                 <strong>Maximas AI Chatbot</strong><br>
//                 Intelligent Conversational AI
//             </div>
//             <div class="project-item">
//                 <strong>Real-Time Chat App</strong><br>
//                 WebSocket-based Communication
//             </div>
//         </div>
//     </div>

//     <div class="section">
//         <div class="section-title">Certifications</div>
//         <ul>
//             <li>Full Stack Software Development Certificate - Teach2Give (August 2024)</li>
//             <li>English C2 Proficiency Certificate - EF SET (April 2024)</li>
//         </ul>
//     </div>
// </body>
// </html>`;

//     const blob = new Blob([cvContent], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'Michael_Maxwell_Mwasame_CV.html';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
    
//     showNotification('CV downloaded as HTML. Open the file and print as PDF for best results.', 'success');
// }

// // Make downloadCV function global
// window.downloadCV = downloadCV;

// // Add hover effects to project cards
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.project-card').forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-15px) scale(1.02)';
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(-10px) scale(1)';
//         });
//     });
// });

// // Parallax effect for hero section
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const heroElements = document.querySelectorAll('.hero');
    
//     heroElements.forEach(element => {
//         const speed = 0.5;
//         element.style.transform = `translateY(${scrolled * speed}px)`;
//     });
// });

// // Particle Effect for Hero Section
// function createParticles() {
//     const particleCount = 50;
//     const hero = document.querySelector('.hero');
    
//     if (!hero) return;
    
//     for (let i = 0; i < particleCount; i++) {
//         const particle = document.createElement('div');
//         particle.style.position = 'absolute';
//         particle.style.width = '2px';
//         particle.style.height = '2px';
//         particle.style.background = 'rgba(99, 102, 241, 0.5)';
//         particle.style.borderRadius = '50%';
//         particle.style.left = Math.random() * 100 + '%';
//         particle.style.top = Math.random() * 100 + '%';
//         particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
//         particle.style.animationDelay = Math.random() * 2 + 's';
//         particle.style.pointerEvents = 'none';
//         hero.appendChild(particle);
//     }
// }

// // Initialize particles after page load
// window.addEventListener('load', createParticles);

// // Skill tag hover effects
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.skill-tag').forEach(tag => {
//         tag.addEventListener('mouseenter', function() {
//             this.style.transform = 'scale(1.1) rotate(2deg)';
//         });
        
//         tag.addEventListener('mouseleave', function() {
//             this.style.transform = 'scale(1) rotate(0deg)';
//         });
//     });
// });

// // Add loading effect to buttons
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.btn').forEach(btn => {
//         btn.addEventListener('click', function(e) {
//             if (this.classList.contains('loading')) return;
            
//             // Create ripple effect
//             const ripple = document.createElement('span');
//             const rect = this.getBoundingClientRect();
//             const size = Math.max(rect.width, rect.height);
//             const x = e.clientX - rect.left - size / 2;
//             const y = e.clientY - rect.top - size / 2;
            
//             ripple.style.width = ripple.style.height = size + 'px';
//             ripple.style.left = x + 'px';
//             ripple.style.top = y + 'px';
//             ripple.classList.add('ripple');
            
//             this.appendChild(ripple);
            
//             setTimeout(() => {
//                 ripple.remove();
//             }, 600);
//         });
//     });
// });

// // Add ripple effect styles
// const rippleStyles = document.createElement('style');
// rippleStyles.textContent = `
//     .btn {
//         position: relative;
//         overflow: hidden;
//     }
    
//     .ripple {
//         position: absolute;
//         border-radius: 50%;
//         background: rgba(255, 255, 255, 0.3);
//         transform: scale(0);
//         animation: rippleEffect 0.6s linear;
//         pointer-events: none;
//     }
    
//     @keyframes rippleEffect {
//         to {
//             transform: scale(4);
//             opacity: 0;
//         }
//     }
// `;
// document.head.appendChild(rippleStyles);

// // Navbar active link highlighting
// function updateActiveNavLink() {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
//     let current = '';
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (window.scrollY >= sectionTop - 200) {
//             current = section.getAttribute('id');
//         }
//     });
    
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${current}`) {
//             link.classList.add('active');
//         }
//     });
// }

// window.addEventListener('scroll', updateActiveNavLink);

// // Add active link styles
// const navStyles = document.createElement('style');
// navStyles.textContent = `
//     .nav-links a.active {
//         color: var(--accent-color);
//     }
    
//     .nav-links a.active::after {
//         width: 100%;
//     }
// `;
// document.head.appendChild(navStyles);

// // Initialize everything when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Set initial active nav link
//     updateActiveNavLink();
    
//     // Add smooth scroll behavior to HTML
//     document.documentElement.style.scrollBehavior = 'smooth';
// });

// // Performance optimization: Throttle scroll events
// function throttle(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// // Apply throttling to scroll events
// window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

// // Error handling for missing elements
// function safeQuerySelector(selector) {
//     const element = document.querySelector(selector);
//     if (!element) {
//         console.warn(`Element not found: ${selector}`);
//     }
//     return element;
// }

// // Console welcome message
// console.log(`
// 🚀 Welcome to Michael Maxwell Mwasame's Portfolio!
// 💻 Built with modern web technologies
// 🎨 Featuring smooth animations and interactive elements
// 📧 Contact: michaelmwasame6@gmail.com
// 🌐 GitHub: github.com/maximasprim
// `);

// console.log('Portfolio loaded successfully! 🎉');

// Portfolio JavaScript Functionality

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
const loading = document.getElementById('loading');
const typingElement = document.getElementById('typingText');
const contactForm = document.getElementById('contactForm');

// Global Variables for Carousel
let currentSlide = 0;
let totalSlides = 0;
let carouselTrack = null;
let prevBtn = null;
let nextBtn = null;
let carouselIndicators = null;

// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        loading.classList.add('hidden');
        // Don't initialize carousel here - it will be initialized after sections load
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
    'Artificial Intelligence Expert',
    'Problem Solver',
    'Tech Innovator',
    'Founder & CEO - AGRILINK'
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

// FIXED CAROUSEL FUNCTIONALITY
function initializeCarousel() {
    console.log('Initializing carousel...');
    
    // Get fresh references to carousel elements
    carouselTrack = document.getElementById('carouselTrack');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    carouselIndicators = document.getElementById('carouselIndicators');
    
    if (!carouselTrack) {
        console.log('Carousel track not found, retrying in 500ms...');
        setTimeout(initializeCarousel, 500);
        return;
    }
    
    // Get total slides count
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    totalSlides = slides.length;
    
    console.log(`Found ${totalSlides} slides`);
    
    if (totalSlides === 0) {
        console.log('No slides found');
        return;
    }
    
    // Clear existing indicators
    if (carouselIndicators) {
        carouselIndicators.innerHTML = '';
        
        // Create indicators
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(i));
            carouselIndicators.appendChild(indicator);
        }
    }
    
    // Add event listeners for carousel buttons
    if (nextBtn) {
        nextBtn.removeEventListener('click', nextSlide); // Remove existing listener
        nextBtn.addEventListener('click', nextSlide);
        console.log('Next button listener added');
    }
    
    if (prevBtn) {
        prevBtn.removeEventListener('click', prevSlide); // Remove existing listener
        prevBtn.addEventListener('click', prevSlide);
        console.log('Prev button listener added');
    }
    
    // Reset to first slide
    currentSlide = 0;
    updateCarousel();
    
    // Auto-play carousel
    setInterval(nextSlide, 5000);
    
    console.log('Carousel initialized successfully!');
}

function updateCarousel() {
    if (!carouselTrack) return;
    
    const translateX = -currentSlide * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
    
    console.log(`Moved to slide ${currentSlide}`);
}

function nextSlide() {
    if (totalSlides === 0) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    if (totalSlides === 0) return;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    if (totalSlides === 0) return;
    currentSlide = slideIndex;
    updateCarousel();
}

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
    // Create a new jsPDF instance
    // Since you want to avoid libraries, we'll use the browser's print-to-PDF functionality
    
    // Method 1: Create a formatted HTML content and use window.print()
    const cvContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Michael Maxwell Mwasame - CV</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    max-width: 8.5in;
                    margin: 0 auto;
                    padding: 0.75in;
                    line-height: 1.4;
                    color: #000;
                    font-size: 11pt;
                }
                .header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .name {
                    font-size: 18pt;
                    font-weight: bold;
                    color: #4472C4;
                    letter-spacing: 2px;
                    margin-bottom: 5px;
                }
                .contact-line {
                    font-size: 10pt;
                    margin-bottom: 3px;
                }
                .email-links {
                    font-size: 9pt;
                    color: #0066CC;
                    margin-bottom: 15px;
                }
                .section-title {
                    font-size: 12pt;
                    font-weight: bold;
                    color: #4472C4;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 20px 0 10px 0;
                    border-bottom: none;
                }
                .education-item, .project-item, .experience-item {
                    margin-bottom: 12px;
                }
                .project-title, .job-title {
                    font-weight: bold;
                    font-size: 11pt;
                }
                .project-subtitle {
                    font-style: italic;
                    color: #666;
                    margin-bottom: 3px;
                }
                .date {
                    float: right;
                    font-weight: normal;
                    font-size: 10pt;
                }
                .project-description, .job-description {
                    font-size: 10pt;
                    text-align: justify;
                    margin-top: 3px;
                    line-height: 1.3;
                }
                .github-link {
                    color: #0066CC;
                    font-size: 9pt;
                }
                ul {
                    margin: 8px 0;
                    padding-left: 20px;
                }
                li {
                    margin-bottom: 3px;
                    font-size: 10pt;
                }
                .skills-grid {
                    display: block;
                }
                .skill-item {
                    margin-bottom: 5px;
                    font-size: 10pt;
                }
                .skill-category {
                    font-weight: bold;
                    display: inline;
                }
                .community-item {
                    margin-bottom: 10px;
                }
                .community-title {
                    font-weight: bold;
                    font-size: 10pt;
                }
                .languages-section, .certifications-section {
                    display: flex;
                    justify-content: space-between;
                }
                .lang-left, .cert-left {
                    flex: 1;
                }
                .lang-right, .cert-right {
                    flex: 1;
                    text-align: right;
                }
                @media print {
                    body { 
                        margin: 0; 
                        padding: 0.5in; 
                        font-size: 10pt;
                    }
                    .name { font-size: 16pt; }
                    .section-title { font-size: 11pt; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="name">MICHAEL MAXWELL MWASAME</div>
                <div class="contact-line">Kutus, Kenya | +254743493619</div>
                <div class="email-links">
                    <a href="mailto:michaelmwasame6@gmail.com">michaelmwasame6@gmail.com</a> | 
                    <a href="https://linkedin.com/in/michaelmwasame">linkedin.com/in/michaelmwasame</a> | 
                    <a href="https://github.com/maximasprim">github.com/maximasprim</a>
                </div>
            </div>

            <div class="section">
                <div class="section-title">EDUCATION</div>
                <div class="education-item">
                    • BS Computer Science, Kirinyaga University (Sep 2021 – April 2025)
                </div>
                <div class="education-item">
                    • Teach2Give(The Jitu) (May 2024-August 2024)
                </div>
            </div>

            <div class="section">
                <div class="section-title">SKILLS</div>
                <div class="skills-grid">
                    <div class="skill-item">
                        <span class="skill-category">Database:</span> PostgreSQL, MySQL, Supabase, Firebase, pgAdmin, Neon
                    </div>
                    <div class="skill-item">
                        <span class="skill-category">Languages:</span> JavaScript, TypeScript, Python, Php, Scripting Languages (Html, Css, Scss, TailwindCss)
                    </div>
                    <div class="skill-item">
                        <span class="skill-category">Frameworks:</span> Node.js, React.js, Hono, Drizzle-ORM, Laravel
                    </div>
                    <div class="skill-item">
                        <span class="skill-category">Tooling:</span> Git/GitHub, Visual Studio, Vercel, Render, Azure, Figma, Docker (containerization)
                    </div>
                    <div class="skill-item">
                        <span class="skill-category">On-Going Advancements:</span> Golang, Rust, Docker, Flutter
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">PROJECTS</div>
                
                <div class="project-item">
                    <div class="project-title">
                        Unified Property Management System – Full-Stack Development
                        <span class="date">Jan 2025 – April 2025</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Developed a centralized platform for managing residential and commercial properties(Land, Vehicles, Houses) with comprehensive history information for each listed property. Implemented features like tenant management, fee tracking, secure authentication processing, and analytics dashboards for property managers. <a href="#" class="github-link">GitHub Link</a> | <a href="#" class="github-link">Deployed link</a>
                    </div>
                </div>

                <div class="project-item">
                    <div class="project-title">
                        AgroMart AI – Full-Stack On-demand AI Integration
                        <span class="date">June 2025</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Developed a smart agricultural digital marketplace connecting farmers, buyers, and agro-dealers. Integrated AI-powered product recommendations, dynamic pricing suggestions, secure user verification, and real-time messaging system. Engineered complete digital transformation for agro-products through a responsive web interface and mobile-first design. <a href="#" class="github-link">GitHub Link</a>
                    </div>
                </div>

                <div class="project-item">
                    <div class="project-title">
                        Smart AI Poultry System – IoT integrated with AI
                        <span class="date">July 2025</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Built an intelligent poultry management system to automate and optimize layer farming operations. Integrated advanced real-time monitoring, predictive analytics for production prediction, inventory tracking, and secured data storage. Delivered efficient layer management through a user-friendly web interface and mobile application. <a href="#" class="github-link">GitHub Link</a>
                    </div>
                </div>

                <div class="project-item">
                    <div class="project-title">
                        Vehicle Rental System – Full-Stack Development
                        <span class="date">May 2024-June 2024</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Developed a fully functional web application to manage vehicle rentals, enabling seamless booking and secure payment processing. Implemented features for user registration, vehicle browsing, real-time availability tracking, admin and customer dashboards, and Stripe-integrated transactions. <a href="#" class="github-link">GitHub Link</a> | <a href="#" class="github-link">Deployed link</a>
                    </div>
                </div>

                <div class="project-item">
                    <div class="project-title">
                        Maximas AI Chatbot – Full-Stack Development
                        <span class="date">June 2025</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Engineered a comprehensive AI chatbot application featuring robust user authentication, persistent conversation history (integrated from SQLite to PostgreSQL), and natural language processing. Implemented real-time conversational interface with user latency. <a href="#" class="github-link">GitHub Link</a> | <a href="#" class="github-link">Deployed link</a>
                    </div>
                </div>

                <div class="project-item">
                    <div class="project-title">
                        Chat App – Full-Stack Development
                        <span class="date">Nov 2024</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Built a real-time messaging application with user authentication, group chats, message history, and multimedia support using Web Socket for seamless communication. Built using WebSocket for seamless communication with low latency. <a href="#" class="github-link">GitHub Link</a>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">EXPERIENCE</div>
                
                <div class="experience-item">
                    <div class="project-title">
                        Software Developer Trainee – Teach2Give(The Jitu), Nyeri Kenya
                        <span class="date">April 2024 – June 2024</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        I am an experienced software developer with strong background in web development and cloud computing, specializing in React, Node.js, Hono, Django CRUD with PostgreSQL/MySQL. I have successfully built and deployed numerous full-stack applications, user analytics and manage servers. I actively engage in Agile methodologies, use Git for version control, and communicate effectively within teams to deliver quality software solutions. <a href="#" class="github-link">Link</a>
                    </div>
                </div>

                <div class="experience-item">
                    <div class="project-title">
                        Networking Engineer – Cyber Eyes Networks, Kirinyaga Kenya
                        <span class="date">Jan 2024 – Feb 2025</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Designed and maintained secure network infrastructure, configured routers/switches, and provided technical support for optimal performance. Implemented security patches and resolved network traffic.
                    </div>
                </div>

                <div class="experience-item">
                    <div class="project-title">
                        ICT Attaché – ICT Authority, Bungoma Kenya
                        <span class="date">May 2023 – August 2023</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Supported government IT projects, assisted in system audits, and trained staff on cybersecurity protocols and hardware/software troubleshooting.
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">LEADERSHIP AND COMMUNITY INVOLVEMENT</div>
                
                <div class="community-item">
                    <div class="community-title">
                        Web Development Lead – Computer Society of Kirinyaga
                        <span class="date">September 2022 – 2023</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Lead a team of students in developing and maintaining the club's web system. Provided technical direction and ensured project execution aligned with club goals.
                    </div>
                </div>

                <div class="community-item">
                    <div class="community-title">
                        Member – Nairobi DevOps Community
                        <span class="date">2023 – Present</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Engaged in knowledge-sharing on DevOps tools (Docker, CI/CD) and collaborated on automation projects to streamline deployment workflows.
                    </div>
                </div>

                <div class="community-item">
                    <div class="community-title">
                        ALX Kenya Program Participant
                        <span class="date">2022 – 2024</span>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="project-description">
                        Actively engaged in ALX's tech training programs, focusing on software development and leadership skills through peer learning and project-based challenges.
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">LANGUAGES</div>
                <div class="languages-section">
                    <div class="lang-left">English – Proficient</div>
                    <div class="lang-right">Swahili – Native</div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">CERTIFICATIONS</div>
                <div class="certifications-section">
                    <div class="cert-left">
                        Full Stack Software Development Certificate –<br>
                        Teach2Give | August 2024
                    </div>
                    <div class="cert-right">
                        English (C2 Proficiency) Certificate –<br>
                        EF SET | April 2024
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    // Open the CV content in a new window for printing/saving as PDF
    const printWindow = window.open('', '_blank');
    printWindow.document.write(cvContent);
    printWindow.document.close();
    
    // Wait for content to load, then trigger print dialog
    printWindow.onload = function() {
        printWindow.print();
        // Close the window after printing (optional)
        printWindow.onafterprint = function() {
            printWindow.close();
        };
    };
    
    showNotification('CV opened for download. Use "Save as PDF" in the print dialog.', 'success');
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