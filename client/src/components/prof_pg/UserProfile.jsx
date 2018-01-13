import React from 'react';
import ProfilePanel from './ProfilePanel.jsx';
import PictureGrid from './PictureGrid.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false
    };
  }

  render() {
    return (
      <div>
        <ProfilePanel 
          user={this.props.user} 
          followUser={e => this.followUser(e)} 
          loggedInUser={this.props.loggedInUser} 
          isFollowed={this.state.following}
          changeFollowersLive={this.props.changeFollowersLive} 
        />
        <PictureGrid user={this.props.user} loggedInUser={this.props.loggedInUser} />
      </div>
    );
  }
} 
  
export default UserProfile;