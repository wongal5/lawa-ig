var controller = require('./controller');
var router = require('express').Router();
const multer = require('multer')
var upload = multer();


router.options('/', controller.respondOptions);
router.post('/usersfollowing', controller.usersFollowing); // accepts userId, returns users that userId is following
router.post('/usersfollowers', controller.usersFollowers); // accepts userId, returns users following that userId
router.post('/feed', controller.feed); // accepts userId, return posts from users that user is following, including whether that user has liked those posts
<<<<<<< HEAD
router.post('/post', controller.insertPost);
<<<<<<< HEAD
router.get('/profile', controller.allUserNames); // gets all usernames in db for search -- can be modified to just get following (real ig filters these to the top)
router.post('/profile', controller.currentUserProfile); //gets a neat object will all data needed for profile view
=======
router.post('/upload', upload.single('image'), controller.upload);
>>>>>>> rebase
=======
router.post('/post', upload.single('image'), controller.insertPost);
>>>>>>> progress on upload modal

module.exports = router;