// Define variables
let expression = '';
const display = document.getElementById('display');

// Function to update the display
function updateDisplay() {
    display.value = expression;
}

// Function to handle button clicks
function handleButtonClick(value) {
    if (value === '=') {
        // Evaluate the expression
        expression = eval(expression);
    } else if (value === 'C') {
        // Clear the display
        expression = '';
    } else {
        // Append the clicked value to the expression
        expression += value;
    }
    updateDisplay();
}

// Dynamically generate buttons
const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];

buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.textContent = button;
    btn.addEventListener('click', () => handleButtonClick(button));
    document.querySelector('.buttons').appendChild(btn);
});