let lastScrollY = 0;
const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // User is scrolling down, hide the top bar
    topBar.classList.add('hidden');
  } else {
    // User is scrolling up, show the top bar
    topBar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
