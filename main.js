// Text for the typing animation
const text = "Welcome to My Game Developer Portfolio";

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
