const pg = require('pg');
const path = require('path');
const moment = require('moment');

const connection = {
	host: process.env.DATABASE_URL || 'localhost',
	database: 'lawa_db'
};
// ADD PATH TO DATABASE URL ABOVE

const pool = new pg.Pool(connection);
pool.connect();

//get all users following
const getUsersFollowing = function (userId) {
	return pool.query('SELECT users.user_id, users.name, users.description, users.prof_pic \
	FROM users INNER JOIN followers \
	ON followers.following_user = $1 AND followers.followed_user = users.user_id',
		[userId]);
};

//get user followers
const getUsersFollowers = function (userId) {
	return pool.query('SELECT users.user_id, users.name, users.description, users.prof_pic \
	FROM users INNER JOIN followers \
	ON followers.followed_user = $1 AND followers.following_user = users.user_id',
		[userId]);
};

//get all posts following
const getAllPosts = function (userId) {
	return pool.query('SELECT posts.post_id, posts.img, posts.like_count, posts.user_id, posts.caption, posts.created_at FROM posts \
	INNER JOIN followers ON followers.following_user = $1 AND \
		followers.followed_user = posts.user_id', [userId]);
};

const getPostsLiked = function (userId, postsIdArray) {
	return pool.query('SELECT likes.post_id FROM likes INNER JOIN posts \
	ON posts.post_id = likes.post_id AND likes.user_id = $1',
		[userId]);
};

<<<<<<< HEAD
const insertPost = function (caption, file) {
	const AWSUrl = 'https://s3-us-west-1.amazonaws.com/lawa-ig/images/'
	return pool.query('INSERT INTO posts(img, like_count, user_id, caption, created_at) \
=======
const insertPost = function(post) {
  return pool.query('INSERT INTO posts(img, like_count, user_id, caption, created_at) \
>>>>>>> add page change fn
	VALUES ($1, $2, $3, $4, $5)',
		[AWSUrl + file.originalname.split(' ').join('+'), 0, 1, caption, moment().format()]);
}
//for search and profile change
const getAllUsernames = function () {
	return pool.query('SELECT user_id, name FROM users');
};

const getUserProfile = function (userId) {
	return pool.query('SELECT users.user_id, users.name, users.prof_pic, users.description FROM users \
	WHERE users.user_id = $1',
		[userId]);
};

const getUserPosts = function (usedId) {
	return pool.query('SELECT * FROM posts WHERE user_id = $1', [userId]);
};

const addLikeEntry = function(userId, postId) {
  return pool.query('INSERT INTO likes (user_id, post_id, created_at) VALUES ($1, $2, $3)',
    [userId, postId, moment.format()]);
};

const addFollowEntry = function(followerId, followingId) {
  return pool.query('INSERT INTO followers (followed_user, following_user, created_at) VALUES ($1, $2, $3)',
    [followingId, followerId, moment.format()]);
};

const addCommentEntry = function(userId, postId, text) {
  return pool.query('INSERT INTO comments (user_id, post_id, text, created_at) VALUES ($1, $2, $3, $4)',
    [userId, postId, text, moment.format()]);
};

module.exports = {
  getUsersFollowing,
  getUsersFollowers,
  getAllPosts,
  getPostsLiked,
  insertPost,
  getAllUsernames,
  getUserPosts,
  getUserProfile,
  addLikeEntry,
  addFollowEntry,
  addCommentEntry
};