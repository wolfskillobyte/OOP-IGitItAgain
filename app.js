const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/gen-site.js')
const genPage = require('./src/page-template.js')

// inquirer questions here

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
            message: 'To begin, please enter the name of your Team Manager:',
        },
        {
            type: 'input',
            name: ''
        }



    ])
}

// first question is add manager
// type: input
// then add engineer OR intern
// use conditionals to determine which was chosen 
// type: checkbox

// once they have entered a minimum # of employees,  add option to FINISH
// IF finish: deploy => copyFile & writeFile



addManager();