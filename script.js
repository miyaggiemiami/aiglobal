
let isActive = false;

    function handleToggle() {
        isActive = !isActive;
        const navList = document.querySelector('ul');
        const hamburger = document.querySelector('.hamburger');
        
        // Toggle the 'active' class for the hamburger and the ul
        if (isActive) {
            navList.classList.add('active');
            hamburger.classList.add('active');
        } else {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }


// Custom smooth scroll function
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get the target position
  const startPosition = window.scrollY; // Get the current scroll position
  const distance = targetPosition - startPosition; // Calculate the distance to scroll
  let startTime = null; // Initialize start time

  // Animation function
  function animation(currentTime) {
      if (startTime === null) startTime = currentTime; // Set the start time
      const timeElapsed = currentTime - startTime; // Calculate time elapsed
      const run = ease(timeElapsed, startPosition, distance, duration); // Calculate the current position
      window.scrollTo(0, run); // Scroll to the current position

      if (timeElapsed < duration) requestAnimationFrame(animation); // Continue the animation if duration is not reached
  }

  // Easing function for smooth scrolling
  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b; // Ease in
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b; // Ease out
  }

  requestAnimationFrame(animation); // Start the animation
}

// Attach smooth scroll to nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      smoothScroll(targetId, 1000); // Call the smooth scroll function with a duration of 1000ms
  });
});