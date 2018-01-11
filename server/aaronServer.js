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
    //[changeto] GET * FROM profiles WHERE username=req.body.username
    var selectedProf = allProfileData.filter(profile => profile.username === req.body.username)[0];
	res.json(selectedProf);
  });

app.get('/profile', (req, res) => {

    var profiles = allProfileData.map(profile => {
        return {'name': profile.name, 'label': profile.username}
    });

    console.log('sending profiles: ', profiles);
    res.json(profiles);
})