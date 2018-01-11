import React from 'react';
import { Menu, Modal, Button, Form, Message } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitFlag: 'not submitted',
      uploadedFile: null
    }
    this.insertForm = this.insertForm.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    if (rejectedFiles.length) {
      this.setState({
        submitFlag: 'invalid file'
      })
    } else {
      this.setState({
        submitFlag: 'not submitted',
        uploadedFile: acceptedFiles
      })
      var image = new FormData();
      image.append('image', acceptedFiles[0]);
      axios.post('/upload', image)
        .catch(err => {
          console.log('image post failed', err);
        })
    }
  }

  handleSubmit() {
    this.setState({
      submitFlag: 'submitted'
    })
  }
  
  onOpen() {
    this.setState({
      submitFlag: 'not submitted'
    })
  }

  render() {
    return (
      <Modal className="upload-modal" size='small' onOpen={this.onOpen.bind(this)} trigger={<Menu.Item name='upload' icon='upload' />}>
        <Dropzone accept="image/jpeg, image/png" maxSize={5000000} onDrop={this.onDrop.bind(this)}> 
          <p>Try dropping some files here, or click to select files to upload.</p>
          <p>Only *.jpeg and *.png images will be accepted</p>
        </Dropzone>
        {this.insertForm(this.state.submitFlag)}
      </Modal>
    );
  }

  insertForm(submitFlag) {
    if (submitFlag === 'not submitted') {
      return (<Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Input required placeholder='insert caption here' />
        <Message
          success
          header='Form Completed'
          content="You lavagrammed it up!"
        />
        <Button>Submit</Button>
      </Form>)
    } else if (submitFlag === 'submitted') {
      return (<Form success>
        <Form.Input required placeholder='insert caption here' />
        <Message
          success
          header='Form Completed'
          content="You lavagrammed it up!"
        />
        <Button>Submit</Button>
      </Form>)
    } else if (submitFlag === 'invalid file') {
      return (<Form onSubmit={this.handleSubmit.bind(this)} error>
        <Form.Input required placeholder='insert caption here' />
        <Message
          error
          header='Upload Error'
          content="Uhoh! We don't accept that file type or the file is too big. Please try again with a .jpg or .png under 5MB."
        />
        <Button>Submit</Button>
      </Form>)
    } else {
      return (<Form onSubmit={this.handleSubmit.bind(this)} error>
        <Form.Input required placeholder='insert caption here' />
        <Message
          error
          header='Form Error'
          content="Uhoh! Something went wrong."
        />
        <Button>Submit</Button>
      </Form>)
    }
  }
}

module.exports = UploadModal;