const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookies = require('cookie-parser');

//Routes
const usersRouter = require('./src/routes/users.routes');
const bankAccountsRouter = require('./src/routes/bank_accounts.routes');

const {urlencoded} = require("express");

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }


const app = express();

//Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookies());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/bank_accounts', bankAccountsRouter);



app.listen(8500, () => {
    console.log('Example app listening on port 8500!');
})