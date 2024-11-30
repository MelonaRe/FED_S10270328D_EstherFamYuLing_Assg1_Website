document.addEventListener('DOMContentLoaded', () => {
// Cache DOM elements for reuse
const realNewsBtn = document.getElementById('realNewsBtn');
const updatesBtn = document.getElementById('updatesBtn');
const newsContainer = document.getElementById('newsContainer');
const slides = document.querySelectorAll('.carousel-item');
const statusCarousel = document.querySelector('.status-carousel');
const statuses = document.querySelectorAll('.status');

// Auto-scroll setup for the status carousel
let autoScrollInterval;

// Function to start auto-scrolling the status carousel
function startAutoScroll() {
  // Scroll the carousel 1 pixel to the left, with a smooth scrolling effect
  autoScrollInterval = setInterval(() => {
    // Scroll the carousel 3 pixels! to the left, with a smooth scrolling effect
    statusCarousel.scrollBy({ left: 3, behavior: 'smooth' });
  }, 20); // 20 milliseconds interval
}

// Stop auto-scrolling when the mouse enters the carousel
statusCarousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));

// Resume auto-scrolling when the mouse leaves the carousel
statusCarousel.addEventListener('mouseleave', startAutoScroll);

// Initialise auto-scrolling when the page loads
startAutoScroll();

// Pop-up functionality, fast pop-up
document.querySelectorAll('.status').forEach((statusElement) => {
  statusElement.addEventListener('click', () => {
    const statusName = statusElement.getAttribute('data-name');  // Get the name from the data-name attribute

    // Display the pop-up with the status name
    alert(`This is ${statusName}'s status! Say hi!`);
  });
});

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
