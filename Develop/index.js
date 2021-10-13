// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "name",
        message: "What's your name?",
        type: "input",
    },
    {
        name: "age",
        message: "How old are you?",
        type: "number",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(response) {  //response is the name I'm giving to the object created by user answers
        console.log(response.name);
    })   
    .catch(function(err) {
        console.log(err);
    })
}

// Function call to initialize app
init();
