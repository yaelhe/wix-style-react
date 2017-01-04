import React, {Component, PropTypes} from 'react';
import AutoCompleteInput from 'wix-style-react/AutoCompleteInput';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px',
  marginBottom: '350px'
};

const suggestions = [
  {id: '0', value: 'First suggestion'},
  {id: '1', value: 'Second suggestion'},
  {id: '2', value: 'Third suggestion', disabled: true},
  {id: '3', value: 'Fourth suggestion'},
  {id: '4', value: 'Fifth suggestion'},
  {id: '5', value: 'Very long suggestion text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
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
    const onSelect = value => this.setState({value: value.value});
    const predicate = element =>
      this.state.value ?
      element.value.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 :
      true;

    return (
      <AutoCompleteInput {...this.props} suggestions={suggestions.filter(predicate)} value={this.state.value} onChange={onChange} onSelect={onSelect}/>
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <ControlledAutoCompleteInput/>
  </div>;
