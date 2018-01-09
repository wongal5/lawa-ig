const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');

// passport's sole purpose is to authenticate requests
const passport = require('passport');
var expressSession = require('express-session')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// passport middleware use in our express server
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/../client/dist'));


// passport provided methods to serialzie and deserialize user info
// this means every subsequent request will not contain user credentials
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// app.get('/', (req, res) => res.sendStatus(200));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on ${port}!`));

//routes here
app.get('/login/facebook', 
	passport.authenticate('facebook', {scope: 'email'});
})

app.get('/login/facebook/callback', 
	passport.authenticate('facebook', {
		successRedirect: '/home',
		failureRedirect : '/'
	}))


export default app;

