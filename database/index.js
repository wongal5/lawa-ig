const pg = require('pg');
const path = require('path');
const moment = require('moment');

const connection = {
	host: process.env.DATABASE_URL || 'localhost',
	database: 'lawa_db'
}
// ADD PATH TO DATABASE URL ABOVE

const pool = new pg.Pool(connection);
pool.connect();

//get all users following
const getUsersFollowing = function(userId) {
	return pool.query('SELECT followed_user FROM followers WHERE following_user = $1', [userId]);
}

//get user followers
const getUsersFollowers = function(userId) {
	return pool.query('SELECT following_user FROM followers WHERE followed_user = $1', [userId]);
}

//get all posts following
const getAllPosts = function (userId) {
	return pool.query('SELECT posts.post_id, posts.img, posts.like_count, posts.user_id, posts.caption, posts.created_at FROM \
		posts INNER JOIN followers ON followers.following_user = $1 AND \
		followers.followed_user = posts.user_id', [userId])
}

const getPostsLiked = function (userId, postsIdArray) {
	return pool.query('SELECT likes.post_id FROM likes INNER JOIN posts \
	ON posts.post_id = likes.post_id AND likes.user_id = $1', 
	[userId])
}

const insertPost = function(post) {
	return pool.query('INSERT INTO posts(img, like_count, user_id, caption, created_at) VALUES ($1, $2, $3, $4, $5)', [post.img, post.like_count, post.user_id, post.caption, moment().format()]);
}


module.exports = {
	getUsersFollowing,
	getUsersFollowers,
	getAllPosts,
	getPostsLiked,
	insertPost
}