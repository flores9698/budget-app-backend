const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookies = require('cookie-parser');
const guard = require('./src/guard/guard');
//Routes
const usersRouter = require('./src/routes/users.routes');
const banksRouter = require('./src/routes/bank.routes')
const bankAccountsRouter = require('./src/routes/bank_accounts.routes');

const {urlencoded} = require("express");

const corsOptions ={
    origin:'*',
    credentials:true,
  }


const app = express();

//Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookies());
app.use(express.json());


app.use('/users', usersRouter);
app.use(guard);
app.use('/bank_accounts', bankAccountsRouter);
app.use('/banks', banksRouter);





app.listen(8500, () => {
    console.log('Example app listening on port 8500!');
})