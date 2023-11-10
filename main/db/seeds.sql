INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Support Engineering"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Generalist", 65,000.00, 1),
       ("Associate Support Engineer", 80,000.00, 2),
       ("Sales Development Representative", 45,000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nic", "Diaz", 5, 10),
       ("Libby", "Lee", 5, 11),
       ("Paul", "Yannucci", 4, 9); 

DESCRIBE department;
DESCRIBE role;
DESCRIBE employee;


-- how should we seed the 'MANAGER_ID' here in the employee table? -- 