const app = require('./index.js');
const db = require('../database/index.js');

let headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, 
  'Content-Type': 'application/json'
};

module.exports = {

  respondOptions: function(req, res) {
    res.set(headers).sendStatus(200);
  },

  usersFollowing: function(req, res) {
    db.getUsersFollowing(1) //CURRENTLY HARD CODED USER ID, change to req.body
      .then((results) => {
        res.json(results.rows.map(item => { return item.followed_user }));
      })
      .catch((err) => {
        console.log('getUsersFollowing had an error', err);
      })
  },

  usersFollowers: function(req, res) {
    db.getUsersFollowers(1) //CURRENTLY HARD CODED USER ID, change to req.body
      .then((results) => {
        res.json(results.rows.map(item => { return item.following_user }));
      })
      .catch((err) => {
        console.log('getUsersFollowers had an error', err);
      })
  },

  feed: function(req, res) {
    db.getAllPosts(1) //CURRENTLY HARD CODED USER ID, change to req.body
      .then((results) => {
        let posts = results.rows;
        db.getPostsLiked(1)
          .then((likeResult) => {
            let likedPosts = likeResult.rows.map(result => { return result.post_id });
            posts.forEach(post => {
              likedPosts.includes(post.post_id) ? post.liked = false : post.liked = true;
            })
            res.json(posts);
          })
      })
      .catch((err) => {
        console.log('feed had an error', err);
      })
  },

  insertPost: function(req,res) {
    //CURRENTLY HARD CODED post object, change to req.body when using
    db.insertPost({ img: 'some image here', like_count: 0, user_id: 2, caption: 'here is a funny caption', created_at: new Date })
      .then(res.sendStatus(201));
  }
}