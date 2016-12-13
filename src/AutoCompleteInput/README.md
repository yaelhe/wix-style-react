# AutoCompleteInput component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| suggestions | array | - | - | Array of objects to display as suggestions when focused. Objects can include *text* and *node* |
| disabled | bool | false | - | |
| onSet | func | - | - | Callback when the user selects one of the selections. Called with the selection. |

## Usage

```js
import AutoCompleteInput form 'wix-style-react/AutoCompleteInput';

const suggestions = [
  {text: 'First suggestion'},
  {text: 'Second suggestion'},
  {text: 'Third suggestion'},
  {node: <span style={{color: 'red'}}>Node suggestion</span>, text: 'Text of node suggestion'},
  {text: 'Very long suggestion text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
];

class ControlledAutoCompleteInput extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = event => this.setState({value: event.target.value});
    const onSet = value => this.setState({value: value.text});

    return (
      <AutoCompleteInput {...this.props} suggestions={suggestions} value={this.state.value} onChange={onChange} onSet={onSet}/>
    );
  }
}
