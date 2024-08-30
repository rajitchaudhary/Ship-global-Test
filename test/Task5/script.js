// Array of word objects containing scrambled words, original words, and hints
const words = [
    { scrambled: "A E G E X C N H", original: "EXCHANGE", hint: "The act of trading" },
    { scrambled: "B O O K", original: "BOOK", hint: "An item you read" },
    { scrambled: "P E L A P", original: "APPLE", hint: "A type of fruit" },
    { scrambled: "C O M U T P E R", original: "COMPUTER", hint: "A device for computing" },
    { scrambled: "T R A C", original: "CART", hint: "A small vehicle" },
    // Add more words here as needed
];

// Variables to keep track of the current word index, attempts, and timer
let currentWordIndex = 0;
let attempts = 0;
let timeLeft = 15; // Time in seconds
let timer; // Timer variable to control the countdown

// DOM elements
const scrambledWordElement = document.getElementById('scrambledWord');
const userInput = document.getElementById('userInput');
const feedbackElement = document.getElementById('feedback');
const attemptsElement = document.getElementById('attempts');
const timerElement = document.getElementById('timer');
const checkWordButton = document.getElementById('checkWord');
const refreshWordButton = document.getElementById('refreshWord');

// Initialize the game by setting a new word and starting the timer
function startGame() {
    setNewWord(); 
    attempts = 0; 
    timeLeft = 15; // Reset the timer
    feedbackElement.textContent = ''; // Clear feedback messages
    attemptsElement.textContent = `Attempts: ${attempts}`; 
    userInput.value = ''; // Clear user input field
    clearInterval(timer); 
    startTimer(); // Start the countdown timer
}


function setNewWord() {
    currentWordIndex = Math.floor(Math.random() * words.length); // Randomly select a word
    scrambledWordElement.textContent = words[currentWordIndex].scrambled; // Display the  word
}

// Check the user's guess against the original word
function checkWord() {
    const userGuess = userInput.value.trim().toUpperCase(); 
    attempts++; // Increment 
    attemptsElement.textContent = `Attempts: ${attempts}`; 
    
    const originalWord = words[currentWordIndex].original.trim().toUpperCase(); // for correct answer

    // Log guesses and answers for debugging
    console.log(`User Guess: '${userGuess}'`);
    console.log(`Original Word: '${originalWord}'`);

    // Compare user's guess with the original word
    if (userGuess === originalWord) {
        alert("Correct! You unscrambled the word! Moving to the next word.");
        startGame(); 
    } else {
        feedbackElement.textContent = "Incorrect guess. Try again!"; 
    }
}

// Start the countdown timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--; 
        timerElement.textContent = `Time Left: ${timeLeft}s`; 

       
        if (timeLeft <= 0) {
            clearInterval(timer); 
            feedbackElement.textContent = "Time's up! Try again.";
        }
    }, 1000); // Update every second
}


refreshWordButton.addEventListener('click', startGame); // Start a new game when refresh button is clicked
checkWordButton.addEventListener('click', checkWord); // Check the word when check button is clicked

// Start the game initially
startGame();
