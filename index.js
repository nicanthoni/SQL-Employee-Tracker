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

function addEmployee() {
    inquirer
        .prompt([{
            name: "first_name",
            message: "What is the employee's first name"
        },
        {
            name: "last_name",
            message: "What is the employee's last name"
        },
        {
            type: 'list',
            name: "role_id",
            message: "Select the employees role ID:" ,
            choices: [1,2,3,4]
        },
        {
            type: 'list',
            name: "manager_id",
            message: "Select the ID of the employee's Manager:",
            choices: [1]
        }
    ])
        .then(response => {

            const { first_name, last_name, role_id, manager_id } = response;

            db.addEmployee(first_name, last_name, role_id, manager_id)
                .then(() => {
                    console.table([first_name, last_name, role_id, manager_id]);
                })
        })
}

function updateRole() {
    inquirer
    .prompt([{
            type: 'list',
            name: "first_name",
            message: "Select the employees first name:",
            choices: ["Trinh", "Nic", "Libby", "Paul"]
    },
    {
        type: 'list',
        name: "last_name",
        message: "Select the employees last name:",
        choices: ["Nguyen", "Diaz", "Lee", "Yannucci"]
    },
    {
        type: 'list',
        name: "role_id",
        message: "Select their new role ID:",
        choices: [1, 2, 3, 4]
    }
])
    .then(response => {

        const { first_name, last_name, role_id } = response;

        db.addEmployee(first_name, last_name, role_id)
            .then(() => {
                console.table([first_name, last_name, role_id]);
            })
    })
}

init();