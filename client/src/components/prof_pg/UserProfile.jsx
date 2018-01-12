import React from 'react';
import ProfilePanel from './ProfilePanel.jsx';
import PictureGrid from './PictureGrid.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    var isFollowing = this.props.loggedInUser.followers.map(e => e.user_id).includes(this.props.user.user_id);
    this.state = {
      //set default with GET
      following: isFollowing
    };
  }

  followUser(e) {
    //POST this.props.user.username to FOLLOWED table
    this.setState({following: !this.state.following});
  }

  render() {
    return (
      <div>
        <ProfilePanel user={this.props.user} followUser={e => this.followUser(e)} isFollowed={this.state.following} />
        <PictureGrid user={this.props.user} />
      </div>
    );
  }
} 
  
export default UserProfile;