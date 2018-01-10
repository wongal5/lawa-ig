const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// passport's sole purpose is to authenticate requests
const passport = require('passport');
<<<<<<< HEAD
var expressSession = require('express-session')
=======
var expressSession = require('express-session');
const FacebookTokenStrategy = require('passport-facebook-token');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
// const FACEBOOK_APP_ID = '156902491617294';
// const FACEBOOK_APP_SECRET = '4a58ce8ff173a7a10797a973c06586a6';

>>>>>>> can connect to local server but only with hardcoded app id and app secret need to investigate


<<<<<<< HEAD
=======

// configure Facebook Strategy for use by passport
passport.use(new FacebookTokenStrategy({
  clientID: process.env.FB_ID,
  clientSecret: process.env.FB_SECRET,
  callbackURL: "http://localhost:3000/login/facebook/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


// passport provided methods to serialzie and deserialize user info
// this means every subsequent request will not contain user credentials
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// setting up express server
>>>>>>> going to rebase new semantic ui components to local master
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// passport middleware use in our express server
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/../client/dist'));


<<<<<<< HEAD
<<<<<<< HEAD
// passport provided methods to serialzie and deserialize user info
// this means every subsequent request will not contain user credentials
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
=======
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

=======
>>>>>>> can connect to local server but only with hardcoded app id and app secret need to investigate

//routes here
app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login/facebook' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res) {
    res.render('profile', { user: req.user });
>>>>>>> going to rebase new semantic ui components to local master
  });
});

// app.get('/', (req, res) => res.sendStatus(200));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on ${port}!`));

<<<<<<< HEAD
//routes here
app.get('/login/facebook', 
	passport.authenticate('facebook', {scope: 'email'});
})
=======
// export default app;



{/* <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId: '{your-app-id}',
      cookie: true,
      xfbml: true,
      version: '{latest-api-version}'
    });

  FB.AppEvents.logPageView();

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return ;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
>>>>>>> can connect to local server but only with hardcoded app id and app secret need to investigate

app.get('/login/facebook/callback', 
	passport.authenticate('facebook', {
		successRedirect: '/home',
		failureRedirect : '/'
	}))


export default app;

