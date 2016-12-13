# Modal component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| style | blue, red, green | blue | - | |
| isOpen | bool | - | + | Is the modal open or not |
| onCancel | func | - | - | Called when user presses the X on the top bar, or the cancel button on the footer |
| zIndex | number | - | - |  |
| shouldCloseOnOverlayClick | bool | - | - |  |
| onRequestClose | func | - | - |  |
| onAfterOpen | func | - | - |  |

## Usage

```js
import Modal form 'wix-style-react/Modal';
import Button form 'wix-style-react/Button';
import MessageBoxLayout2 form 'wix-style-react/MessageBoxLayout2';

class ControlledModal extends Component {
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
          <MessageBoxLayout2 title="title" confirmText="OK" cancelText="Cancel" onOk={close} onCancel={close}>
              Hello blue world!
          </MessageBoxLayout2>
        </Modal>
      </div>
    );
  }
}
