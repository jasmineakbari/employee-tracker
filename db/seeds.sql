INSERT INTO department (department_name)
VALUES
    ('Accounting'),
    ('IT'),
    ('Customer Service');

INSERT INTO roles (role_title, role_salary, department_id)
VALUES
    ('Manager', '60,000.00', '3'),
    ('Assistant Manager', '45,000.00', '2'),
    ('Employee', '33,000.00', '3'),
    ('Accountant', '60,000.00', '1');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ash', 'Alpha', 1, NULL),
    ('Alena', 'Skye', 4, 1),
    ('Miyuki', 'Miyamoto', 2, 2),
    ('Amelia', 'Snow', 3, 3);