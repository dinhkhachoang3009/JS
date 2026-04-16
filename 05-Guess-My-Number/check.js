// Random Number Guessing Game

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessed = false;

function checkGuess(userGuess) {
    attempts++;

    if (userGuess === secretNumber) {
        console.log(`✓ Correct! The number was ${secretNumber}`);
        console.log(`You guessed it in ${attempts} attempts!`);
        guessed = true;
        return true;
    } else if (userGuess < secretNumber) {
        console.log(`Too low! Try a higher number.`);
    } else {
        console.log(`Too high! Try a lower number.`);
    }
    return false;
}

// Test the game
checkGuess(50);
checkGuess(75);
checkGuess(62);
checkGuess(68);
checkGuess(65);
checkGuess(63);