const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const imageContainer = document.getElementById('imageContainer');
const container = document.querySelector('.container');

let isFirstClick = true; // Flag to track the first click

yesButton.addEventListener('click', () => {
  // Clear everything in the container
  container.innerHTML = '';

  // Create a new div for the grid and message
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('image-grid');

  // Add images to the grid
  const images = [
    'https://images.fineartamerica.com/images/artworkimages/medium/3/1-snoopy-woodstock-love-darrell-c-rose-transparent.png',
    'https://dtfdallas.com/cdn/shop/files/a_5-602837.png?v=1720257035',
    'https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-love-wayne-k-roark-transparent.png',
    'https://i.pinimg.com/originals/36/b2/c3/36b2c356acab57ef56a08c5572361b2d.png',
    'https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-love-derek-b-mcdaniel-transparent.png',
    'https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-joe-cool-grace-a-waldo-transparent.png',
  ];

  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Cute Snoopy Image';
    gridContainer.appendChild(img);
  });

  // Add the grid to the container
  container.appendChild(gridContainer);

  // Add the response message
  const message = document.createElement('p');
  message.id = 'response';
  message.textContent = "Me haces la persona más feliz del mundo, TE AMO! 💖";
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
  if (isFirstClick) {
    // Apply a transition effect on the first click
    noButton.style.transition = 'transform 0.5s ease';
    noButton.style.transform = 'scale(1.2)'; // Example: Scale up the button
    setTimeout(() => {
      noButton.style.transform = 'scale(1)'; // Reset the scale
      isFirstClick = false; // Mark the first click as done
    }, 500); // Duration of the transition
  }
  mouseoverNoButton()
  moveNoButton();
  
});
function mouseoverNoButton() {
  noButton.addEventListener('mouseover', () => {
    imageContainer.innerHTML = '<img src="https://i.pinimg.com/564x/dd/7f/6c/dd7f6ca2bce302e27f51b579ef732aeb.jpg" alt="Laughing Snoopy">';
    response.textContent = "Jaja, no puedes tocar el botón 🤣🫢";
    moveNoButton();
  });
}
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text based on the current mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Modo Claro ☀️';
  } else {
    darkModeToggle.textContent = 'Modo Oscuro 🌙';
  }
});