window.addEventListener('DOMContentLoaded', () => {
  const media = [
    { type: 'image', src: 'hoop.png' },
    { type: 'image', src: 'ball.png' },
    { type: 'image', src: 'shoes.png' },
    { type: 'image', src: 'ball1.jpg' },
    { type: 'image', src: 'shoes1.jpg' },
    { type: 'image', src: 'hoop1.jpg' },
    { type: 'image', src: 'dunk.png' },
    { type: 'image', src: 'ball2.png' },
    { type: 'image', src: 'guy.png' },
    { type: 'image', src: 'guy2.png' },
    { type: 'video', src: 'https://www.youtube.com/embed/JYdmJDQKYcw' } // Example video
  ];

  let currentIndex = 0;

  const container = document.querySelector('.image-container');
  const leftArrow = document.getElementById('left');
  const rightArrow = document.getElementById('right');

  function changeMedia(index) {
    // Fade out
    container.style.opacity = 0;

    setTimeout(() => {
      container.innerHTML = ''; // Clear current media

      const item = media[index];

      if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.id = 'current-image';
        img.alt = '';
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        container.appendChild(img);
      } else if (item.type === 'video') {
        const iframe = document.createElement('iframe');
        iframe.src = item.src;
        iframe.width = '300';
        iframe.height = '400';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
      }

      // Fade back in
      container.style.opacity = 1;
    }, 300);
  }

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + media.length) % media.length;
    changeMedia(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % media.length;
    changeMedia(currentIndex);
  });

  // Initial load
  changeMedia(currentIndex);
});