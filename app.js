var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lien_he_router = require('./routes/lien_he.routes');
var danh_muc_router = require('./routes/danh_muc.routes');
var dich_vu_router = require('./routes/dich_vu.routes');
var san_pham_router = require('./routes/san_pham.routes');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://himon:Ao123456@himonstudio-tmpcs.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }).then(
  () => {
    console.log("CONNECTION DATABASE MONGGO SUCCESS.");
  },
  err => {
    console.log(`Connect failed. Error: ${err}`);
  }
);
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/server',lien_he_router,danh_muc_router,dich_vu_router,san_pham_router);

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
