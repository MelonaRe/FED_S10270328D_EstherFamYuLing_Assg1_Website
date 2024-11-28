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
