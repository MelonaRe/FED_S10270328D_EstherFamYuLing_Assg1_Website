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

// Function to save data to the browser's local storage
function saveToLocalStorage(key, value) {
  // Convert value to a string and store it in local storage under the given key
  localStorage.setItem(key, JSON.stringify(value));
}

// Function to get data from the browser's local storage
function getFromLocalStorage(key) {
  // Retrieve and parse the data from local storage
  return JSON.parse(localStorage.getItem(key));
}

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
    { name: 'Forwea Lone', age: 68, location: 'Sydney', ethnicity: 'Caucasian', personality: 'Reserved', gender: 'Male', image: 'Senior Images/Forwea Lone.png' },
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
      // Match based on search query (name, age, personality)
      const matchSearch = query === '' || user.name.toLowerCase().includes(query.toLowerCase()) ||
                          user.age.toString().includes(query) ||
                          user.personality.toLowerCase().includes(query.toLowerCase());
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
        <p>Ethnicity: ${user.ethnicity}</p>
        <p>Personality: ${user.personality}</p>
        <p>Gender: ${user.gender}</p>
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
    window.location.href = `profile.html?user=${encodeURIComponent(userName)}`;
  };
});

// Language translations object, containing content for different languages
const translations = {
  en: {
    welcomeText: '🤍 Welcome to Senior Next 🤍',
    description: 'Your journey to meaningful connections begins here. Love, Friendship, or Both.',
    featuresTitle: 'Why Senior Next?',
    matchTitle: 'Find Your Match 💞',
    matchDesc: 'Discover meaningful connections tailored to you.',
    friendshipTitle: 'Build Friendships 🤝',
    friendshipDesc: 'Engage with like-minded individuals and grow your social circle.',
    secureTitle: 'Stay Secure 🔐',
    secureDesc: 'We prioritise your privacy with robust ID verification.',
    ctaTitle: 'Get Started Today',
    signupBtn: 'Join the Fun! 🎉',
    loginBtn: 'Already have an account?',
    footerText: '© 2024 Senior Next. All Rights Reserved.',
    reviews: [
      { text: '"Senior Next changed my life! I found love again at 65."', name: 'Margaret T.' },
      { text: '"A safe and friendly platform for meeting new people."', name: 'Robert G.' },
      { text: '"I made lifelong friends and even found a companion for my travels."', name: 'Linda P.' },
      { text: '"It feels wonderful to connect with others who understand me. Highly recommended!"', name: 'Helen K.' },
      { text: '"I’ve met some amazing people here. Senior Next made it easy to feel comfortable."', name: 'James M.' }
    ]
  },
  es: {
    welcomeText: '🤍 Bienvenido a Senior Next 🤍',
    description: 'Tu viaje hacia conexiones significativas comienza aquí. Amor, amistad o ambos.',
    featuresTitle: '¿Por qué Senior Next?',
    matchTitle: 'Encuentra tu Pareja 💞',
    matchDesc: 'Descubre conexiones significativas hechas para ti.',
    friendshipTitle: 'Haz Amistades 🤝',
    friendshipDesc: 'Interactúa con personas afines y expande tu círculo social.',
    secureTitle: 'Mantente Seguro 🔐',
    secureDesc: 'Priorizamos tu privacidad con verificación robusta de identidad.',
    ctaTitle: 'Comienza Hoy',
    signupBtn: '¡Únete a la diversión! 🎉',
    loginBtn: '¿Ya tienes una cuenta?',
    footerText: '© 2024 Senior Next. Todos los derechos reservados.',
    reviews: [
      { text: '"¡Senior Next cambió mi vida! Encontré el amor de nuevo a los 65."', name: 'Margaret T.' },
      { text: '"Una plataforma segura y amigable para conocer gente nueva."', name: 'Robert G.' },
      { text: '"Hice amigos para toda la vida e incluso encontré un compañero para mis viajes."', name: 'Linda P.' },
      { text: '"Es maravilloso conectar con personas que me entienden. ¡Muy recomendado!"', name: 'Helen K.' },
      { text: '"He conocido a personas increíbles aquí. Senior Next facilitó sentirme cómodo."', name: 'James M.' }
    ]
  },
  fr: {
    welcomeText: '🤍 Bienvenue sur Senior Next 🤍',
    description: 'Votre voyage vers des connexions significatives commence ici. Amour, Amitié, ou les deux.',
    featuresTitle: 'Pourquoi Senior Next?',
    matchTitle: 'Trouvez votre partenaire 💞',
    matchDesc: 'Découvrez des connexions significatives adaptées à vous.',
    friendshipTitle: 'Faites des Amis 🤝',
    friendshipDesc: 'Interagissez avec des personnes partageant les mêmes idées et élargissez votre cercle social.',
    secureTitle: 'Restez Sécurisé 🔐',
    secureDesc: 'Nous priorisons votre confidentialité avec une vérification d\'identité robuste.',
    ctaTitle: 'Commencez Aujourd\'hui',
    signupBtn: 'Rejoignez-nous ! 🎉',
    loginBtn: 'Vous avez déjà un compte?',
    footerText: '© 2024 Senior Next. Tous droits réservés.',
    reviews: [
      { text: '"Senior Next a changé ma vie ! J\'ai retrouvé l\'amour à 65 ans."', name: 'Margaret T.' },
      { text: '"Une plateforme sûre et conviviale pour rencontrer de nouvelles personnes."', name: 'Robert G.' },
      { text: '"J\'ai fait des amis pour la vie et même trouvé un compagnon pour mes voyages."', name: 'Linda P.' },
      { text: '"C\'est merveilleux de se connecter avec des gens qui me comprennent. Fortement recommandé!"', name: 'Helen K.' },
      { text: '"J\'ai rencontré des personnes incroyables ici. Senior Next a facilité ma rencontre avec d\'autres."', name: 'James M.' }
    ]
  }
};

