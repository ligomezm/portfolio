// Text for the typing animation
const text = "Hey! Thanks for visiting my portfolio";

// Delay between each letter (in milliseconds)
const delay = 100;

// Function to perform the typing animation
function typeEffect() {
  const header = document.getElementById("typing-header");
  let index = 0;

  function type() {
    if (index < text.length) {
      header.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }

  type();
}

// Call the typeEffect function when the page is loaded
window.addEventListener("load", typeEffect);

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Agrega un controlador de eventos para abrir la ventana emergente
const projectButtons = document.querySelectorAll('.project-button');
const modalContainer = document.getElementById('modal-container');
const modalTitle = modalContainer.querySelector('.modal-title');
const modalGif = modalContainer.querySelector('.modal-gif');
const modalDescription = modalContainer.querySelector('.modal-section-content');
const modalRole = modalContainer.querySelector('.modal-role');
const modalResponsibilities = modalContainer.querySelector('.modal-section-list');
const modalGithub = modalContainer.querySelector('.modal-github');
const modalClose = modalContainer.querySelector('.modal-close');

let githubLink;

projectButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const project = event.target.closest('.project');
    const title = project.querySelector('.project-title').textContent;
    const gifUrl = project.dataset.gif;
    const description = project.getAttribute('data-description');
    const role = project.getAttribute('data-role');
    const responsibilities = project.getAttribute('data-responsibilities').split(';');
   
    githubLink = project.getAttribute('data-github');

    modalTitle.textContent = title;
    modalGif.src = gifUrl;
    modalDescription.innerHTML = description;
    modalRole.textContent = role;

    // Clear existing responsibilities list
    while (modalResponsibilities.firstChild) {
      modalResponsibilities.firstChild.remove();
    }

    // Create list items for responsibilities
    responsibilities.forEach((responsibility) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = highlightWords(responsibility);
      modalResponsibilities.appendChild(listItem);
    });

    modalContainer.style.display = 'flex';
  });
});

// Agrega un controlador de eventos para abrir el enlace de GitHub
modalGithub.addEventListener('click', () => {
  window.open(githubLink, '_blank');
});

// Agrega un controlador de eventos para cerrar la ventana emergente
modalClose.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

// Function to open the modal container
function openModal() {
  modalContainer.style.display = 'flex';
}

// Event listener for the "More Info" button
projectButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

// Function to highlight specified words in a string
function highlightWords(text) { 
  const keywords = ["INVENTORY", "SYSTEM", "COLLECTIBLES", "FEEDBACK SYSTEM", "UI/UX", "MINI MAP", "BATTERY INDICATOR", "SFX", 
                   "INTERACTION", "NPCs", "ANIMATION", "game design document", "DEBUGGED", "GAMEPLAY", "HAZARDS", "INTERACTIVE ELEMENTS",
                   "LEVEL DESIGN", "SETTING UP", "ENVIRONMENTAL DAMAGE", "MECHANICS", "PLAYTESTING"
                   ]; // List of words to highlight

  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, "gi");
    text = text.replace(regex, "<strong>$&</strong>");
  });

  return text;
}

