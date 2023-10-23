// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'BSD 3-Clause':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GPLv3':
      return '[GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
  if (license === 'None') {
    return 'This project is not licensed.';
  }
  return `This project is covered under the ${license} License. For more information, see the [LICENSE](LICENSE) file.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  - What was your motivation? ${data.motivation}
  - Why did you build this project? ${data.problemSolved}
  - What problem does it solve? ${data.problemSolved}
  - What did you learn? ${data.learnings}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Features
  ${data.features}
  
  ## Contribute
  ${data.contribute}
  
  ## Tests
  ${data.tests}

  ${generateQuestionsSection(data.github, data.email)}
`;
}

function generateQuestionsSection(github, email) {
  return `## Questions

If you have any questions about the project, please feel free to contact me directly at [${email}](mailto:${email}). You can also find more of my work at [${github}](https://github.com/${github}).
`;
}

module.exports = generateMarkdown;
