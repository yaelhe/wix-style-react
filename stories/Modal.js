import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Modal from '../src/Modal';
import MessageBoxLayout2 from '../src/MessageBox/MessageBoxLayout2';
import Button from '../src/Button';
import ModalReadme from '../src/Modal/README.md';

class ModalWrapper extends Component {
  static propTypes = {
    isOpen: PropTypes.bool
  };

  constructor({isOpen = false}) {
    super();
    this.state = {isOpen};
  }

  render() {
    const setState = state => () => this.setState(state);

    const close = setState({isOpen: false});
    const open = setState({isOpen: true});

    return (
      <div>
        <Button onClick={open} >Open Blue Modal</Button>
        <Modal isOpen={this.state.isOpen} onRequestClose={close}>
          <MessageBoxLayout2 style="blue" title="title" confirmText="OK" cancelText="Cancel" onOk={close} onCancel={close}>
              Hello world!
          </MessageBoxLayout2>
        </Modal>
      </div>
    );
  }
}

storiesOf('5. Others', module)
  .add('5.1 Modal', () => (
    <div>
      <Markdown source={ModalReadme}/>

      <h1>Examples</h1>

      <h4>Modal</h4>
      <div>
        <ModalWrapper/>
      </div>
    </div>
  ));
