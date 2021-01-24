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

// function to view departments
displayDepts = () => {
    connection.query(`SELECT * FROM department`, 
    
    function(err, results) {
        if (err) {
            console.log(err.message);
        }

        console.table(results);
    
        promptUser();
    })
}

// function to add a department
addDept = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'department_name',
            message: 'Please provide the name of the new Department.'
        }
        ])
        .then((answer) => {
            connection.query(
                `INSERT INTO department (department_name)
                VALUES (?)`,
                [answer.department_name],
                function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.log('Department was added successfully!');
                    promptUser();
                }
            )
        })
}

module.exports = { displayDepts, addDept };