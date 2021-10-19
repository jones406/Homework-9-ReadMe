//Tell JS which files or packages to get
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");

//Create an array of questions for user input.
const questions = [
    { name: "title", message: "Project title:", type: "input" },
    { name: "description", message: "Short project description:", type: "input" },
    { name: "install", message: "How do you install your project?", type: "input" },
    { name: "usage", message: "List usage steps.", type: "input" },
    { name: "credits", message: "List contributors and references:", type: "input" },
    { name: "license", message: "License:", type: "list", choices: ["MIT", "GPLv2", "Apache", "Other"], default: "MIT" },
    { name: "contribute", message: "How to contribute:", type: "input", },
    { name: "test", message: "How to run tests:", type: "input" },
    { name: "questions", message: "Enter your github username and URL and your email:", type: "input" }]

// Function to write README file and initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {  //response = object created by user answers
            fs.writeFile('README.md', generateMarkdown(response), err => {
                err ? console.log(err) : console.log('Success!')
            });
        })
        .catch(function (err) {
            console.log(err);
        })
}

init();










// ? Project title: Homework 9: README Generator in Node.js
// ? Short project description: This command-line application was made to gather user input and generate a quality README.md file. 
// ? How do you install your project? To use this application, you need to install node.js and the inquirer npm. You can install this by entering "npm i" in your terminal after 
// downloading the application. When ready to use this application, enter "npm i" into your command line.
// ? List usage steps. Run the index.js file and answer each prompt. This will create the basis for your README.md file.
// ? List contributors and references: Brooke Jones, Tyler Arthur, inquirer.js https://www.npmjs.com/package//inquirer#questions
// ? License: 
// ? How to contribute: 