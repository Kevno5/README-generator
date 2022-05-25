// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const util = require('util');
const fs = require('fs');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'titleProject',
            message: 'What is the project title name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a brief description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation process of the application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this application',
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Who were the contributers of this application?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Who is the appropriate license for this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Is there a way to test the application?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'enter your gitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        }
    ])
}


async function init(){
    try{
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);

        await writeFileAsync('./createdReadMd/README.md', generateContent);
        console.log('Successfully created readMe file');
    } catch(err){
        console.log(err);
    }

}


init();

