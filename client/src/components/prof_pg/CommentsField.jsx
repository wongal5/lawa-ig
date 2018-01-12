import React from 'react';
import { Input, Comment, Container, List, Button, Divider, Header, Image, Modal } from 'semantic-ui-react';
import SingleComment from './SingleComment.jsx';

const CommentsField = (props) => {
  return (
    <div>
      <Comment.Group minimal>
        {
          props.post.comments &&
          props.post.comments.map(comment => {
            return <SingleComment comment={comment} />;
          })
        }
      </Comment.Group>

      <Modal.Description image className='footer-content'>    
        <Container className='modal-footer-contain'>
          <Divider />
          <Image className="heart-icon" src={props.isLiked ? './assets/redheart.png' : './assets/like-icon.png'} onClick={props.toggleLike} size='mini' inline/>  
          <Image src="./assets/comment-icon.png" size='mini' inline/>                  
<<<<<<< HEAD
          <Header className='likes-text' size='small'>{props.likeCount} Likes</Header>
=======
          <Modal size="mini" trigger={<Header className='likes-text' size='small'>{props.post.like_count} Likes</Header>}>
            <Modal.Header>Likes</Modal.Header>
            <Modal.Content scrolling><List divided verticalAlign='middle'>{props.user.followers.map((follower) => {
              return <List.Item key={follower.user_id}><Image avatar src={follower.prof_pic} /><List.Content className="follow">{follower.name}</List.Content><List.Content className="small-button" floated="right"><Button color="blue" size="mini">Following</Button></List.Content></List.Item>;
            })}</List></Modal.Content>
          </Modal>
>>>>>>> added modal ui when clicking on number of likes
          <p className='post-date'> {props.post.date} </p>
          <Divider />
          <Input className='add-comment-input' focus placeholder='Add a Comment...' />
        </Container>
      </Modal.Description>
    </div>
  );
};

export default CommentsField;