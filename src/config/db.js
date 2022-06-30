const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'database',
    database: 'budget_app',
    password: 's.flores9',
    port: 5432,
})

module.exports = pool;

