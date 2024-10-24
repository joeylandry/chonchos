// Add event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('#home-section img'); // Main logo
    const headLogo = document.querySelector('.head-logo'); // Head logo
    const header = document.querySelector('header'); // Header element
    
    // Trigger fade-in animation on the main logo when the page loads
    if (logo) {
        logo.classList.add('logo-fade-in');

        // After the fade-in animation completes, restore scroll-based visibility control
        setTimeout(() => {
            logo.classList.remove('logo-fade-in'); // Remove the one-time animation class after it's done
            logo.classList.add('logo-visible');    // Add the visible class to control with scroll later
        }, 1000); // Match the duration of your animation (1s in this case)
    }

    // If headLogo exists, apply the scroll-based logic
    if (headLogo) {
        let headerVisible = false; // Track whether the header is currently visible

        // Scroll event to control the header visibility and head-logo animation
        window.addEventListener('scroll', function() {
            
            if (window.scrollY > 50 && !headerVisible) {
                // Show header (slide it down) and only trigger if it's currently not visible
                header.classList.add('visible');
                header.classList.remove('hidden');
                headerVisible = true; // Mark the header as visible

                // Make the head logo visible as part of the header drop-down
                headLogo.classList.add('logo-visible');  // Make head logo visible
                headLogo.classList.remove('logo-hidden'); // Remove any hidden state
                
                // Fade out the main logo when scrolling down
                logo.classList.add('logo-hidden');
                logo.classList.remove('logo-visible');

            } else if (window.scrollY <= 50 && headerVisible) {
                // Hide header (slide it up and fade out)
                header.classList.remove('visible');
                header.classList.add('hidden');
                headerVisible = false; // Mark the header as hidden

                // Fade the main logo back in when scrolling up
                logo.classList.remove('logo-hidden');
                logo.classList.add('logo-visible');

                // Hide the head logo when the header goes up
                headLogo.classList.remove('logo-visible'); // Hide head logo
                headLogo.classList.add('logo-hidden'); // Add hidden state
            }
        });
    }
});
