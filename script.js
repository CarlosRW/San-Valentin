const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const imageContainer = document.getElementById('imageContainer');
const container = document.querySelector('.container');

yesButton.addEventListener('click', () => {
  // Clear everything in the container
  container.innerHTML = '';

  // Create a new div for the grid and message
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('image-grid');

  // Add images to the grid
  const images = [
    'https://images.fineartamerica.com/images/artworkimages/medium/3/1-snoopy-woodstock-love-darrell-c-rose-transparent.png',
    'https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-flower-jennifer-s-payne-transparent.png',
    'https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-love-wayne-k-roark-transparent.png',
    'https://i.pinimg.com/originals/36/b2/c3/36b2c356acab57ef56a08c5572361b2d.png',
    'https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-love-derek-b-mcdaniel-transparent.png',
    'https://i.pinimg.com/736x/ab/74/6f/ab746fc1c2843d483fe55c5511586532.jpg',
  ];

  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Romantic Image';
    gridContainer.appendChild(img);
  });

  // Add the grid to the container
  container.appendChild(gridContainer);

  // Add the response message
  const message = document.createElement('p');
  message.id = 'response';
  message.textContent = "Yay! You've made me the happiest person! 💖";
  container.appendChild(message);
});

function moveNoButton() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Calculate random positions within the visible screen area
  const maxX = screenWidth - buttonWidth;
  const maxY = screenHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Set the new position
  noButton.style.position = 'fixed'; // Use fixed positioning to stay within the viewport
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Show image and move button when "No" is clicked or hovered
noButton.addEventListener('click', () => {
  moveNoButton();
});

noButton.addEventListener('mouseover', () => {
  imageContainer.innerHTML = '<img src="https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-laugh-kelli-p-holt-transparent.png" alt="Laughing Snoopy">';
  response.textContent = "Jaja, no puedes tocar el botón 🤣🫢";
  moveNoButton();
});