document.addEventListener('DOMContentLoaded', () => {
// Cache DOM elements for reuse
const realNewsBtn = document.getElementById('realNewsBtn');
const updatesBtn = document.getElementById('updatesBtn');
const newsContainer = document.getElementById('newsContainer');
const slides = document.querySelectorAll('.carousel-item');
const statusCarousel = document.querySelector('.status-carousel');

// Variable to track the current active slide
let currentSlide = 0;

// Carousel navigation: Move to next or previous slide
function showSlide(index) {
  const reviews = document.querySelectorAll(".review");
  reviews.forEach((review, i) => {
    review.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSlide() {
  const reviews = document.querySelectorAll(".review");
  currentSlide = (currentSlide + 1) % reviews.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const reviews = document.querySelectorAll(".review");
  currentSlide = (currentSlide - 1 + reviews.length) % reviews.length;
  showSlide(currentSlide);
}

// Initialise carousel
showSlide(currentSlide);

// Auto-scroll setup for the status carousel
let autoScrollInterval;

// Function to start auto-scrolling the status carousel
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    statusCarousel.scrollBy({ left: 1, behavior: 'smooth' });
  }, 20);
}

// Stop auto-scrolling when the mouse enters the carousel
statusCarousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));

// Resume auto-scrolling when the mouse leaves the carousel
statusCarousel.addEventListener('mouseleave', startAutoScroll);

// Initialise auto-scrolling when the page loads
startAutoScroll();

// Set the initial active slide when the page loads
slides[currentSlide]?.classList.add('active');

// Ethnicity Filter

// Load real news when the "Real News" button is clicked
realNewsBtn?.addEventListener('click', () => {
  loadRealNews(); // Fetch and display real news
  toggleActive(realNewsBtn, updatesBtn); // Set the clicked button as active
});

// Load updates when the "Updates" button is clicked
updatesBtn?.addEventListener('click', () => {
  loadUpdates(); // Display updates
  toggleActive(updatesBtn, realNewsBtn); // Set the clicked button as active
});

// Function to load real news from the New York Times RSS feed
async function loadRealNews() {
  // Display loading message while fetching news
  newsContainer.innerHTML = '<p>Loading...</p>';
  
  try {
    // Fetch RSS feed from New York Times
    const response = await fetch('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
    const text = await response.text();

    // Parse the fetched RSS XML content
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    const items = xml.querySelectorAll('item'); // Extract all 'item' elements from the feed

    // Clear the loading message
    newsContainer.innerHTML = '';

    // Loop through each news item and display it
    items.forEach(item => {
      const title = item.querySelector('title')?.textContent || 'No title'; // Get the title of the news item
      const link = item.querySelector('link')?.textContent || '#'; // Get the link to the full article

      // Create a new news item element (without an image)
      const newsItem = document.createElement('div');
      newsItem.className = 'news-item';
      newsItem.innerHTML = `
        <a href="${link}" target="_blank">
          <h4>${title}</h4>
        </a>`;

      // Append the news item to the container
      newsContainer.appendChild(newsItem);
    });
  } catch (error) {
    // Handle any errors that occur while fetching the news
    console.error('Error fetching news:', error);
    newsContainer.innerHTML = '<p>Unable to load news. Please try again later.</p>';
  }
}

// Function to load static updates (for example, community events)
function loadUpdates() {
  newsContainer.innerHTML = `
    <div class="news-item">
      <h4>Community Gathering 💬</h4>
      <p>Join our monthly meet-up for fun activities!</p>
    </div>
    <div class="news-item">
      <h4>New Classes 📚</h4>
      <p>Sign up for exciting new workshops!</p>
    </div>
  `;
}

// Function to toggle the active class between the buttons
function toggleActive(activeBtn, inactiveBtn) {
  // Add 'active' class to the clicked button and remove it from the other
  activeBtn?.classList.add('active');
  inactiveBtn?.classList.remove('active');
}

// Load real news initially when the page loads
loadRealNews();
});
