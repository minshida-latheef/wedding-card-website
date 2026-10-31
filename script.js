// Get DOM elements
const rsvpBtn = document.getElementById('rsvpBtn');
const rsvpModal = document.getElementById('rsvpModal');
const closeBtn = document.querySelector('.close-btn');

// Open modal when button is clicked
rsvpBtn.addEventListener('click', () => {
    rsvpModal.style.display = 'flex';
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
    rsvpModal.style.display = 'none';
});

// Close modal when clicking anywhere outside of the box
window.addEventListener('click', (event) => {
    if (event.target === rsvpModal) {
        rsvpModal.style.display = 'none';
    }
});
