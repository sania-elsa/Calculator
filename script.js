// Function to add a number or operator to the display
function addToDisplay(value) {
  const display = document.querySelector('.display');
  // If the display shows "Error", clear it before adding new values
  if (display.innerText === 'Error') {
    display.innerText = '';
  }
  display.innerText += value;
}

// Function to clear everything on the display (AC button)
function clearDisplay() {
  const display = document.querySelector('.display');
  display.innerText = '';
}

// Function to calculate the math expression (= button)
function calculate() {
  const display = document.querySelector('.display');
  try {
    // Only calculate if the display is not empty
    if (display.innerText !== '') {

      let expression = display.innerText
        .replace(/÷/g, "/")
        .replace(/×/g, "*")

      // eval() executes the text as a mathematical formula
      display.innerText = eval(expression);
    }
  } catch (error) {
    // Show 'Error' if the math is invalid (e.g., 5++5)
    display.innerText = 'Error';
  }
}

// Function to switch between dark and light mode
const themeButton = document.querySelector(".theme-toggle");

// Default icon
themeButton.innerHTML =
  '<i class="fa-solid fa-moon"></i>';

function toggleTheme() {

  // Toggle theme
  document.body.classList.toggle("light-mode");

  // Change icon
  if (document.body.classList.contains("light-mode")) {

    themeButton.innerHTML =
      '<i class="fa-solid fa-moon"></i>';

  } else {

    themeButton.innerHTML =
      '<i class="fa-solid fa-sun"></i>';
  }

}