// Keep track of the previous scroll position to determine scroll direction
let lastScrollY = 0;

// Select the top bar element that will be hidden or shown based on scroll direction
const topBar = document.querySelector('.top-bar');

// Event listener for scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position (how far the page has scrolled)
  const currentScrollY = window.scrollY;

  // If the user scrolls down (current scroll position is greater than previous scroll position)
  if (currentScrollY > lastScrollY) {
    // Hide the top bar by adding the 'hidden' class
    topBar.classList.add('hidden');
  } else {
    // If the user scrolls up, show the top bar by removing the 'hidden' class
    topBar.classList.remove('hidden');
  }

  // Update the last scroll position for the next scroll event
  lastScrollY = currentScrollY;
});

// Variables for handling touch scroll behavior on mobile
let touchStartY = 0;

// Event listener for the start of a touch event (when the user touches the screen)
window.addEventListener('touchstart', (event) => {
  // Save the initial touch position (Y-coordinate) when the touch starts
  touchStartY = event.touches[0].clientY;
});

// Event listener for the movement of touch (user dragging finger on screen)
window.addEventListener('touchmove', (event) => {
  // Get the current touch position (Y-coordinate)
  const touchCurrentY = event.touches[0].clientY;
  
  // If the user moves their finger upwards (scroll up)
  if (touchCurrentY < touchStartY) {
    // Show the top bar by removing the 'hidden' class
    topBar.classList.remove('hidden');
  } else {
    // If the user moves their finger downwards (scroll down), hide the top bar
    topBar.classList.add('hidden');
  }

  // Update the touch position for the next movement
  touchStartY = touchCurrentY;
});

// Sidebar toggle functionality
const sidebar = document.querySelector('.sidebar');
const mainContainer = document.querySelector('.main-container');

// Helper function to adjust margin based on sidebar state
function adjustMainContainerMargin() {
  // If the sidebar is open, set margin to the width of the sidebar (24rem), else set to 0
  mainContainer.style.marginLeft = sidebar.classList.contains('open') ? '24rem' : '0';
}

// Toggle the sidebar when the menu icon is clicked
document.querySelector('.menu-icon')?.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  adjustMainContainerMargin(); // Adjust margin immediately after toggling the sidebar
});

// Close the sidebar when the close button is clicked
document.getElementById('closeSidebar')?.addEventListener('click', () => {
  sidebar.classList.remove('open');  // Remove the 'open' class to close the sidebar
  adjustMainContainerMargin(); // Adjust margin after closing the sidebar
});

// Adjust main container's left margin dynamically when the window is resized
window.addEventListener('resize', adjustMainContainerMargin);

// Ensure the margin is correct on initial load
adjustMainContainerMargin();

