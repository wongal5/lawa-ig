import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import LogIn from './components/LogIn.jsx';
import UserProfile from './components/prof_pg/UserProfile.jsx';
import fakeProfileTableData from '../../database/fakeProfileTableData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false, 
      allUsernames: [], //[MUST HAVE]for the dynamic search component -> [NICE TO HAVE] replace with API calls
      loggedInUser: '', //should be an object with data for logged in user
      onPageForUser: fakeProfileTableData[0], //should be an object with user data
      //****************************************************************************/
      currentPg: 'user_profile' //<=CHANGE THIS VALUE TO RENDER AND WORK ON YOUR PAGE
      //****************************************************************************/
    };
  }

  //initialize username data for autocomplete search
  componentDidMount(){
    this.getAllUserNames();
  }

  getAllUserNames(){
    //GET retrieves all profiles
    fetch('/profile')
    .then(data => data.json())
    .then(jsondata => this.setState({allUsernames: jsondata}))
    .catch(err => console.log('error fetching allprofiles'));
  }

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
          <NavBar allUsers={this.state.allUsernames} changeUser={e => this.changeUser(e)} returnHome={e => this.returnHome(e)}/> {/* Albert */}
          <div></div> {/* <Feed /> Larry */}
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