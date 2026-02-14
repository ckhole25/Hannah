const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const buttonContainer = document.querySelector('.button-container');

function moveButton() {
    const containerRect = buttonContainer.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Get random position within the container
    const maxX = window.innerWidth - btnRect.width - 100;
    const maxY = window.innerHeight - btnRect.height - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('click', moveButton);

// Prevent touch on mobile
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'valentine.html';
});