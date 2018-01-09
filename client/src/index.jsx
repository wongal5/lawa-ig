import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './components/LogIn.jsx';
import PictureGrid from './components/prof_pg/PictureGrid.jsx';
import ModalModalExample from './components/prof_pg/modal.jsx';
 
class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		loggedIn: false
  	}
  }
  render() {
    return (
      <div>
        <LogIn />
    	<h1>React is Live</h1>
      </div>
    );
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));