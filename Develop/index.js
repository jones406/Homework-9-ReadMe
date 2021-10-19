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
    { name: "email", message: "Enter your email:", type: "input" },
    { name: "github", message: "Enter your github username", type: "input" }]

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

// This command-line application was made to gather user input and generate a quality README.md file. 

//To install this node.js README generator app, first run the command "npm i" from the package.json file. 

// From the index.js file run the command "node index.js" and answer the prompts. A README.md file will be generated from your responses.

//Suggestions can be provided at the email link below.