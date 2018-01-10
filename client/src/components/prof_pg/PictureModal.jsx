import React from 'react';
import CommentsField from './CommentsField.jsx';
import { Input, Rating, Comment, Container, Divider, Button, Header, Image, Modal } from 'semantic-ui-react';

const PicModal = (props) => (
  <Modal size='large' trigger={<Image src={props.img} />}>
    <Modal.Content image className='pic-modal'>
      <Image className='modal-img' src={props.img} />
      <Modal.Description className='modal-description-field'>
        <Container className='modal-header-contain'>
          <Image avatar size='mini' inline src={props.user.avatar} floated='left' />
          <Header className='uname-modal' size='small' floated='left'>{props.user.username}</Header>
        </Container>
        <Divider className='top-div-modal'/>

        <CommentsField user={props.user} post={props.post}/>

      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default PicModal;