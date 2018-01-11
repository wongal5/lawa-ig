import React from 'react';
import { Menu, Modal, Button, Form, Message } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitFlag: 'not submitted'
    }
    this.insertForm = this.insertForm.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    if (rejectedFiles.length) {
      this.setState({
        submitFlag: 'invalid file'
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
          content="Uhoh! We don't accept that file type. Try again with a .jpg or .png."
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

  render() {
    return (
      <Modal className="upload-modal" size='large' onOpen={this.onOpen.bind(this)} trigger={<Menu.Item name='upload' icon='upload' />}>
        <Dropzone accept="image/jpeg, image/png" onDrop={this.onDrop.bind(this)}> 
          <p>Try dropping some files here, or click to select files to upload.</p>
          <p>Only *.jpeg and *.png images will be accepted</p>
        </Dropzone>
        {this.insertForm(this.state.submitFlag)}
      </Modal>
    );
  }
}

module.exports = UploadModal;