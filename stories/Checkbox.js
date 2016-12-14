import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Checkbox from '../src/Checkbox';
import CheckboxReadme from '../src/Checkbox/README.md';

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

const checkboxItemStyle = {display:'inline-block', padding:'0 5px', width: '150px', lineHeight: '22px'};

storiesOf('2. Switches', module)
  .add('2.2 Checkbox', () => (
    <div>
      <Markdown source={CheckboxReadme}/>

      <h1>Examples</h1>

      <h4>Left to right</h4>
      <div>
        <div className="ltr" style={checkboxItemStyle}>Standard<br/><ControlledCheckbox>Some text</ControlledCheckbox></div>
        <div className="ltr" style={checkboxItemStyle}>Checked<br/><ControlledCheckbox checked>Some text</ControlledCheckbox></div>
        <div className="ltr" style={checkboxItemStyle}>Disabled<br/><ControlledCheckbox disabled>Some text</ControlledCheckbox></div>
        <div className="ltr" style={checkboxItemStyle}>Disabled and checked<br/><ControlledCheckbox disabled checked>Some text</ControlledCheckbox></div>
      </div>

      <h4>Right to left</h4>
      <div>
        <div className="rtl" style={checkboxItemStyle}>Standard<br/><ControlledCheckbox rtl>טקסט בעברית</ControlledCheckbox></div>
        <div className="rtl" style={checkboxItemStyle}>Checked<br/><ControlledCheckbox rtl checked>טקסט בעברית</ControlledCheckbox></div>
        <div className="rtl" style={checkboxItemStyle}>Disabled<br/><ControlledCheckbox rtl disabled>טקסט בעברית</ControlledCheckbox></div>
        <div className="rtl" style={checkboxItemStyle}>Disabled and checked<br/><ControlledCheckbox rtl disabled checked>טקסט בעברית</ControlledCheckbox></div>
      </div>
    </div>
  ));
