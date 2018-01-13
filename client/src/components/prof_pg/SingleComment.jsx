import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';


const SingleComment = (props) => {
  return (
    <div>
      <Comment>
        <Comment.Content>
          <div className='comment-div'>
            <Comment.Text className='modal-author' as='a'>{props.comment.name}</Comment.Text>
            <Comment.Text className='modal-comment'>{props.comment.text}</Comment.Text>
            {
              props.comment.name === props.loggedInUserName &&
              <Icon 
                className='comment-close-icon' 
                size='small' 
                name='close' 
                floated="right"
                onClick={props.rmComment.bind(null, props.id)}
              />
            }
          </div>
        </Comment.Content>
      </Comment>
    </div>
  );
};

export default SingleComment;