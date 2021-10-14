// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input. Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        name: "project",
        message: "What is your project title?",
        type: "input",
    },
    {
        name: "description",
        message: "Describe your project in a few short sentences.",
        type: "input",
    },
    {
        name: "toc",
        message: "Table of Contents.",
        type: "input",
    },
    {
        name: "install",
        message: "How do you install your project?",
        type: "input",
    },
    {
        name: "usage",
        message: "List usage steps.",
        type: "input"
    },
    {
        name: "credits",
        message: "List contributors/collaborators, third-party assets that require attributes, or tutorials you used.",
        type: "input",
    },
    {
        name: "license",
        message: "How old are you?",
        type: "number",
    },
    {
        name: "contribute",
        message: "Describe how others can contribute.",
        type: "input",
    },
    {
        name: "test",
        message: "Provide examples on how to run tests here.",
        type: "input",
    },
    {
        name: "questions",
        message: "Where should questions be directed?",
        type: "number",
    },
];

// TODO: Create a function to write README file
function writeToFile('README.md', process.argv[2],) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(response) {  //response is the name I'm giving to the object created by user answers
        console.log(response.project);
    })   
    .catch(function(err) {
        console.log(err);
    })
}

// Function call to initialize app
init();