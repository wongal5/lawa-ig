import React from 'react';
import { Input, Comment, Container, List, Button, Divider, Header, Image, Modal } from 'semantic-ui-react';
import SingleComment from './SingleComment.jsx';

class CommentsField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: '',
      postComments: []
    };
  }

  addComment() {
    var bodyObj = {
      userId: this.props.loggedInUser.user_id, 
      postId: this.props.post.post_id,
      content: this.state.newComment
    };

    var postConfig = {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(bodyObj)
    };

    fetch('/comment', postConfig);

    var formatted; //into below for live post

    this.liveUpdateComment(content);
  }

  liveUpdateComment(content) {
    
    this.setState({postComments: [...this.state.postComments, ]});
  }

  getComments() {

  }

  onCommentType(e) {
    if (e.charCode === 13) {
      this.submitComment(e.target.value);
    }
    this.setState({newComment: e.target.value});
  }

  render() {
    return (
      <div>
        <Comment.Group minimal>
          {
            this.props.post.comments &&
            this.props.post.comments.map(comment => {
              return <SingleComment comment={comment} />;
            })
          }
        </Comment.Group>
  
        <Modal.Description image className='footer-content'>    
          <Container className='modal-footer-contain'>
            <Divider />
            <Image className="heart-icon" src={this.props.isLiked ? './assets/redheart.png' : './assets/like-icon.png'} onClick={this.props.toggleLike} size='mini' inline/>  
            <Image src="./assets/comment-icon.png" size='mini' inline onClick={() => this.nameInput.focus()}/>                  
            <Header className='likes-text' size='small'>{this.props.likeCount.length} Likes</Header>
            <p className='post-date'> {this.props.post.date} </p>
            <Divider />
            <Input 
              ref={input => this.nameInput = input } 
              className='add-comment-input' 
              focus placeholder='Add a Comment...' 
              onChange={ e => this.onCommentType }
            />
          </Container>
        </Modal.Description>
      </div>
    );
  }
  
};

export default CommentsField;