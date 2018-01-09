import React from 'react';
import axios from 'axios';


 
class LogIn extends React.Component {
  constructor(props) {
  	super(props);
  
  }

  handleClick(e) {
  	// perform a get request to server
  	axios.get('/login/facebook')
  	  .then(function(response) {
  	  	console.log('here is the server response', response);
  	  })
  	  .catch(function(error) {
  	  	console.log('there was an error', error);
  	  });
  }
 

  render() {

    return (
      <div>
      	<h1>Log in with Facebook</h1>
<<<<<<< HEAD
        <input></input>
        <input></input>
=======
        <input placeholder='email...'></input>
        <input placeholder='password...'></input>
>>>>>>> going to rebase new semantic ui components to local master
        <button onClick={(e)=> this.handleClick(e)}>Login</button>
      </div>
     );
  }
}

export default LogIn;
 
