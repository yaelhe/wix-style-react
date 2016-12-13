# RadioGroup component

> [view source](https://github.com/wix/wix-style-react/blob/master/stories/RadioGroup.js)

## RadioGroup Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | number, string | - | - | Selected radio button value |
| onChange | func | - | - | Callback function when user selects a different value |

## RadioGroup.Radio Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | number, string | - | - | Value of this radio button |
| vAlign | top, center | top | - | Positioning of the radio bottom compared to the label |

## Usage

```js
import RadioGroup from 'wix-style-react/RadioGroup';

class ControlledRadioGroup extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.any
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <RadioGroup {...this.props} value={this.state.value} onChange={onChange}>
        <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
        <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
        <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
        <RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio>
     </RadioGroup>
    );
  }
}
