// Simple Intersection Observer for slide-up animation on scroll

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Observe section titles
    document.querySelectorAll('.section-title').forEach(el => observer.observe(el));
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
    
    // Observe about text container
    document.querySelectorAll('.about-text').forEach(el => observer.observe(el));
    
    // Observe contact info elements
    document.querySelectorAll('.contact-text, .cta-button, .contact-links').forEach(el => observer.observe(el));
    
    // Observe tech tags
    document.querySelectorAll('.tech-tag').forEach(el => observer.observe(el));

    // Observe experience items
    document.querySelectorAll('.experience-item').forEach(el => observer.observe(el));

    // Observe skill tags
    document.querySelectorAll('.skill-tag').forEach(el => observer.observe(el));
});
