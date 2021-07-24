/* ====== External Modules  ====== */
// all code that is not our own
const express = require("express"); 
const logger = require('morgan');
/* ====== Internal Modules  ====== */
// all code that is our code 



/* ====== Instanced Module  ====== */
// Create the Express App
const app = express(); 

/* ====== System Variables  ====== */
const PORT = 4000; 

/* ====== App Configuration  ====== */
// app.set
app.set("view engine", "ejs");

/*======= Middleware ======*/
app.use(logger('morgan'));

/* ====== Server bind  ====== */
// bind the application to the port via app.listen
// app.listen(number, optional function to do after bind)
app.listen(PORT, function () {
    console.log(`Nemesis bound and awaiting orders at http://localhost:${PORT}`);
  });