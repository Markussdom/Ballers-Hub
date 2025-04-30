// DOM elements
const box = document.getElementById('assistant-box');
const message = document.getElementById('assistant-message');

const messages = [
  "Zini, šī lapa izskatās ļoti stilīga.",
  "Mēģini uzklikšķināt uz bildes – varbūt notiks kas īpašs!",
  "Vai tu jau iemēģināji visus bultu taustiņus?",
  "Man liekas, ka šodien ir perfekta diena kaut ko radīt.",
  "Padoms: Vienkāršība dažreiz ir visspēcīgākais dizains.",
  "Hei, ja vajag iedvesmu – paskaties ārā pa logu!",
  "Gribi, lai es parādu slepenu ziņu? 👀",
  "Atceries – katrs klikšķis ir stāsta sākums.",
  "Man patīk tava radošā gaume! 👍"
];

function updateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.textContent = messages[randomIndex];
}

setInterval(updateMessage, 5000);

// === Drag and drop functionality ===
let isDragging = false;
let offsetX, offsetY;

box.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - box.getBoundingClientRect().left;
  offsetY = e.clientY - box.getBoundingClientRect().top;
  box.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    box.style.left = `${e.clientX - offsetX}px`;
    box.style.top = `${e.clientY - offsetY}px`;
    box.style.right = 'auto'; // prevent snapping back
    box.style.bottom = 'auto';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  box.style.cursor = 'grab';
});