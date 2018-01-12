const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const router = require('./router.js');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');

AWS.config.update({
  accessKeyId: 'AKIAILL7TX3HOMGX7BGA', 
  secretAccessKey: '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', 
  region: 'us-west-1' 
})

const s3 = new AWS.S3();


var params = { Bucket: 'test-bucket-tutorial', Key: 'images/myimage.jpg', ContentType: 'image/jpeg' };

// setting up express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

app.use('/', router);

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LawaGram listening on ${port}!`));

module.exports = app;
