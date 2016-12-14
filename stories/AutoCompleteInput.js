import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import AutoCompleteInput from '../src/AutoCompleteInput';
import AutoCompleteInputReadme from '../src/AutoCompleteInput/README.md';

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
      <AutoCompleteInput {...this.props} value={this.state.value} onChange={onChange} onSet={onSet}/>
    );
  }
}

const suggestions = [
  {text: 'First suggestion'},
  {text: 'Second suggestion'},
  {text: 'Third suggestion'},
  {node: <span style={{color: 'red'}}>Node suggestion</span>, text: 'Text of node suggestion'},
  {text: 'Very long suggestion text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
];

const rtlSuggestions = [
  {text: 'אפשרות ראשונה'},
  {text: 'אפשרות שניה'},
  {text: 'אפשרות שלישית'}
];

const autoCompleteItemStyle = {display:'inline-block', padding:'0 5px 250px', width: '200px', lineHeight: '22px'};

storiesOf('1. Inputs', module)
  .add('1.3 AutoCompleteInput', () => (
    <div>
      <Markdown source={AutoCompleteInputReadme}/>

      <h1>Examples</h1>

      <h4>Standard</h4>
      <div>
        <div style={autoCompleteItemStyle} className="ltr">Left to right<ControlledAutoCompleteInput suggestions={suggestions}/></div>
        <div style={autoCompleteItemStyle} className="rtl">Right to left<ControlledAutoCompleteInput suggestions={rtlSuggestions} rtl/></div>
      </div>
    </div>
  ));
