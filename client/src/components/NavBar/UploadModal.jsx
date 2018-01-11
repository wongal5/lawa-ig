import React from 'react';
import { Menu, Modal } from 'semantic-ui-react';

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal size='large' trigger= {<Menu.Item name='upload' icon='upload' />}>
        Stuff in the modal
      </Modal>
    );
  }
}

module.exports = UploadModal;