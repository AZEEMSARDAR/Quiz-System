#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

console.log(chalk.bgYellow.bold("\t\n          WELCOME TO THE QUIZ SYSTEM          \n"));

let name = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "What is your name?"
    }
]);
const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string; 
    question_6: string;
    question_7: string;
    question_8: string;
    question_9: string;
    question_10: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is TypeScript?",
        choices: ["a) A superset of JavaScript", "b) A database management system",  
        "c) A style of coding in Python", "d) A version control system"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.What is the correct way to check if two values are not equal in Typescript?",
        choices: ["a) a == b", "b) a === b", "c) a >= b", "d) a !== b"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.What does TypeScript provide that JavaScript doesn't?",
        choices: ["a) Dynamic typing", "b) Strongly-typed variables", "c) Inline CSS styling", 
        "d) Automatic memory management"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.What is the file extension used for TypeScript files?",
        choices: ["a).js", "b).css", "c).html", "d).ts"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.Which operator is commonly used for string concatenation in Typescript?",
        choices: ["a) +", "b) -", "c) *", "d) /"]
    },
    {
        name: "question_6",
        type: "list",
        message: "Q6.What does any type signify in TypeScript?",
        choices: ["a) It represents any type of data", "b) It signifies an unknown type", "c) It denotes an error"]
    },
    {
        name: "question_7",
        type: "list",
        message: "Q7.Which command is used to install TypeScript globally using npm?",
        choices: ["a) npm install typescript ", "b) npm install -g typescript", "c) npm install global typescript"]
    },
    {
        name: "question_8",
        type: "list",
        message: "Q8.What is the TypeScript compiler called?",
        choices: ["a) TSC", "b) JS Compiler", "c) TypeScript Engine"]
    },
    {
        name: "question_9",
        type: "list",
        message: "Q9.How can you define an array in TypeScript??",
        choices: ["a) let arr: array = [1, 2, 3]", "b) let arr: Array<number> = [1, 2, 3]", "c) let arr = [1, 2, 3]"]
    },
    {
        name: "question_10",
        type: "list",
        message: "Q10.What is the purpose of the constructor method in a TypeScript class??",
        choices: ["a) To initialize class properties", "b) To define class methods", "c) To declare class variables"]
    },
    
]);

let score: number = 0;

switch(quiz.question_1) {
    case "a) A superset of JavaScript":
        console.log(chalk.blue("1. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("1. Incorrect"));
}



switch(quiz.question_2) {
    case "d) a !== b":
        console.log(chalk.blue("2. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("2. Incorrect"));
}



switch(quiz.question_3) {
    case "b) Strongly-typed variables":
        console.log(chalk.blue("3. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("3. Incorrect"));
}




switch(quiz.question_4) {
    case "d).ts":
        console.log(chalk.blue("4. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("4. Incorrect"));
}



switch(quiz.question_5) {
    case "a) +":
        console.log(chalk.blue("5. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("5. Incorrect"));
}


switch(quiz.question_6) {
    case "a) It represents any type of data":
        console.log(chalk.blue("6. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("6. Incorrect"));
}



switch(quiz.question_7) {
    case "b) npm install -g typescript":
        console.log(chalk.blue("7. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("7. Incorrect"));
}



switch(quiz.question_8) {
    case "a) TSC":
        console.log(chalk.blue("8. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("8. Incorrect"));
}

switch(quiz.question_9) {
    case "b) let arr: Array<number> = [1, 2, 3]":
        console.log(chalk.blue("9. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("9. Incorrect"));
}



switch(quiz.question_10) {
    case "a) To initialize class properties":
        console.log(chalk.blue("10. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("10 Incorrect"));
}

console.log(chalk.yellow(`Dear ${name.userName} Your score is: ${score}/10`));