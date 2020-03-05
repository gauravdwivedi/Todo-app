const express = require('express');
const db = require('./config/mongoose');
const app = express();
const port = 8000;


//I learned that you make sure that you define all configurations
//BEFORE defining routers
//if you do so, you can continue use Parser.


app.use(express.urlencoded());
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', './views');

//use express routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log('error creating server');
    }

    console.log('sever started in port ', port);
})