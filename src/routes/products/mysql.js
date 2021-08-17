import mysql from 'mysql2';

export function initDB() {
    // Create connection
    const db = mysql.createConnection({
        host: 'testest2.cf',
        user: 'tester',
        password: '1',
        database: 'node_1',
        dateStrings: true

    });
    db.connect((err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('connected to mysql');
    });
    return { db };
}