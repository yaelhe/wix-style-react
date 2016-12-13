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
      <Input error={this.state.value === 'error'} {...this.props} value={this.state.value} onChange={onChange}/>
    );
  }
}

storiesOf('Inputs', module)
  .add('Standard', () => (
    <div>
      <Markdown source={InputReadme}/>

      <h1>Examples</h1>

      <div style={{width: '400px'}}>
        <h3>Controlled input (shows error for value of "error")</h3>
        <div className="ltr">
          <ControlledInput/>
        </div>

        <div>
          <h3>Error</h3>
          <h4>Left to right</h4>
          <div className="ltr">
            <ControlledInput error/>
          </div>

          <h4>Right to left</h4>
          <div className="rtl">
            <ControlledInput rtl error/>
          </div>
        </div>

        <div>
          <h3>Unit</h3>
          <h4>Left to right</h4>
          <div className="ltr">
            <ControlledInput unit="$"/>
          </div>

          <h4>Right to left</h4>
          <div className="rtl">
            <ControlledInput rtl unit="$"/>
          </div>
        </div>

        <div>
          <h3>Unit and Error together</h3>
          <h4>Left to right</h4>
          <div className="ltr">
            <ControlledInput unit="$" error/>
          </div>

          <h4>Right to left</h4>
          <div className="rtl">
            <ControlledInput rtl unit="$" error/>
          </div>
        </div>

        <div>
          <h3>Magnifying Glass</h3>
          <h4>Left to right</h4>
          <div className="ltr">
            <ControlledInput magnifyingGlass/>
            <ControlledInput magnifyingGlass unit="$"/>
            <ControlledInput magnifyingGlass error/>
            <ControlledInput magnifyingGlass error unit="$"/>
          </div>

          <h4>Right to left</h4>
          <div className="rtl">
            <ControlledInput rtl magnifyingGlass/>
            <ControlledInput rtl magnifyingGlass unit="$"/>
            <ControlledInput rtl magnifyingGlass error/>
            <ControlledInput rtl magnifyingGlass error unit="$"/>
          </div>
        </div>

        <div>
          <h3>Focus (with forceFocus)</h3>
          <div className="ltr">
            <ControlledInput forceFocus/>
          </div>
        </div>

        <div>
          <h3>Hover (with forceHover)</h3>
          <div className="ltr">
            <ControlledInput forceHover/>
          </div>
        </div>

        <div>
          <h3>Style: paneltitle</h3>
          <div style={{background: '#3899ec', padding: '20px', width: '400px'}}>
            <div style={{width: '400px'}} className="ltr">
              <Input style="paneltitle"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

// const inputRowStyle = {display:'flex', alignItems:'center', justifyContent:'space-between', width: '850px'};
// const inputItemStyle = {display:'flex', alignItems:'center', width: '250px', whiteSpace: 'nowrap'};

// <h4>Standard</h4>
// <div style={inputRowStyle}>
//   <div style={inputItemStyle}>Input:&nbsp;<ControlledInput/></div>
//   <div style={inputItemStyle}>Focus:&nbsp;<ControlledInput forceFocus/></div>
//   <div style={inputItemStyle}>Hover:&nbsp;<ControlledInput forceHover/></div>
// </div>

// <h4>Error</h4>
// <div style={inputRowStyle}>
//   <div style={inputItemStyle}>Error:&nbsp;<ControlledInput error/></div>
// </div>

// <h4>Magnifying Glass</h4>
// <div style={inputRowStyle}>
//   <div style={inputItemStyle}>Magnifying glass:&nbsp;<ControlledInput magnifyingGlass/></div>
// </div>

// <h4>Unit</h4>
// <div style={{...inputRowStyle, width: '545px'}}>
//   <div style={inputItemStyle}>Number:&nbsp;<ControlledInput unit="#"/></div>
//   <div style={inputItemStyle}>Dollar:&nbsp;<ControlledInput unit="$"/></div>
// </div>

// <h4>RTL</h4>
// <div style={inputRowStyle}>
//   <div style={inputItemStyle}>Dollar:&nbsp;<ControlledInput rtl placeholder="חפש..."/></div>
