const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        overlay.classList.add('show');
        letter.classList.add('show');
    }, 600);
});

closeBtn.addEventListener('click', () => {
    letter.classList.remove('show');
    overlay.classList.remove('show');
    setTimeout(() => {
        envelope.classList.remove('open');
    }, 300);
});

overlay.addEventListener('click', () => {
    letter.classList.remove('show');
    overlay.classList.remove('show');
    setTimeout(() => {
        envelope.classList.remove('open');
    }, 300);
});
