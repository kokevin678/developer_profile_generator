const fs = require("fs");
const inquirer = require("inquirer");
const electron = require("electron");
const axios = require("axios");

const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "Enter GitHub username",
    },
    {
        type: "list",
        name: "color",
        message: "Favorite color?",
        choices: ["Green", "Blue", "Pink", "Red"],
    }
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();
