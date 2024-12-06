document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission handler
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill out all fields');
            return;
        }

        // In a real-world scenario, you would send this data to a backend service
        console.log('Form submitted:', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        });

        // Optional: Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });

    // Simple typing effect for subtitle
    const subtitleElement = document.querySelector('.subtitle');
    const roles = ['Software Engineer', 'Creative Technologist', 'Problem Solver'];
    let currentRoleIndex = 0;

    function typeSubtitle() {
        const currentRole = roles[currentRoleIndex];
        subtitleElement.textContent = currentRole;
        
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }

    // Change role every 3 seconds
    setInterval(typeSubtitle, 3000);
});
