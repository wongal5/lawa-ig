import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './components/LogIn.jsx';
import PictureGrid from './components/prof_pg/PictureGrid.jsx';
import ModalModalExample from './components/prof_pg/modal.jsx';
<<<<<<< HEAD
 
=======

const fakeUserData = {
  'username': 'willputnam12', 
  'photos' : [
    
  ]
};

>>>>>>> add view router
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false, //if not, login page
      loggedInUser: '', //should be an object with data for logged in user
      onPageForUser: '', //should be an object with user data
      //****************************************************************************/
      currentPg: 'user_profile' //<=CHANGE THIS VALUE TO RENDER AND WORK ON YOUR PAGE
      //****************************************************************************/
    };
  }

  pageRouter(currentPg) {
    if (currentPg === 'user_profile') {
      return (
      //<NavBar /> (ALBERT's COMPONENT HERE)
        <PictureGrid allPhotos={this.state.photos} />
      );
    } else if (currentPg === 'login_page') {
      return (
        <div></div> //<Login /> (WILL's COMPONENT HERE)
      );
    } else if (currentPg === 'feed') {
      return (
      //<NavBar /> (ALBERT's COMPONENT HERE)
        <div></div> //<Feed /> (LARRY's COMPONENT HERE)
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