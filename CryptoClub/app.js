//To start server use "nodemon start"
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//const models = require('sequelize');
const session = require('express-session');

const routes = require('./routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// set up session (in-memory storage by default)
app.use(session({secret: "This is a big long secret lama string."}));

// Hook up all routes
app.use('/', routes);

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
// const stripe = require('stripe')('sk_test_snbcObWNIGrIyqkQmGeTYnAR');

// (async () => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [{
//       name: 'Crypto Purchase Project',
//       description: 'Wow you got crypto',
//       images: ['https://example.com/t-shirt.png'],
//       amount: 500,
//       currency: 'usd',
//       quantity: 1,
//     }],
//     success_url: 
//     success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
//     cancel_url: 'https://example.com/cancel',
//   });
// })();
// Database connection
/*
models.sequelize.sync().then(function() {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
});
*/
const { User, Wallet, Adress, Comment } = require('./models');

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
