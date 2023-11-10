// contains functions for performing specific SQL queries you'll need to use. 
// A constructor function or class could be helpful for organizing these
const connection = require('./connection');


class Queries {
    constructor(connection) {
        this.connection = connection;
    }

    viewDepartments() {
        return this.connection.promise().query("SELECT * FROM department");
    }

    viewRoles() {
        return this.connection.promise().query("SELECT * FROM role");
    }

    viewEmployees() {
        return this.connection.promise().query("SELECT * FROM employee");
    }
    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }
};

// any needed 'joins' go directly in a function above

//  viewDepartments {};
//  viewRoles {};
//  viewEmployees {};
//  addDepartment {};
//  addRole {};
//  addEmployee {};
//  updateEmployeeRole {};

module.exports = new Queries(connection);