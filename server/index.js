const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
<<<<<<< HEAD
const router = require('./router.js');

// setting up express server
=======

// passport's sole purpose is to authenticate requests
const passport = require('passport');
var expressSession = require('express-session');
var strategy = require('passport-facebook-token');



// // configure Facebook Strategy for use by passport
// passport.use(new FacebookTokenStrategy({
//   clientID: process.env.FB_ID,
//   clientSecret: process.env.FB_SECRET,
//   callbackURL: 'http://localhost:3000/auth/facebook/callback'
//   // callbackURL: "https://lawa-ig.herokuapp.com/"
// },
// function (accessToken, refreshToken, profile, cb) {
//   User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));


// // passport provided methods to serialzie and deserialize user info
// // this means every subsequent request will not contain user credentials
// passport.serializeUser(function (user, done) {
//   done(null, user._id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// // setting up express server
>>>>>>> one way profile change working
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

<<<<<<< HEAD
=======
// // passport middleware use in our express server
// app.use(expressSession({ secret: 'mySecretKey', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

>>>>>>> one way profile change working
app.use(express.static(__dirname + '/../client/dist'));

app.use('/', router);

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LawaGram listening on ${port}!`));

<<<<<<< HEAD
module.exports = app;
=======
// //routes here
// app.get('/login/facebook',
//   passport.authenticate('facebook'));

// app.get('/login/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login/facebook' }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function (req, res) {
//     res.render('profile', { user: req.user });
//   });



let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on ${port}!`));

app.post('/profile', (req, res) =>{
	console.log('reqbody is: ', req.body);
	res.status(201).send('success');
  });

module.exports = app;










// const express = require('express');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'));

// app.use(express.static(__dirname + '/../client/dist'));

// // app.get('/', (req, res) => res.sendStatus(200));

// let port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Example app listening on ${port}!`));

// //routes here
// app.get('/login/facebook', function(req, res) {
// 	res.send('Hey there');
// })
>>>>>>> one way profile change working
