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
            'Add a role', 'Add an Employee', 
            'Update existing Employees Info']
        })
        // How to handle each choice
        .then((selection) => {
            switch (selection['options']) {
                case 'View Departments':
                    viewDepts();
                    break;
                case 'View all Roles':
                    viewRoles();
                    break;
                case 'View current Employees':
                    displayEmps();
                    break;
                case 'Add a Department':
                    addDept();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmp();
                    break;
                case 'Update existing Employees Info':
                    editEmp();
                    break;
            }
        })
};

module.exports = { promptUser }
const { displayEmps, addEmp, editEmp } = require('./lib/employees');
const { viewDepts, addDept } = require('./lib/departments');
const { viewRoles, addRole } = require('./lib/roles');

promptUser();