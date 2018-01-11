const pg = require('pg');

const connection = process.env.DATABASE_URL || 'postgres://localhost:3000/lawadb';
const client = new pg.Client(connection);
client.connect();



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
	client.query('SELECT likes.post_id FROM likes INNER JOIN posts ON posts.post_id = likes.post_id AND\ 
		likes.user_id = (?) WHERE likes.post_id IN (?)', userId, postsIdArray, function (error, results) {
		if (error) {
			console.log('get posts liked fail')
		} else {
			console.log('get posts liked success')
			callback(results);
		}
	});
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
const insertNewLike = function (userId, postId callback) {
	client.query('INSERT into likes (user_id, post_id, created_at) VALUES (?, ?, current_timestamp)', userId, postId, function (error, results) {
		if (error) {
			console.log('insert new lke fail')
		} else {
			console.log('insert new like success')
			callback(results)
		}
	});
}

//get all users following
const getUsersFollowing = function(callback) {
 client.query('', function(error, results) {
 		if (error) {
 			console.log('select all users error')
 		} else {
 			console.log('select all users success')
 			callback(results);
 		}
	});
}

//get user followers
const getUserFollowers = function(user, callback) {
	client.query('', function (error, results) {
		if (error) {
			console.log('select get user followers fail')
		} else {
			console.log('select get user followers success')
			callback(results);
		}
	});
}






//db functions here