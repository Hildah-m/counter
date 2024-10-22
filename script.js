// Get DOM elements
const count = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initial value
let counterValue = 0;

// Increment function
incrementBtn.addEventListener('click', () => {
    counterValue++;
    count.textContent = counterValue;
});

// Decrement function
decrementBtn.addEventListener('click', () => {
    counterValue--;
    count.textContent = counterValue;
});

// Reset function
resetBtn.addEventListener('click', () => {
    counterValue = 0;
    count.textContent = counterValue;
});
