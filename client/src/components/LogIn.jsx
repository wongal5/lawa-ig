import React from 'react';
import axios from 'axios';



class LogIn extends React.Component {
  constructor(props) {
    super(props);

  }

  handleClick(e) {
    // perform a get request to server
    axios.get('/login/facebook', {
      params: {
        email: this.email.value,
        password: this.password.value
      }
    })
      .then(function (response) {
        console.log('here is the server response', response);
      })
      .catch(function (error) {
        console.log('there was an error', error);
      });
  }


  render() {

    return (
      <div>
        <a href="https://www.facebook.com/v2.8/dialog/oauth?client_id=156902491617294&redirect_uri=http%3A%2F%2Flocalhost:3000%2Flogin%2Ffacebook%2Fcallback">Log in with Facebook</a>
        <input name='email' ref={(input) => { this.email = input }} placeholder='email...'></input>
        <input name='password' ref={(input) => { this.password = input }} placeholder='password...'></input>
        <button href="https://www.facebook.com/v2.8/dialog/oauth?client_id=156902491617294'&redirect_uri=http%3A%2F%2Flocalhost:3000%2Flogin%2Ffacebook%2Fcallback">Login</button>
      </div>
    );
  }
}

export default LogIn;