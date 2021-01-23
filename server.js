const inquirer = require('inquirer');
const db = require('./db/database');


const promptUser = () => {
    inquirer
        // provides employee track option based on employee, deparment, roles
        .prompt({

        })
}

module.exports = { promptUser };