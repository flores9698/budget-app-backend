const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: '172.17.0.2',
    database: 'postgres',
    password: 's.flores9',
    port: 5432,
})

module.exports = pool;

