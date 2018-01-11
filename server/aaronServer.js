var allProfileData = require('../database/fakeProfileTableData');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on ${port}!`));

app.post('/profile', (req, res) =>{
	console.log('reqbody is: ', req.body);
    //[changeto] GET * FROM profiles WHERE username=req.body.username
    //FAKE QUERY HERE
    var selectedProf = allProfileData.filter(profile => profile.username === req.body.username)[0];
	res.json(selectedProf);
  });