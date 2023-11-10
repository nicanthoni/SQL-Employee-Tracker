const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./main/queries');
const cTable = require('console.table');


const cliQuestion = [
    {
        type: 'list',
        name: 'initiate',
        message: "Select one of the following:",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
];

// function to initialize app
function init() {
    inquirer
        .prompt(cliQuestion)
        .then(response => {
            let selection = response.initiate;
            switch (selection) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateRole();
                    break;
                default:
                    break;
            }
        })
}

function viewAllDepartments() {
    db.viewDepartments()
        .then(([depData]) => {
            console.table(depData)
        })
}

function viewAllRoles() {
    db.viewRoles()
        .then(([roleData]) => {
            console.table(roleData);
        })
}

function viewAllEmployees() {
    db.viewEmployees()
        .then(([employeeData]) => {
            console.table(employeeData);
        })
}

// "add/update" functions need inquirer prompt
function addDepartment() {
    inquirer
        .prompt([{
            name: "name",
            message: "What is the name of the Department?"
        }])
        .then(response => {
            db.addDepartment(response.name)
                .then(() => {
                    console.table(response.name);
                })
        })
}
init();