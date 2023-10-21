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
      message: 'List your collaborators, if any, with links to their GitHub profiles:',
    },
    {
      type: 'input',
      name: 'thirdPartyAssets',
      message: 'List any third-party assets that require attribution, along with links to their primary web presence:',
    },
    {
      type: 'input',
      name: 'tutorials',
      message: 'If you followed tutorials, include links to those here:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'features',
      message: 'List the features of your project:',
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
