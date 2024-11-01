document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('#home-section img'); // Main logo
    const headLogo = document.querySelector('.head-logo'); // Head logo
    const headerContainer = document.querySelector('.header-container'); // Header container element
    const logoLink = document.querySelector('header a'); // Select anchor without needing a class
    const menuIcon = document.querySelector('.mobile-menu-button'); // Mobile menu icon
    const mobileMenu = document.querySelector('.mobile-menu'); // Mobile menu container

    // Function to toggle mobile menu visibility
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('open'); 
    }

    // Trigger fade-in animation on the main logo when the page loads
    if (logo) {
        logo.classList.add('logo-fade-in');

        setTimeout(() => {
            logo.classList.remove('logo-fade-in');
            logo.classList.add('logo-visible');
        }, 1000); 
    }

    // Apply scroll-based logic to header-container
    if (headerContainer && headLogo) {
        let headerVisible = false;

        // Scroll event to control header-container, head-logo visibility, and main logo fade-out
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50 && !headerVisible) {
                headerContainer.classList.add('scrolled'); 
                headLogo.classList.add('logo-visible');
                logo.classList.add('logo-hidden'); // Fade out main logo
                headerVisible = true;
            } else if (window.scrollY <= 50 && headerVisible) {
                headerContainer.classList.remove('scrolled');
                headLogo.classList.remove('logo-visible');
                logo.classList.remove('logo-hidden'); // Fade in main logo
                headerVisible = false;
            }
        });

        // Ensure head logo link remains clickable
        if (logoLink) {
            logoLink.addEventListener('click', function(e) {
                console.log('Header logo clicked!');
                window.location.href = 'index.html';
            });
        }
    }

    // Toggle mobile menu visibility on icon click
    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', toggleMobileMenu);
    }

    // Close the mobile menu when a menu item is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open'); // Hide the menu
        });
    });
});
