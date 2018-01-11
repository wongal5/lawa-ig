const pg = require('pg');
const path = require('path');

const connection = {
	host: process.env.DATABASE_URL || 'localhost',
	database: 'lawa_db'
}
// ADD PATH TO DATABASE URL ABOVE

const client = new pg.Pool(connection);
client.connect();

//get all users following
const getUsersFollowing = function(userId, callback) {
	return client.query(`SELECT followed_user FROM followers WHERE following_user = ${userId}`);
}

//get user followers
const getUsersFollowers = function(userId, callback) {
	var query = client.query("SELECT following_user FROM followers WHERE followed_user = 1");
	query.then(res => {
		console.log(res);
	})
		.catch(err=> {
			console.log('error', err);
		})
	// client.query(`SELECT following_user FROM followers WHERE followed_user = $1`, [userId], function (error, results) {
	// 	if (error) {
	// 		console.log('select get user followers fail')
	// 	} else {
	// 		console.log('select get user followers success')
	// 		callback(results);
	// 	}
	// })
}

//get all posts following
const getAllPosts = function (userId, callback) {
	client.query('SELECT posts.post_id, posts.img, posts.like_count, posts.user_id, posts.caption, posts.created_at FROM \
		posts INNER JOIN followers ON followers.following_user = (?) AND \
		followers.followed_user = posts.user_id', userId, function (error, results) {
		if (error) {
			console.log('select all posts fail')
		} else {
			console.log('select all posts success')
			callback(results);
		}
	});
}

const getPostsLiked = function (userId, postsIdArray, callback) {
	client.query('SELECT likes.post_id FROM likes INNER JOIN posts ON posts.post_id = likes.post_id AND likes.user_id = (?) WHERE likes.post_id IN (?)', userId, postsIdArray, function (error, results) {
		if (error) {
			console.log('get posts liked fail')
		} else {
			console.log('get posts liked success')
			callback(results);
		}
	});
}

//get user following

//get post likes

//get like number


module.exports = {
	getUsersFollowing,
	getUsersFollowers,
	getAllPosts,
	getPostsLiked
}