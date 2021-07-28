require('dotenv').config();
/* ====== External Modules  ====== */
// all code that is not our own
const express = require("express"); 
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require('passport');


/* ====== Internal Modules  ====== */
// all code that is our code 
const routes = require('./routes')

/* ====== Instanced Module  ====== */
// Create the Express App
const app = express(); 

/* ====== System Variables  ====== */
const PORT = 4000; //the port for local machine hosting

/* ====== App Configuration  ====== */
// app.set
app.set("view engine", "ejs");//set view engine to ejs
require('./config/database'); //bring in the Nemesis database
require('./config/passport')

/*======= Middleware ======*/
app.use(logger('morgan'));
app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'Nemesisx',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(passport.initialize());
app.use(passport.session());


/*======Routes==========*/
app.use('/', routes.auth)
app.use('/user', routes.user)

//route for chat
app.get('/', function(req, res, next) {  
    res.sendFile(__dirname + '/index.html');
});

/* ====== Server bind  ====== */
// bind the application to the port via app.listen
const server = app.listen(PORT, function () {
    console.log(`Nemesis bound and awaiting orders at http://localhost:${PORT}`);
  });

  /*======= socket.io ============*/
const socket = require('socket.io');
const io = socket(server);

app.get('/user', (req, res) => {
  res.sendFile(__dirname + '/user.ejs');
});

io.on('connection', (socket) => {
  console.log('socket connect');
  socket.on('disconnect', () => {
    console.log('socket disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
