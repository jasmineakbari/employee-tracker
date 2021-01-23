const sqlite3 = require('sqlite3').verbose();

// Connects application to the database
const db = new sqlite3.Database('./db/employees.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the employees database.');
});

module.exports = db;