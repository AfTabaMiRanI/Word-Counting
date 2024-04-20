#! /usr/bin/env node

// import the "inquirer" module, which is a command line interface for Node.js
import inquirer from "inquirer"
import chalk from "chalk"


// Declare a constant 'answer' and assign it to the result of inquirer.prompt functon

const answers: {
    sentence: string 
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message:chalk.green`Enter Your Sentence to count the words:`
    }
])

const words = answers.sentence.trim().split(" ");

// Print the array of words to the console.
console.log(words);


// print the word count of the sentence to the console
console.log(chalk.blue`Your sentnece word count is: ${words.length}`);


console.log(chalk.yellow`****Thank You****`);
