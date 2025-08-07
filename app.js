// Number guessing game...
alert("🎯 Welcome to the Number Guessing Game!");

secretNumber = (Math.floor(Math.random() * 10) + 1)
// secretNumber = (Math.random)


userInput = +prompt("👤 Enter number between 1 to 10: ")



if (userInput === secretNumber){
    console.log("Win!")
} else {
    console.log("⏭ Better luck next time! ");
    
}


console.log("User input: ",userInput);
// console.log("Secret number: ",secretNumber);
