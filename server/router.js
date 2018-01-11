var controller = require('./controller');
var router = require('express').Router();

router.options('/', controller.respondOptions);
router.post('/usersfollowing', controller.usersFollowing); // accepts userId, returns users that userId is following
router.post('/usersfollowers', controller.usersFollowers); // accepts userId, returns users following that userId
router.post('/feed', controller.feed); // accepts userId, return posts from users that user is following, including whether that user has liked those posts

module.exports = router;