#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const result = await inquirer.prompt([
    { name: "guessNumber",
        type: "number",
        message: "Guess a number from 1-10" }
]);
if (result.guessNumber === randomNumber) {
    console.log("Your Guess is Right, You won");
}
else {
    console.log("Try Again");
}
