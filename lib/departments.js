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

}

module.exports = { displayDepts, addDept };