import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './components/LogIn.jsx';
import PictureGrid from './components/prof_pg/PictureGrid.jsx';
import ModalModalExample from './components/prof_pg/modal.jsx';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false, //if not, login page
      loggedInUser: '', //should be an object with data for logged in user
      onPageForUser: '', //should be an object with user data
      currentPg: 'user_profile' //page in site index
    };
  }
  render() {
    return (
      <div>
        <h1>React is Live</h1>
        {this.state.page === 'user_profile' || 'self_profile' && 
          <PictureGrid allPhotos={this.state.photos} />
        }
      </div>
    );
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));