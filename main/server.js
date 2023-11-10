// is there a better file name for this? No need for express right?

const mysql = require('mysql2');

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Juventus13!',
        database: 'org_db'
    },
    console.log('Connected to the org_db database.')
);

// 

