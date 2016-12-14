import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import ToggleSwitch from '../src/ToggleSwitch';
import ToggleSwitchReadme from '../src/ToggleSwitch/README.md';

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

const inputSwitchStyle = {display:'inline-block', padding:'0 5px', lineHeight: '10px'};

storiesOf('2. Switches', module)
  .add('2.1 ToggleSwitch', () => (
    <div>
      <Markdown source={ToggleSwitchReadme}/>

      <h1>Examples</h1>

      <h4>Standard</h4>
      <div>
        <div style={inputSwitchStyle}>Default not checked<br/><br/><ControlledToggleSwitch/></div>
        <div style={inputSwitchStyle}>Default checked<br/><br/><ControlledToggleSwitch checked/></div>
      </div>

      <h4>Sizes</h4>
      <div>
        <div style={{...inputSwitchStyle, lineHeight: '12.6px'}}>Small<br/><br/><ControlledToggleSwitch size="small"/></div>
        <div style={inputSwitchStyle}>Large<br/><br/><ControlledToggleSwitch checked size="large"/></div>
      </div>
    </div>
  ));
