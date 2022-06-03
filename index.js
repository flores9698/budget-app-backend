const express = require('express');
const pool = require('./src/config/db');


const app = express();

app.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})