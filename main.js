// Initialize Lucide icons
lucide.createIcons();

// Simple smooth scroll and minimal interactions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 40,
                behavior: 'smooth'
            });
        }
    });
});
