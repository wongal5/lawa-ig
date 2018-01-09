import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import PictureGrid from './components/prof_pg/PictureGrid.jsx';
import ModalModalExample from './components/prof_pg/modal.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: ''
    };
=======
import LogIn from './components/LogIn.jsx';
 
class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		loggedIn: false
  	}
>>>>>>> log in component rendering and connected to server
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>React is Live</h1>
        {/* ADD YOUR ONE COMPONENT HERE, BUILD A FOLDER FROM IT */}
        <PictureGrid allPhotos={this.state.photos} />
=======
        <LogIn />
    	<h1>React is Live</h1>
>>>>>>> log in component rendering and connected to server
      </div>
    );
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));