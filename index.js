// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What would you like to call you project?"
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project."
    },
    {
      type: "input",
      name: "installation",
      message: "What instalations are you going to need for your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "How will your application be used?"
    },
    {
      type: "input",
      name: "license",
      message: "What licensing will you use for your project?"
    },
    {
      type: "input",
      name: "contributers",
      message: "Who will be contributing to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests do you expect for this project?"
    },
    {
        type: "input",
        name: "profilePicture",
        message: "What is your gitHub profile image link?"
    },
    {
        type: "input",
        name: "gitHubEmail",
        message: "What is your GitHub email?"
    },

  ]);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
