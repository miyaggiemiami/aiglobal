
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