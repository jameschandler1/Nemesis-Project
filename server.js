/* ====== External Modules  ====== */
// all code that is not our own
const express = require("express"); 
const logger = require('morgan');
const mongoose = require('mongoose');
/* ====== Internal Modules  ====== */
// all code that is our code 
const indexRouter = require('./routes/index'); 


/* ====== Instanced Module  ====== */
// Create the Express App
const app = express(); 

/* ====== System Variables  ====== */
const PORT = 4000; //the port for local machine hosting

/* ====== App Configuration  ====== */
// app.set
app.set("view engine", "ejs");//set view engine to ejs
require('./database/database'); //bring in the Nemesis database

/*======= Middleware ======*/
app.use(logger('morgan'));

/*======Routes==========*/
app.use('/', indexRouter);


/* ====== Server bind  ====== */
// bind the application to the port via app.listen
app.listen(PORT, function () {
    console.log(`Nemesis bound and awaiting orders at http://localhost:${PORT}`);
  });