import React, {Component, PropTypes} from 'react';
import AutoCompleteInput from 'wix-style-react/AutoCompleteInput';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px',
  marginBottom: '350px'
};

const options = [
  {id: '0', value: 'First option'},
  {id: '1', value: 'Second option'},
  {id: '2', value: 'Third option', disabled: true},
  {id: '3', value: 'Fourth option'},
  {id: '4', value: 'Fifth option'},
  {id: '5', value: 'Very long option text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
];

class ControlledAutoCompleteInput extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  constructor() {
    super();
    this.state = {value: ''};
  }

  render() {
    const onChange = event => this.setState({value: event.target.value});
    const onSelect = option => this.setState({value: option.value});
    const predicate = element =>
      this.state.value ?
      element.value.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 :
      true;

    return (
      <AutoCompleteInput {...this.props} options={options.filter(predicate)} value={this.state.value} onChange={onChange} onSelect={onSelect}/>
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <ControlledAutoCompleteInput/>
  </div>;
