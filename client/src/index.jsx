import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import LogIn from './components/LogIn.jsx';
import UserProfile from './components/prof_pg/UserProfile.jsx';
import AllFeeds from './components/main_feed_pg/all_feed.jsx';

const fakeUserData = {
  'username': 'willputnam12', 
  'photos': [
    'https://cdn.images.express.co.uk/img/dynamic/78/590x/Russia-volcano-888840.jpg',
    'http://www.arenal.net/img/gallery/volcano/2.jpg',
    'https://i.kinja-img.com/gawker-media/image/upload/s--6l4Bf9Wf--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/h98k8gzwa5gou1gmchkj.jpg',
    'http://cdn.cnn.com/cnnnext/dam/assets/170301100404-mount-etna-lava-erupt-volcano-00000000-exlarge-169.jpg',
    'https://sciencetrends-techmakaillc.netdna-ssl.com/wp-content/uploads/2017/11/Mauna-Loa-700x468.jpg',
    'http://i.dailymail.co.uk/i/pix/2015/04/02/11/27377ACF00000578-3022885-The_Colima_volcano_is_regarded_as_one_of_the_most_dangerous_in_M-a-2_1427970366256.jpg',
    'https://cdn.images.express.co.uk/img/dynamic/78/590x/Popocatepetl-878612.jpg',
    'https://www.statisticbrain.com/wp-content/uploads/2012/05/Krakatau-volcano-1.jpeg',
    'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAxNy83NDAvb3JpZ2luYWwva2lsYXVlYS1oYXdhaWktdm9sY2Fuby0xMDAyLTAyLmpwZw=='
  ],
  'followers': [
    'wongal', 'larry123', 'airbear'
  ],
  'following': [
    'strictlyvolcanopics'
  ]
};
import fakeProfileTableData from '../../database/fakeProfileTableData';
import AllFeeds from './components/main_feed_pg/all_feed.jsx';

const fakeUserData = {
  'username': 'willputnam12', 
  'photos': [
    'https://cdn.images.express.co.uk/img/dynamic/78/590x/Russia-volcano-888840.jpg',
    'http://www.arenal.net/img/gallery/volcano/2.jpg',
    'https://i.kinja-img.com/gawker-media/image/upload/s--6l4Bf9Wf--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/h98k8gzwa5gou1gmchkj.jpg',
    'http://cdn.cnn.com/cnnnext/dam/assets/170301100404-mount-etna-lava-erupt-volcano-00000000-exlarge-169.jpg',
    'https://sciencetrends-techmakaillc.netdna-ssl.com/wp-content/uploads/2017/11/Mauna-Loa-700x468.jpg',
    'http://i.dailymail.co.uk/i/pix/2015/04/02/11/27377ACF00000578-3022885-The_Colima_volcano_is_regarded_as_one_of_the_most_dangerous_in_M-a-2_1427970366256.jpg',
    'https://cdn.images.express.co.uk/img/dynamic/78/590x/Popocatepetl-878612.jpg',
    'https://www.statisticbrain.com/wp-content/uploads/2012/05/Krakatau-volcano-1.jpeg',
    'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAxNy83NDAvb3JpZ2luYWwva2lsYXVlYS1oYXdhaWktdm9sY2Fuby0xMDAyLTAyLmpwZw=='
  ],
  'followers': [
    'wongal', 'larry123', 'airbear'
  ],
  'following': [
    'strictlyvolcanopics'
  ]
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false, 
      allUsernames: [], //[MUST HAVE]for the dynamic search component -> [NICE TO HAVE] replace with API calls
      loggedInUser: '', //should be an object with data for logged in user
      onPageForUser: fakeProfileTableData[0], //should be an object with user data
      //****************************************************************************/
      currentPg: 'feed' //<=CHANGE THIS VALUE TO RENDER AND WORK ON YOUR PAGE
      //****************************************************************************/
    };
  }

  //initialize username data for autocomplete search
  // componentDidMount(){
  //   this.getAllUserNames();
  // }

  // getAllUserNames(){
  //   //GET retrieves all profiles
  //   fetch('/profile')
  //   .then(data => data.json())
  //   .then(jsondata => this.setState({allUsernames: jsondata}))
  //   .catch(err => console.log('error fetching allprofiles'));
  // }

  changeUser(username) {
    //get a specific user's profile - triggered by navbar search
    var bodyObj = {username: username};
    var postConfig = {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(bodyObj)
    };
    fetch('/profile', postConfig)
      .then(data => data.json())
      .then(userDataObj => this.setState({onPageForUser: userDataObj}));
  }

  pageRouter(currentPg) {
    if (currentPg === 'user_profile') {
      return (
        <div>
          <NavBar allUsers={this.state.allUsernames} changeUser={e => this.changeUser(e)}/> {/* Albert */}
          <UserProfile user={this.state.onPageForUser} />
        </div>
      );
    } else if (currentPg === 'login_page') {
      return (
        <LogIn /> //(WILL)
      );
    } else if (currentPg === 'feed') {
      return (
        <div>
          <NavBar allUsers={this.state.allUsernames} changeUser={e => this.changeUser(e)}/> {/* Albert */}
          <AllFeeds data={this.state.onPageForUser} /> {/*Larry*/}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {
          this.pageRouter(this.state.currentPg)
        }
      </div>
    );
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));