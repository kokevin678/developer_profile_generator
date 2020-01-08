const fs = require("fs");
const inquirer = require("inquirer");
const electron = require("electron");
const convertFactory = require("electron-html-to");
const axios = require("axios");
const generateHTML = require("./generateHTML");

const questions = [
    {
        type: "input",
        name: "username",
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
 
};

function init() {
    inquirer.prompt(questions).then(function({username, color}) {
        const queryURL = "https://api.github.com/users/${username}";
        console.log(username, color);

        axios.get(queryURL).then(function(response) {
            const name = response.data.name;
            const location = response.data.location;
            const githubLink = response.data.html_url;
            const publicRepos = response.data.public_repos;
            const followers = response.data.followers;
            const following = response.data.following; 
        });
    });
}
init();
