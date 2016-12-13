# Checkbox component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| checked | bool | false | - | |
| disabled | bool | false | - | |
| onChange | func | - | - | Callback function when user changes the value of the component |

## Usage

```js
import Checkbox form 'wix-style-react/Checkbox';

class ControlledCheckbox extends Component {
  static propTypes = {
    checked: PropTypes.bool
  };

  constructor({checked}) {
    super();
    this.state = {checked};
  }

  render() {
    const onChange = () => this.setState({checked: !this.state.checked});

    return (
      <Checkbox {...this.props} checked={this.state.checked} onChange={onChange}/>
    );
  }
}
