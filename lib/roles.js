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

// function to view roles
displayRoles = () => {
    connection.query(`SELECT * FROM roles`, 
    
    function(err, results) {
        if (err) {
            console.log(err.message);
        }

        console.table(results);
    
        promptUser();
    })
}

// function to add a role
addRole = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'role_title',
            message: 'Please provide the name of the New Role.'
        },
        {
            type: 'input',
            name: 'role_salary',
            message: 'Please provide the the Salary for this Role.'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Please provide the Department ID # for this Role.'
        }
        ])
        .then((answers) => {
            connection.query(
                `INSERT INTO roles (role_title, role_salary, department_id)
                VALUES (?, ?, ?)`,
                [answers.role_title, answers.role_salary, answers.department_id],
                function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.log('New Role was added successfully!');
                    promptUser();
                }
            )
        })
}

module.exports = { displayRoles, addRole };