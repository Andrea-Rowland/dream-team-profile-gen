const Inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const temp = require("./src/page-template");

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
        .then(function (answers) {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArr.push(engineer);
            createTeam()
        })
    }

    function createIntern(){
        Inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?",
            }
        ])
        .then(function (answers) {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArr.push(intern);
            createTeam()
        })
    }

    function buildTeam(){
        console.log(teamArr);
        fs.writeFileSync(path.join(path.resolve(__dirname,"dist"),"Team.html"), temp(teamArr), "utf-8")
    }
}

init();