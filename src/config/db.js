const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'database',
    database: 'postgres',
    password: 's.flores9',
    port: 5433,
})

module.exports = pool;

