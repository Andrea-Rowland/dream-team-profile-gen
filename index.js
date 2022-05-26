const Inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

function init() {
    function createManager() {
        Inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "what is the manager's office number?"
            }
        ])
            .then(function (answers) {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                teamArr.push(manager);
                createTeam()
            })
    }

    createManager();

    function createTeam() {
        Inquirer.prompt([
            {
                type: 'list',
                name: 'userChoice',
                message: 'Please choose an option',
                choices: ["Engineer", "Intern", "Build my team"]
            }
        ])
            .then(function (option) {
                switch (option.userChoice) {
                    case "Engineer":
                        createEngineer();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    default:
                        buildTeam();
                        break;
                }
            })
    }

    function createEngineer(){
        Inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?",
            }
        ])
    }

    function createIntern(){
        
    }

    function buildTeam(){
        
    }
}

init();