import React from 'react';
import { Comment } from 'semantic-ui-react';


const SingleComment = (props) => {
  return (
    <div>
      <Comment>
        <Comment.Content>
          <div className='comment-div'>
            <Comment.Text className='modal-author' as='a'>{props.comment.user}</Comment.Text>
            <Comment.Text className='modal-comment'>{props.comment.text}</Comment.Text>
          </div>
        </Comment.Content>
      </Comment>
    </div>
  );
};

export default SingleComment;