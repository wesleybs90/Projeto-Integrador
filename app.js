const createError = require('http-errors');
const express = require('express');
const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

let ajudaRouter = require('./routes/ajudaRoute');
let cadastroRouter = require('./routes/cadastroRoute');
let enviarProblemaRouter = require('./routes/enviarProblemaRoute');
let mapaRouter = require('./routes/mapaRoute');
let paginaInicialRouter = require('./routes/paginaInicialRoute');
let perfilRouter = require('./routes/perfilRoute');
let saibaMaisRouter = require('./routes/saibaMaisRoute');



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*/images',express.static('public/images'));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/ajuda', ajudaRouter);
app.use('/cadastro', cadastroRouter);
app.use('/login', cadastroRouter);
app.use('/recuperarSenha', cadastroRouter);
app.use('/enviarProblema', enviarProblemaRouter);
app.use('/mapa', mapaRouter);
app.use('/', paginaInicialRouter);
app.use('/perfil', perfilRouter);
app.use('/saibaMais', saibaMaisRouter);


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



app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"))

module.exports = app;
