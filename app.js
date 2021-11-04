const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/gen-site.js')
const genPage = require('./src/page-template.js')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

// inquirer questions here
// first question function is add manager
function addManager() {
    console.log(`
    ======================================
    Welcome to the Team Profile Generator!
    ======================================
    `)
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'To begin, please enter the name of the Team Manager:',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Enter the employee ID for this manager:',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter the email for this manager: ',
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'Enter the office number for this manager: ',
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
        teamMembers.push(manager);
        console.log(teamMembers);
        addNewMember();
    })
};

// then addNewMember will handle engineer OR intern OR finish adding members
// use conditionals to determine which was chosen 
// type: checkbox

function addNewMember() {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'memberType',
            message: 'Please select a role to add a new team member, otherwise select finish. ',
            choices: ['Engineer', 'Intern', 'Finish building team'],
        }
    ])
    .then(choice => {
        console.log(choice);
        if (choice === 'Engineer') {
            addEngineer();
        }
        if (choice === 'Intern') {
            addIntern();
        }
        else {
            finishTeam();
        }
    })
};

function addEngineer();

function addIntern();

// once they have entered a minimum # of employees,  add option to finish?
// IF finish: deploy => copyFile & writeFile



addManager();