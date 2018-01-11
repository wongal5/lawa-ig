const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');





// setting up express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.use(express.static(__dirname + '/../client/dist'));



let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on ${port}!`));