document.addEventListener('DOMContentLoaded', () => {
  // Get references to the filter dropdown, user cards container, and search bar
  const filterDropdown = document.getElementById('Filter');
  const userCardsContainer = document.getElementById('userCards');
  const searchBar = document.querySelector('.search-bar');

  // lol duMMy user data go brrr
  const users = [
    { name: 'Lee Sung', age: 75, location: 'Seoul', ethnicity: 'Asian', personality: 'Humble', gender: 'Male', image: 'Senior Images/Lee Sung.png' },
    { name: 'Jared Tote', age: 65, location: 'Chicago', ethnicity: 'African', personality: 'Friendly', gender: 'Male', image: 'Senior Images/Jared Tote.png' },
    { name: 'Esther Jones', age: 72, location: 'London', ethnicity: 'Caucasian', personality: 'Enthusiastic', gender: 'Female', image: 'Senior Images/Esther Jones.png' },
    { name: 'Forwea Lone', age: 68, location: 'Sydney', ethnicity: 'Caucasian', personality: 'Reserved', gender: 'Non-Binary', image: 'Senior Images/Forwea Lone.png' },
    { name: 'Chad Jr.', age: 70, location: 'New York', ethnicity: 'Caucasian', personality: 'Outgoing', gender: 'Male', image: 'Senior Images/Chad Jr..png' },
    { name: 'Forne Taine', age: 74, location: 'Paris', ethnicity: 'Caucasian', personality: 'Creative', gender: 'Male', image: 'Senior Images/Forne Taine.png' },
    { name: 'Harold Ralph', age: 78, location: 'Florida', ethnicity: 'Caucasian', personality: 'Calm', gender: 'Male', image: 'Senior Images/Harold Ralph.png' },
    { name: 'Jennifer Lopez', age: 66, location: 'Miami', ethnicity: 'Caucasian', personality: 'Charismatic', gender: 'Female', image: 'Senior Images/Jennifer Lopez.png' },
    { name: 'Jones To', age: 69, location: 'California', ethnicity: 'Caucasian', personality: 'Adventurous', gender: 'Male', image: 'Senior Images/Jones To.png' },
    { name: 'Drake Ke', age: 68, location: 'London', ethnicity: 'African American', personality: 'Thoughtful', gender: 'Male', image: 'Senior Images/Drake Ke.png' },
    { name: 'Alice Wonders', age: 72, location: 'New York', ethnicity: 'Caucasian', personality: 'Sociable', gender: 'Female', image: 'Senior Images/Alice Wonders.png' },
    { name: 'Mora X', age: 70, location: 'Miami', ethnicity: 'Caucasian', personality: 'Energetic', gender: 'Male', image: 'Senior Images/Mora X.png' },
    { name: 'Nevah Lone', age: 74, location: 'Sydney', ethnicity: 'Caucasion', personality: 'Reflective', gender: 'Male', image: 'Senior Images/Nevah Lone.png' },
    { name: 'Rea Ter Agen', age: 78, location: 'California', ethnicity: 'Caucasian', personality: 'Optimistic', gender: 'Male', image: 'Senior Images/Rea Ter Agen.png' },
    { name: 'Theo Jorn', age: 69, location: 'Paris', ethnicity: 'Asian', personality: 'Serious', gender: 'Male', image: 'Senior Images/Theo Jorn.png' },
    { name: 'Beatrice Tea', age: 67, location: 'Texas', ethnicity: 'Caucasian', personality: 'Humorous', gender: 'Female', image: 'Senior Images/Beatrice Tea.png' },
  ];
  
  // Function to render user cards based on filter and search query
  function renderUserCards(filter = 'All', query = '') {
    userCardsContainer.innerHTML = ''; // Clear current content

  // Filter users based on ethnicity (filter) and search query (query)
  const filteredUsers = users.filter(user => {
    // Match based on filter (ethnicity)
    const matchEthnicity = filter === 'All' || user.ethnicity === filter;
    // Match based on search query (name, age, personality, gender)
    const matchSearch = query === '' || user.name.toLowerCase().includes(query.toLowerCase()) ||
                        user.age.toString().includes(query) ||
                        user.personality.toLowerCase().includes(query.toLowerCase()) ||
                        //Too diffiult to search since there's male in female so case-sensitivee
                        user.gender.toString().includes(query);
    return matchEthnicity && matchSearch;
  });


    // Render user cards for each filtered user
    filteredUsers.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';
      userCard.innerHTML = `
        <img src="${user.image}" alt="${user.name}">
        <h4>${user.name}</h4>
        <p>Age: ${user.age} | Location: ${user.location}</p>
        <p>Gender: ${user.gender}</p>
        <p>Ethnicity: ${user.ethnicity}</p>
        <p>Personality: ${user.personality}</p>
        <button onclick="viewProfile('${user.name}')">View Profile</button>
      `;
      userCardsContainer.appendChild(userCard);
    });
  }

  // Event listener for filter dropdown change
  filterDropdown.addEventListener('change', () => {
    renderUserCards(filterDropdown.value, searchBar.value);
  });

  // Event listener for search bar input
  searchBar.addEventListener('input', () => {
    renderUserCards(filterDropdown.value, searchBar.value);
  });

  // Initial render to show all users
  renderUserCards();

  // View profile function (simulated with an alert)
  window.viewProfile = (userName) => {
    alert(`Redirecting to ${userName}'s profile...`);
    window.location.href = `HTML/profile.html?user=${encodeURIComponent(userName)}`;
  };
});
