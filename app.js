require('dotenv').config();

//module create error redirect
const createError = require('http-errors');
const express = require('express');
//module Cross-origin resource sharing
const cors = require('cors');
//module logger
const logger = require('morgan');
const path = require('path');
//module parser body with express
const bodyParser = require('body-parser');
//require express-session
const expressSession = require('express-session');
//require passport 
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

//require router 
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
//init object express middle
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//use cors 
app.use(cors());
//use cookie session

//use logger
app.use(logger('dev'));
app.use(logger(':method :url :status :response-time ms - :res[content-length]'));
//use bodyParser with type json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//use express session 
app.use(expressSession({
    name:"toannguyen-session",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//set static path with express
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
