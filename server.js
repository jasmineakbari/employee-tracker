const inquirer = require('inquirer');

const promptUser = () => {
    inquirer
        // provides employee track option based on employee, deparment, roles
        .prompt({
            type: 'list',
            name: 'options',
            message: 'Select an option to to continue.',
            choices: ['View Departments', 'View all Roles', 
            'View current Employees', 'Add a Department', 
            'Add a role', 'Add an Employee', 'Update an Employees Info']
        })
        // How to handle each case

}

module.exports = { promptUser };

promptUser();