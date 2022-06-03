const express = require('express');
const bodyParser = require('body-parser');

//Routes
const usersRouter = require('./src/routes/users.routes');
const {urlencoded} = require("express");


const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', usersRouter);


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})