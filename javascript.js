// Sidebar toggle
const sidebar = document.getElementById('sidebar');
document.getElementById('openSidebar').addEventListener('click', () => {
  sidebar.style.left = '0';
});
document.getElementById('closeSidebar').addEventListener('click', () => {
  sidebar.style.left = '-300px';
});

// Status Update
const statusInput = document.getElementById('statusInput');
const postStatus = document.getElementById('postStatus');
const statusList = document.getElementById('statusList');

postStatus.addEventListener('click', () => {
  const statusText = statusInput.value.trim();
  if (statusText) {
    const li = document.createElement('li');
    li.textContent = statusText;
    statusList.prepend(li);
    statusInput.value = '';
  }
});

// Generate Profiles
const profileList = document.querySelector('.profile-list');
const profiles = Array.from({ length: 12 }, (_, i) => ({
  name: `User ${i + 1}`,
  img: `https://via.placeholder.com/150?text=User+${i + 1}`,
}));

// Carousel Functionality
document.querySelectorAll('.status-carousel, .news-carousel').forEach(carousel => {
  carousel.addEventListener('wheel', (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  });
});

profiles.forEach(({ name, img }) => {
  const card = document.createElement('div');
  card.className = 'profile-card';
  card.innerHTML = `<img src="${img}" alt="${name}"><p>${name}</p>`;
  card.addEventListener('click', () => alert(`Viewing ${name}'s Profile`));
  profileList.appendChild(card);
});

const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatBody = document.getElementById('chatBody');

// Simulated bot responses
const botResponses = [
  "Hello! How can I help you today?",
  "That's interesting! Tell me more.",
  "I'm here to chat with you 😊.",
  "What's on your mind?",
  "Have a great day!"
];

// Add a message to the chat
function addMessage(text, sender = 'sent') {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = text;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
}

// Simulate bot response
function botReply() {
  const response = botResponses[Math.floor(Math.random() * botResponses.length)];
  setTimeout(() => addMessage(response, 'received'), 1000);
}

// Send button functionality
sendMessage.addEventListener('click', () => {
  const messageText = chatInput.value.trim();
  if (messageText) {
    addMessage(messageText, 'sent');
    chatInput.value = '';
    botReply();
  }
});

// Allow pressing "Enter" to send a message
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage.click();
  }
});