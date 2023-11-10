const inquirer = require('inquirer');
const fs = require('fs');

const cliQuestion = [
    {
        type: 'list',
        name: 'initiate',
        message: "Select one of the following:",
        choices: ["View all departments","View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
];

