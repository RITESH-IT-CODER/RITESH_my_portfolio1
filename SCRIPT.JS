// Interactive Navigation & Smooth Interactions
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-btn');
    const contactForm = document.getElementById('contactForm');

    // Highlight active menu links based on scroll position
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 200;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Form submission feedback
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for reaching out, Ritesh will get back to you soon!');
            contactForm.reset();
        });
    }
});