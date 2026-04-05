// Text for the typing animation
const text = "Hey, thanks for visiting my portfolio";

// Delay between each letter (in milliseconds)
const delay = 60;

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

// Add event listener to  open the pop-up window
const projectButtons = document.querySelectorAll('.project-button'); 
const modalContainer = document.getElementById('modal-container');
const modalContent = modalContainer.querySelector('.modal-content'); 
const carouselInner = document.getElementById('carousel-images');
const carouselElement = document.getElementById('projectCarousel');
const modalTitle = modalContainer.querySelector('.modal-title');
const modalDescription = modalContainer.querySelector('.modal-section-content');
const modalRole = modalContainer.querySelector('.modal-role');
const modalResponsibilities = document.getElementById('modal-responsibilities');
const modalGithub = modalContainer.querySelector('.modal-github');
const modalClose = modalContainer.querySelector('.modal-close'); 

let githubLink;

// Function to open the modal container
function openModal() {
  modalContainer.style.display = 'flex';
  if (modalContent) modalContent.scrollTo(0, 0); // Verificación de seguridad
  document.body.style.overflow = 'hidden';
}

// Function to close the modal container
function closeModal() {
  modalContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
}

projectButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const project = event.target.closest('.project');
    
    // 1. Basic Texts
    modalTitle.textContent = project.dataset.title || project.querySelector('.project-title').textContent;
    modalDescription.innerHTML = project.getAttribute('data-description');
    modalRole.textContent = project.getAttribute('data-role');
    
    githubLink = project.getAttribute('data-github');
    if (githubLink) {
        modalGithub.style.display = 'inline-block';
    } else {
        modalGithub.style.display = 'none';
    }

    // 2. GIFs Carousel 
    const rawGifs = project.dataset.gif || "";
    const gifUrls = rawGifs.split(',').map(url => url.trim());
    
    carouselInner.innerHTML = ''; 
    gifUrls.forEach((url, index) => {
      const item = document.createElement('div');
      item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      item.innerHTML = `<img src="${url}" class="d-block w-100 modal-gif" style="object-fit: contain; max-height: 400px; background: #000;">`;
      carouselInner.appendChild(item);
    });

    const controls = carouselElement.querySelectorAll('.carousel-control-prev, .carousel-control-next');
    controls.forEach(c => c.style.display = gifUrls.length > 1 ? 'flex' : 'none');

    const respData = project.getAttribute('data-responsibilities');
    if (respData) {
        const respArray = respData.split(';');
        modalResponsibilities.innerHTML = '';
        respArray.forEach((resp) => {
            if (resp.trim()) {
                const li = document.createElement('li');
                li.innerHTML = highlightWords(resp);
                modalResponsibilities.appendChild(li);
            }
        });
    }

    openModal();
  });
});

// Add event listener to open GitHub link
modalGithub.addEventListener('click', () => {
  window.open(githubLink, '_blank');
});

// Add event listener to close the pop-up window
modalClose.addEventListener('click', closeModal);

// Add event listener to close the pop-up window with ESC
document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Event listener for the "More Info" button
projectButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

// Function to highlight specified words in a string
function highlightWords(text) {
  const keywords = ["INVENTORY", "SYSTEMS", "SYSTEM", "COLLECTIBLES", "FEEDBACK SYSTEM", "UI/UX", "MINI MAP", "BATTERY INDICATOR", "SFX",
    "INTERACTION", "NPCs", "animations", "ANIMATION", "game design document", "DEBUGGED", "GAMEPLAY", "HAZARDS", "INTERACTIVE ELEMENTS",
    "LEVEL DESIGN", "SETTING UP", "ENVIRONMENTAL DAMAGE", "MECHANICS", "PLAYTESTING", "menu", "behaviour", "codebases", "APIs", "XBOX",
    "STEAM", "ITERATION", "TESTING", "light baking", "post-processing", "VFX", "PERFORMANCE"
  ]; // List of words to highlight

  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, "gi");
    text = text.replace(regex, "<strong>$&</strong>");
  });

  return text;
}





