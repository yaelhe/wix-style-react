# ToggleSwitch component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| checked | bool | false | - | |
| onChange | func | - | - | Callback function when user changes the value of the component |
| size | small, large | large | - | Specifies toggle size |

## Usage

```js
import ToggleSwitch from 'wix-style-react/ToggleSwitch';

class ControlledToggleSwitch extends Component {
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
      <ToggleSwitch {...this.props} checked={this.state.checked} onChange={onChange}/>
    );
  }
}
