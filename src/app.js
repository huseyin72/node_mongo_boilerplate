const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = './src/config.env'
require('dotenv').config({path:path});


const app = express();


//start with async
async function startApp() {



    //body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    const cookieParser = require('cookie-parser');

    //cookie parser
    app.use(cookieParser());


    //wiew engine


    //app routes


    //404 not found
    app.use((req, res, next) => {
        res.status(404).send("Sorry can't find that!")
    })


    // connect to port
    const port = process.env.PORT
    app.listen(port, () => {
        console.log('connected to port');
    })
};



startApp();






