var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('hbs')


var indexRouter = require('./routes/index');
var createRouter = require('./routes/create');
var editRouter = require('./routes/edit');
var deleteRouter = require('./routes/delete');
var listRouter =require('./routes/list');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, './templates/views'));
app.set('view engine', 'hbs');

const partialsPath = path.join(__dirname, './templates/partials')
hbs.registerPartials(partialsPath)

const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/createstudent', createRouter);
app.use('/editstudent', editRouter);
app.use('/deletestudent', deleteRouter);
app.use('/liststudent', listRouter);

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

//module.exports = app;
const port = process.env.PORT || 3000;
app.listen(port);

console.log(`listening on ${port}`);