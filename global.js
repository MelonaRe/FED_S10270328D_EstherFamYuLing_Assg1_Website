// Keep track of the previous scroll position
let lastScrollY = 0;

// Select the top bar element to hide or show it
const topBar = document.querySelector('.top-bar');

// When the User scrolls
window.addEventListener('scroll', () => {
  // Get the current scroll position (how far the page is scrolled)
  const currentScrollY = window.scrollY;

  // If the User scrolls down (current scroll is greater than the last scroll)
  if (currentScrollY > lastScrollY) {
    // Hide the top bar (add the 'hidden' class)
    topBar.classList.add('hidden');
  } else {
    // If the User scrolls up, show the top bar (remove the 'hidden' class)
    topBar.classList.remove('hidden');
  }

  // Update the last scroll position for the next scroll event
  lastScrollY = currentScrollY;
});

// Variables for mobile touch scrolling
let touchStartY = 0;

// When the User starts touching the screen
window.addEventListener('touchstart', (event) => {
  // Save the starting touch position
  touchStartY = event.touches[0].clientY;
});

// When the User moves their finger on the screen
window.addEventListener('touchmove', (event) => {
  // Get the current touch position
  const touchCurrentY = event.touches[0].clientY;
  
  // If the User moves their finger upwards (scroll up)
  if (touchCurrentY < touchStartY) {
    // Show the top bar
    topBar.classList.remove('hidden');
  } else {
    // If the User moves their finger downwards (scroll down)
    // Hide the top bar
    topBar.classList.add('hidden');
  }

  // Update the touch position for the next move
  touchStartY = touchCurrentY;
});

// Function to save data to the browser's local storage
function saveToLocalStorage(key, value) {
  // Convert the value to a string and store it with a specific key
  localStorage.setItem(key, JSON.stringify(value));
}

// Function to get data from the local storage
function getFromLocalStorage(key) {
  // Retrieve and convert the data back to its original format
  return JSON.parse(localStorage.getItem(key));
}
