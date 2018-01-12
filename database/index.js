const pg = require('pg');
const path = require('path');
const moment = require('moment');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');

AWS.config.update({
  accessKeyId: 'AKIAILL7TX3HOMGX7BGA',
  secretAccessKey: '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',
  region: 'us-west-1'
})

const s3 = new AWS.S3();

const AWSUrl = 'https://s3-us-west-1.amazonaws.com/lawa-ig/images/'

const connection = {
  host: process.env.DATABASE_URL || 'localhost',
  database: 'lawa_db'
}
// ADD PATH TO DATABASE URL ABOVE

const pool = new pg.Pool(connection);
pool.connect();

//get all users following
const getUsersFollowing = function(userId) {
	return pool.query('SELECT users.user_id, users.name, users.description, users.prof_pic \
	FROM users INNER JOIN followers \
	ON followers.following_user = $1 AND followers.followed_user = users.user_id', 
	[userId]);
}

//get user followers
const getUsersFollowers = function(userId) {
	return pool.query('SELECT users.user_id, users.name, users.description, users.prof_pic \
	FROM users INNER JOIN followers \
	ON followers.followed_user = $1 AND followers.following_user = users.user_id', 
	[userId]);
}

//get all posts following
const getAllPosts = function (userId) {
	return pool.query('SELECT posts.post_id, posts.img, posts.like_count, posts.user_id, posts.caption, posts.created_at FROM posts \
	INNER JOIN followers ON followers.following_user = $1 AND \
		followers.followed_user = posts.user_id', [userId])
}

const getPostsLiked = function (userId, postsIdArray) {
  return pool.query('SELECT likes.post_id FROM likes INNER JOIN posts \
	ON posts.post_id = likes.post_id AND likes.user_id = $1', 
  [userId])
}

//gets the total like count of a particular post
const getLikeCountOfPost = function (postId, callback) {
	client.query('SELECT like_count FROM posts WHERE post_id = (?)', postId, function (error, results) {
		if (error) {
			console.log('get like count fail')
		} else {
			console.log('get like count success')
			callback(results);
		}
	});
}

//updates the like count for a particular post
const updatelikeCountForPost = function(postId, callback) {
	client.query('UPDATE likes SET like_count = like_count+1 WHERE post_id = (?)', postId, function (error, results) {
		if (error) {
			console.log('insert like for post fail')
		} else {
			console.log('insert like for post success')
			callback(results);
		}
	});
}

//insert a new like into like table
const insertNewLike = function (userId, postId, callback) {
	client.query('INSERT into likes (user_id, post_id, created_at) VALUES (?, ?, current_timestamp)', userId, postId, function (error, results) {
		if (error) {
			console.log('insert new lke fail')
		} else {
			console.log('insert new like success')
			callback(results)
		}
	});
}

const insertPost = function(caption, file) {
  s3.putObject({
    Bucket: 'lawa-ig',
    Key: 'images/' + file.originalname,
    Body: file.buffer,
    ACL: 'public-read', // your permisions  
  }, (err, result) => {
    console.log(result);
  })
	return pool.query('INSERT INTO posts(img, like_count, user_id, caption, created_at) \
	VALUES ($1, $2, $3, $4, $5)',
  [AWSUrl + file.originalname.split(' ').join('+'), 0, 1, caption, moment().format()]);
}



module.exports = {
	getUsersFollowing,
	getUsersFollowers,
	getAllPosts,
	getPostsLiked,
	insertPost 
}