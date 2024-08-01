document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinksChildren = navLinks.querySelectorAll('a');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);

    navLinksChildren.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});