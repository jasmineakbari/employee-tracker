const inquirer = require('inquirer');
const mysql = require('mysql2');
//const { promptUser } = require('../server');

const promptUser = () => {
    inquirer
        // provides employee track option based on employee, deparment, roles
        .prompt({
            type: 'list',
            name: 'options',
            message: 'Select an option to to continue.',
            choices: ['View Departments', 'View all Roles', 
            'View current Employees', 'Add a Department', 
            'Add a role', 'Add an Employee', 
            'Update existing Employees Info']
        })
        // How to handle each choice
        .then((selection) => {
            switch (selection['options']) {
                case 'View Departments':
                    break;
                case 'View all Roles':
                    break;
                case 'View current Employees':
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
                        console.log('connected as id ' + connection.threadId + '\n');
                        displayEmps();
                    });

                    // function to view employees
                    displayEmps = () => {
                        connection.query('SELECT * FROM employee', function(err, res) {
                            if (err) throw err;
                            console.table(res);
                            promptUser();
                        })
                    }
                    break;
            }
        })
};



//module.exports = { promptUser };
//const { displayEmps } = require('./lib/employees');

promptUser();