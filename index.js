// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`${fileName} generated successfully!`);
      }
    });
}

// Function to initialize app
const init = async () => {
    try {
      const answers = await inquirer.prompt(questions);
    
      // Combine user answers into a markdown format
      const data = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
GitHub: [${answers.github}](https://github.com/${answers.github})
Email: [${answers.email}](mailto:${answers.email})
      `;

      // Write the README content to the file
      writeToFile('README.md', data); // Pass the constructed data here
    } catch (err) {
      console.error('Error generating README:', err);
    }
};

// Function call to initialize app
init();
