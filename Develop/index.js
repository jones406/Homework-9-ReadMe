//Tell JS which files or packages to get
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input.
const questions = [
    {name: "title", message: "Project title:", type: "input"},
    {name: "description", message: "Short project description:", type: "input"},
    {name: "install", message: "How do you install your project?", type: "input"},
    {name: "usage", message: "List usage steps.", type: "input"},
    {name: "credits", message: "List contributors and references:", type: "input"},
    {name: "license", message: "License:", type: "checkbox", choices:["MIT", "GPLv2","Apache", "Other"]},
    {name: "contribute", message: "How to contribute:", type: "input",},
    {name: "test", message: "How to run tests:", type: "input"},
    {name: "questions", message: "Where should questions be directed?", type: "input"}]

// Function to write README file
// function writeToFile(filename, data) { };
fs.writeFile('README.md', generateMarkdown(data), err => {
    err ? console.log(err) : console.log('Success!')
});

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {  //response is the name I'm giving to the object created by user answers
            console.log(response.project);
        })
        .catch(function (err) {
            console.log(err);
        })
}

// Function call to initialize app
init();

