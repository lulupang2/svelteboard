import { initDB } from './mysql';

export function get(req, res) {
    const { db } = initDB();
    db.query(`SELECT * FROM board;`, (err, results, fields) => {
        if (err) throw err;
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(results));
    });
}