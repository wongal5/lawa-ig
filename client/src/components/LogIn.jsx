import React from 'react';
import axios from 'axios';


 
class LogIn extends React.Component {
  constructor(props) {
  	super(props);
  
  }

  handleClick(e) {
  	// perform a get request to server
    axios.post('/login/facebook', {
      params: {
        email: this.email.value,
        password: this.password.value
      }
    })
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
<<<<<<< HEAD
        <input></input>
        <input></input>
=======
        <input placeholder='email...'></input>
        <input placeholder='password...'></input>
>>>>>>> going to rebase new semantic ui components to local master
=======
        <input name='email' ref={(input)=> {this.email = input}}placeholder='email...'></input>
        <input name='password' ref={(input) => {this.password=input}} placeholder='password...'></input>
>>>>>>> email and password go from input to server in post request but we get back a 401 error with facebook authorization
        <button onClick={(e)=> this.handleClick(e)}>Login</button>
      </div>
     );
  }
}

export default LogIn;
 
