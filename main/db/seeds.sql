INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Support Engineering"),
       ("Sales"),
       ("Management");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Generalist", 65000.00, 1),
       ("Associate Support Eng", 80000.00, 2),
       ("Sales Development Rep", 45000.00, 3),
       ("Manager", 100000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Trinh", "Nguyen", 4, null),
       ("Nic", "Diaz", 2, 1),
       ("Libby", "Lee", 1, 1),
       ("Paul", "Yannucci", 3, 1);

DESCRIBE department;
DESCRIBE role;
DESCRIBE employee;


-- how should we seed the 'MANAGER_ID' here in the employee table? -- 