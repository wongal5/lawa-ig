import React from 'react';
import { Comment, Container, Divider, Button, Header, Image, Modal } from 'semantic-ui-react';

const PicModal = (props) => (
  <Modal size='large' trigger={<Image src={props.img} />}>
    <Modal.Content image className='pic-modal'>
      <Image className='modal-img' src={props.img} />
      <Modal.Description>
        <Container>
          <Image avatar size='mini' inline src='./assets/fred.png' />
          <Header floated='left'>FredZirdung</Header>
        </Container>
        <Divider />

        <Comment.Group minimal>
          <Comment>
            <Comment.Content>
              <Comment.Author as='a'>Albert</Comment.Author>
              <Comment.Text>How artistic!</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Modal.Description>

    </Modal.Content>
  </Modal>
);

export default PicModal;