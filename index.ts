#! /usr/bin/env node

// SHABANG

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to performe operation",
        type: "list",
        name: "operator",
        choices: [ "Addition", "Substraction", "Multiplication", "Division"],
    },
]);

// condional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}

if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}

else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}

else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}

else {
    console.log("Please select a valid operator");  "operator"}



