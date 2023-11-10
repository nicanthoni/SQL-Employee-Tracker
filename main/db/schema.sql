DROP DATABASE IF EXISTS org_db;

CREATE DATABASE org_db;

USE org_db;

-- department table --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

-- role table --
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
    FOREIGN KEY(department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- employee table --
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
    FOREIGN KEY(role_id) REFERENCES role(id)
    FOREIGN KEY(manager_id) REFERENCES employee(id)  -- ??? - 'to hold reference to another employee that 
    -- is the manager of the current employee (null if the employee has no manager)'
    ON DELETE SET NULL
);


-- SHOULD ALL THE ID VALUES BE AUTO_INCREMENTED IN EACH CASE HERE OR ISSUES CAN BE CAUSED?