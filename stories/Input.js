import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Input from '../src/Input';
import InputReadme from '../src/Input/README.md';

class ControlledInput extends Component {
  static propTypes = {
    value: PropTypes.bool
  };

  constructor({value = ''}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = event => {
      this.setState({value: event.target.value});
    };

    return (
      <Input {...this.props} value={this.state.value} onChange={onChange}/>
    );
  }
}

const inputRowStyle = {display:'flex', alignItems:'center', justifyContent:'space-between', width: '850px'};
const inputItemStyle = {display:'flex', alignItems:'center', width: '250px', whiteSpace: 'nowrap'};

storiesOf('Inputs', module)
  .add('Standard', () => (
    <div>
      <Markdown source={InputReadme}/>

      <h1>Examples</h1>

      <h4>Standard</h4>
      <div style={inputRowStyle}>
        <div style={inputItemStyle}>Input:&nbsp;<ControlledInput/></div>
        <div style={inputItemStyle}>Focus:&nbsp;<ControlledInput forceFocus/></div>
        <div style={inputItemStyle}>Hover:&nbsp;<ControlledInput forceHover/></div>
      </div>

      <h4>Error</h4>
      <div style={inputRowStyle}>
        <div style={inputItemStyle}>Error:&nbsp;<ControlledInput error/></div>
      </div>

      <h4>Magnifying Glass</h4>
      <div style={inputRowStyle}>
        <div style={inputItemStyle}>Magnifying glass:&nbsp;<ControlledInput magnifyingGlass/></div>
      </div>

      <h4>Unit</h4>
      <div style={{...inputRowStyle, width: '545px'}}>
        <div style={inputItemStyle}>Number:&nbsp;<ControlledInput unit="#"/></div>
        <div style={inputItemStyle}>Dollar:&nbsp;<ControlledInput unit="$"/></div>
      </div>

      <h4>RTL</h4>
      <div style={inputRowStyle}>
        <div style={inputItemStyle}>Dollar:&nbsp;<ControlledInput rtl placeholder="חפש..."/></div>
      </div>
    </div>
  ));
