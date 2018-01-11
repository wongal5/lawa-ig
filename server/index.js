const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const db = require('../database/index.js');

// setting up express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/following', function(req, res) {
  db.getUsersFollowing(1)
    .then((results) => {
      res.json(results.rows.map(item => {return item.followed_user}));
    })
    .catch((err) => {
      console.log('error!!!', err);
    })
})

app.get('/followers', function (req, res) {
  db.getUsersFollowing(1)
    .then((result) => {
      console.log('getUsersFollowing', );
    })
    .catch((err) => {
      console.log('error!!!', err);
    })
})

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LawaGram listening on ${port}!`));