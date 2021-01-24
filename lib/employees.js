const inquirer = require('inquirer');
const mysql = require('mysql2');
const { promptUser } = require('../server');

// connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username
    user: 'root',
    password: 'password',
    database: 'employees'
});

connection.connect(err => {
    if (err) throw err;
});

// function to view employees
displayEmps = () => {
    connection.query(`SELECT employee.id, employee.first_name, 
    employee.last_name, 
    role_id AS role, role_salary AS salary,
    department_name AS department,
    manager_id AS manager
    FROM employee
    LEFT JOIN roles
    ON employee.role_id = roles.id
    LEFT JOIN department
    ON roles.department_id = department.id`, 
    
    function(err, results) {
        if (err) {
            console.log(err.message);
        }

        console.table(results);
    
        promptUser();
    })

}

// function to add an employee
addEmp = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Please provide the Employees First Name.'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Please provide the Employees Last Name.'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Please provide the new Employees Role ID.'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Please provide the Managers ID or enter NULL if none.'
        }
        ])
        .then((answers) => {
            connection.query(
                `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?)`,
                [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
                function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.log('Employee was added successfully!');
                    promptUser();
                }
            )
        })
    
}
// function to update an employees information
editEmp = () => {

}

module.exports = { displayEmps, addEmp, editEmp };