









console.log("*****************************************************");








// Number guessing game...
alert("🎯 Welcome to the Number Guessing Game!");

// Generate a random number between 1 and 10
let secretNum = Math.floor(Math.random() * 10) + 1;
console.log("Secret Number (for testing):", secretNum); // Remove this line in the final version


// Get user input and convert to a number
let userInputs = +prompt("Enter a number between 1 and 10:");
console.log("User input:", userInputs);


// Input validation (optional but good practice)
if (userInputs < 1 || userInputs > 10 || isNaN(userInputs)) {
    console.log("❌ Invalid input. Please enter a number between 1 and 10.");
} else {
    // Compare user's guess with the secret number
    if (userInputs === secretNum) {
        console.log("🎉 Congratulations! You guessed it right!");
    } else {
        console.log("😢 Better luck next time! The correct number was " + secretNumber + ".");
    }
}