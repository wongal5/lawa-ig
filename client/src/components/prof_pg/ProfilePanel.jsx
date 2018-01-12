import React from 'react';
import PictureGrid from './PictureGrid.jsx';
import { Button, Header, Image, Grid } from 'semantic-ui-react';

const ProfilePanel = (props) => (

  <div className='prof-panel-container'>
    <Grid centered>
      <Grid.Column width={4}>
        <Image circular className='prof-avatar' src={props.user.prof_pic} />
      </Grid.Column>
      <Grid.Column width={9}>
        <Grid.Row className="first-panel-row">
          <Header inline className='profile-name-title'>{props.user.name}</Header> 
          {
            (props.isFollowed === true) 
              ? <Button onClick={props.followUser} className='follow-button' basic>Following</Button>
              : <Button onClick={props.followUser} className='follow-button' primary>Follow</Button> 
          }
        </Grid.Row>
        <Grid.Row >
          <span className='profile-sub-data'> 
            <span className='profile-sub-data-num'>{props.user.posts.length}</span> posts </span> 
          <span className='profile-sub-data'> <span className='profile-sub-data-num'>{props.user.followers.length} </span> followers </span> 
          <span className='profile-sub-data'> <span className='profile-sub-data-num' >{props.user.following.length}</span> following </span>
        </Grid.Row>
        <Grid.Row>
          <div className='header-caption'>
            <span > {props.user.description} </span>            
          </div>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </div>
    
);
  
export default ProfilePanel;