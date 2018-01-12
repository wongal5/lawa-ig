import React from 'react';
import PictureGrid from './PictureGrid.jsx';
import { Button, Header, List, Image, Divider, Grid, Modal } from 'semantic-ui-react';

const ProfilePanel = (props) => (

  <div className='prof-panel-container'>
    <Grid centered>
      <Grid.Column width={4}>
        <Image circular className='prof-avatar' src={props.user.prof_pic} />
      </Grid.Column>
      <Grid.Column width={9}>
        <Grid.Row className="first-panel-row">
          <Header className='profile-name-title'>{props.user.name}</Header> 
          {
            (props.isFollowed === true)
              ? <Button onClick={props.followUser} className='follow-button' basic>Following</Button>
              : <Button onClick={props.followUser} className='follow-button' primary>Follow</Button>
          }
        </Grid.Row>
        <Grid.Row >
          <span className='profile-sub-data'>
            <span className='profile-sub-data-num'>{props.user.posts.length}</span> posts </span>
          <span className='profile-sub-data'>
            <Modal size="mini" trigger={<span><span className='profile-sub-data-num'>{props.user.followers.length} </span>followers</span>}>
              <Modal.Header>Followers</Modal.Header>
              <Modal.Content scrolling><List divided verticalAlign='middle'>{props.user.followers.map((follower) => {
                return <List.Item><Image avatar src={follower.prof_pic} /><List.Content className="follow">{follower.name}</List.Content><List.Content className="small-button" floated="right"><Button color="blue" size="mini">Following</Button></List.Content></List.Item>;
              })}</List></Modal.Content>
            </Modal></span>
          <span className='profile-sub-data'>
            <Modal size="mini" trigger={<span><span className='profile-sub-data-num'>{props.user.following.length} </span>followers</span>}>
              <Modal.Header>Following</Modal.Header>
              <Modal.Content scrolling><List divided verticalAlign='middle'>{props.user.following.map((following) => {
                return <List.Item><Image avatar src={following.prof_pic} /><List.Content className="follow">{following.name}</List.Content><List.Content className="small-button" floated="right"><Button color="blue" size="mini">Following</Button></List.Content></List.Item>;
              })}</List></Modal.Content>
            </Modal></span>
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