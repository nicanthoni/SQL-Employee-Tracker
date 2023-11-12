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

// WHEN I choose to add a role
// THEN I'm'prompted to enter the name, salary, & department for the role & that role is added to the db.
function addRole() {
    inquirer
        .prompt([{
            name: "title",
            message: "What is the name of the Role?"
        },
        {
            name: "salary",
            message: "What is the salary for the role?"
        },
        {
            name: "department_id",
            message: "What's the single digit ID of the department the role belongs to?" 
        }])
        .then(response => {

            const { title, salary, department_id } = response;

            db.addRole(title, salary, department_id)
                .then(() => {
                    console.table([title, salary, department_id]);
                })
        })
}


init();