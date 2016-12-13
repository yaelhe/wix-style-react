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

storiesOf('Inputs', module)
  .add('AutoCompleteInput', () => (
    <div>
      <Markdown source={AutoCompleteInputReadme}/>

      <h1>Examples</h1>

      <div style={{width: '400px'}}>
        <div>
          <h3>AutoCompleteInput</h3>
          <div className="ltr">
            <ControlledAutoCompleteInput suggestions={suggestions}/>
          </div>
        </div>

        <div>
          <h3>Right to left</h3>
          <div className="ltr">
            <ControlledAutoCompleteInput suggestions={rtlSuggestions} rtl/>
          </div>
        </div>
      </div>
    </div>
  ));
