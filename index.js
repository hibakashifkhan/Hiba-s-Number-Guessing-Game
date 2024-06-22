#! usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Hiba's number_Guessing_Game!");
const RandomNumber = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your Guess please(Number Limit From 1 to 9) :"
    }
]);
if (answer.userGuessedNumber === RandomNumber) {
    console.log("Good Job! You guessed it right ");
}
else {
    console.log("Incorrect");
}
