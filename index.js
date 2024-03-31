#!/usr/bin/env node
import inquirer from "inquirer";
console.log("----! Welcome To Muhammad Hasnain's Number Guessing Game !----");
function getRandomNumber(min, max) {
    const randomFloat = Math.random();
    const randomNum = Math.floor(min + randomFloat * (max - min + 1));
    return randomNum;
}
const minNum = 1;
const maxNum = 10;
const randomNumber = getRandomNumber(minNum, maxNum);
const userInput = await inquirer.prompt([
    {
        message: "Guess a Number Between 1 to 10: ",
        type: "number",
        name: "guessedNumber",
    },
]);
function compareGuess(userInput, randomNumber) {
    if (userInput === randomNumber) {
        return "correct";
    }
    else if (userInput < randomNumber) {
        return "low";
    }
    else {
        return "high";
    }
}
const result = compareGuess(userInput.guessedNumber, randomNumber);
if (result === "correct") {
    console.log("Congratulations! Your guess is correct.");
}
else if (result === "low") {
    console.log("Your guess is too low. The number was " + randomNumber);
}
else if (result === "high") {
    console.log("Your guess is too high. The number was " + randomNumber);
}
