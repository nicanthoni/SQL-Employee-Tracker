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

// TODO: Create a function to initialize app
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



// add / update  fucntions need inquirer prompt
function addDepartment() {
    inquirer
        .prompt([{
            name: "departmentName",
            message: "Type the name of the department"
        }])
        .then(response => {
            db.addDepartment(response.departmentName)
                .then(() => {
                    console.table(response.departmentName);
                })
        })
}
init();