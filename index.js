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
      name: "contributors",
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

function generateMD(answers) {
  return `
# ${answers.title}
    ${answers.description}
    ## Table of contents:
        * Installation
        * Usage
        * License
        * Contributors
        * Tests
        * Picture
        * Email
    ## Instalation
        ${answers.installation}
    ## Usage
        ${answers.usage}
    ## License
        ${answers.license}
    ## Contributors
        ${answers.contributors}
    ## Tests
        ${answers.test}
        <img src="${answers.profilePicture}">
    ### ${answers.gitHubEmail}
  ;
  `
};

promptUser()
  .then(function(answers) {
    const md = generateMD(answers);

    return writeFileAsync("newREADME.md", md);
  })
  .then(function() {
    console.log("Successfully wrote your README!");
  })
  .catch(function(err) {
    console.log(err);
  });