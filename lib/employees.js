//const inquirer = require('inquirer');
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
    displayEmps();
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
    connection.query(
        `SELECT * FROM roles`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message)
                return;
            }
            
        }
    )
}
// function to update an employee role
editEmp = () => {

}

module.exports = { displayEmps, addEmp, editEmp };