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

app.get('/usersfollowing', function(req, res) {
  db.getUsersFollowing(1) //change to req.body
    .then((results) => {
      res.json(results.rows.map(item => {return item.followed_user}));
    })
    .catch((err) => {
      console.log('getUsersFollowing had an error', err);
    })
})

app.get('/usersfollowers', function (req, res) {
  db.getUsersFollowers(1) //change to req.body
    .then((results) => {
      res.json(results.rows.map(item => { return item.following_user }));
    })
    .catch((err) => {
      console.log('getUsersFollowers had an error', err);
    })
})

app.get('/feed', function (req, res) {
  db.getAllPosts(1) //change argument to req.body
    .then((results) => {
      let posts = results.rows;
      db.getPostsLiked(1)
        .then((likeResult) => {
          let likedPosts = likeResult.rows.map(result => { return result.post_id });
          posts.forEach(post => {
            console.log('foreach')
            likedPosts.includes(post.post_id) ? post.liked = false : post.liked = true;
          })
          res.json(posts);
        })
      // res.json(results.rows);
    })
    .catch((err) => {
      console.log('feed had an error', err);
    })
})

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LawaGram listening on ${port}!`));