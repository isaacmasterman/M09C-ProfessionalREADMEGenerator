// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project:',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation for creating this project?',
    },
    {
      type: 'input',
      name: 'problemSolved',
      message: 'What problem does this project solve?',
    },
    {
      type: 'input',
      name: 'learnings',
      message: 'What did you learn while building this project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide a step-by-step description of how to get the development environment running:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, and any third-party assets that require attribution, along with links to their primary web presence:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Provide guidelines for other developers to contribute to your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide examples on how to run tests for your application:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: function (input) {
          if (input.length === 0) {
            return 'Please enter a valid GitHub username.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: function (input) {
          // Simple validation for email format
          const pass = input.match(
            /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address.';
        },
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README generated successfully!')
    );
  }  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }

// Function call to initialize app
init();
