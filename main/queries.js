// contains functions for performing specific SQL queries you'll need to use. 
// A constructor function or class could be helpful for organizing these

class Queries {
    constructor(sqlQuery) {
        this.sqlQuery = sqlQuery;
    }
};

class viewDepartments extends Queries {};

class viewRoles extends Queries {};

class viewEmployees extends Queries {};

class addDepartment extends Queries {};

class addRole extends Queries {};

class addEmployee extends Queries {};

class updateEmployeeRole extends Queries {};