
let isActive = false;
function toggleActive() {
  const hamburger = document.querySelector('.hamburger');
  isActive = !isActive;
  if (isActive) {
    hamburger.classList.add('active');
  } else {
    hamburger.classList.remove('active');
  }
}