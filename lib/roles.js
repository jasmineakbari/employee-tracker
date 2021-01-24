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

}

module.exports = { displayRoles, addRole };