// Function to translate the page content based on selected language
function translatePage() {
  const language = document.getElementById('languages').value; // Get selected language
  const t = translations[language]; // Get translation object for the selected language

  // Update various page elements with the corresponding translated text
  document.getElementById('welcome-text').innerText = t.welcomeText;
  document.getElementById('description').innerText = t.description;
  document.getElementById('features-title').innerText = t.featuresTitle;
  document.getElementById('find-your-match').innerText = t.matchTitle;
  document.getElementById('match-desc').innerText = t.matchDesc;
  document.getElementById('build-friendships').innerText = t.friendshipTitle;
  document.getElementById('friendship-desc').innerText = t.friendshipDesc;
  document.getElementById('stay-secure').innerText = t.secureTitle;
  document.getElementById('secure-desc').innerText = t.secureDesc;
  document.getElementById('cta-text').innerText = t.ctaTitle;
  document.getElementById('signup-btn').innerText = t.signupBtn;
  document.getElementById('login-btn').innerText = t.loginBtn;
  document.getElementById('footer-text').innerText = t.footerText;

  // Update the reviews dynamically based on the selected language
  const reviews = t.reviews;
  document.getElementById('review-1-text').innerText = reviews[0].text;
  document.getElementById('review-1-name').innerText = reviews[0].name;
  document.getElementById('review-2-text').innerText = reviews[1].text;
  document.getElementById('review-2-name').innerText = reviews[1].name;
  document.getElementById('review-3-text').innerText = reviews[2].text;
  document.getElementById('review-3-name').innerText = reviews[2].name;
  document.getElementById('review-4-text').innerText = reviews[3].text;
  document.getElementById('review-4-name').innerText = reviews[3].name;
  document.getElementById('review-5-text').innerText = reviews[4].text;
  document.getElementById('review-5-name').innerText = reviews[4].name;
}

// Initialise translation with the default language (English) when the page loads
translatePage();
