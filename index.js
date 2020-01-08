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

function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Github Profile</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">

            <div class="container"  style="color: white; background-color: ${response.color}">
            <img href="${response.avatar_url}" style="size: 200px, 200px"/>
            <br>
            <h1 class="display-4">Hi! <br> My name is ${response.name}</h1>
                <ul class="list-group">
                <li class="list-group-item" style="color: darkslategrey">GitHub: ${response.html_url}</li>
                <li class="list-group-item" style="color: darkslategrey">Location: ${response.location}</li>
                </ul>
            <h3>${response.bio}</h3>
            </div>

            <div class="section">
            <h3>Public Repositories: ${response.public_repos}</h3>
            <h3>Followers: ${response.followers}</h3>
            <h3>Following: ${response.following}</h3>
            <h3>Starred: ${response.starred_url}</h3>
            </div>

        </div>
        </body>
    </html>`
}
init();
