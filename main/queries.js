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
        let deptData = { name: department }
        return this.connection.promise().query("INSERT INTO department SET ?", deptData);
    }
    addRole(title, salary, department_id) {
        let roleData = { 
            title: title,
            salary: salary, 
            department_id: department_id  
        }
        return this.connection.promise().query("INSERT INTO role SET ?", roleData);
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