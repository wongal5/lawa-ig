import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './components/LogIn.jsx';
import PictureGrid from './components/prof_pg/PictureGrid.jsx';
import ModalModalExample from './components/prof_pg/modal.jsx';

const fakeUserData = {
  'username': 'willputnam12', 
  'photos': [
    'https://cdn.images.express.co.uk/img/dynamic/78/590x/Russia-volcano-888840.jpg',
    'http://www.arenal.net/img/gallery/volcano/2.jpg',
    'https://i.kinja-img.com/gawker-media/image/upload/s--6l4Bf9Wf--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/h98k8gzwa5gou1gmchkj.jpg',
    'http://cdn.cnn.com/cnnnext/dam/assets/170301100404-mount-etna-lava-erupt-volcano-00000000-exlarge-169.jpg',
    'https://sciencetrends-techmakaillc.netdna-ssl.com/wp-content/uploads/2017/11/Mauna-Loa-700x468.jpg',
    'https://spaceplace.nasa.gov/review/volcanoes2/volcano-1.en.jpg',
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
      loggedInUser: '', //should be an object with data for logged in user
      onPageForUser: fakeUserData, //should be an object with user data
      //****************************************************************************/
      currentPg: 'user_profile' //<=CHANGE THIS VALUE TO RENDER AND WORK ON YOUR PAGE
      //****************************************************************************/
    };
  }

  pageRouter(currentPg) {
    if (currentPg === 'user_profile') {
      return (
      //<NavBar /> (ALBERT)
        <PictureGrid user={this.state.onPageForUser} /> //(AARON)
      );
    } else if (currentPg === 'login_page') {
      return (
        <LogIn /> //(WILL)
      );
    } else if (currentPg === 'feed') {
      return (
      //<NavBar /> (ALBERT)
        <div></div> //<Feed /> (LARRY)
      );
    }
  }

  render() {
    return (
      <div>
        <h1>React is Live</h1>
        {
          this.pageRouter(this.state.currentPg)
        }
      </div>
    );
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));