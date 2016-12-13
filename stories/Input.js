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

const inputItemStyle = {display:'inline-block', padding:'5px', width: '200px'};

storiesOf('Inputs', module)
  .add('Standard', () => (
    <div>
      <Markdown source={InputReadme}/>

      <h1>Examples</h1>

      <h4>Standard</h4>
      <div>
        <div className="ltr" style={inputItemStyle}>Input<ControlledInput/></div>
        <div className="ltr" style={inputItemStyle}>Focus<ControlledInput forceFocus/></div>
        <div className="ltr" style={inputItemStyle}>Hover<ControlledInput forceHover/></div>
        <div className="ltr" style={inputItemStyle}>With placeholder<ControlledInput placeholder="Search..."/></div>
      </div>

      <h4>Error</h4>
      <div>
        <div className="ltr" style={inputItemStyle}>Left to right<ControlledInput error/></div>
        <div className="rtl" style={inputItemStyle}>Right to left<ControlledInput rtl error/></div>
      </div>

      <h4>Unit</h4>
      <div>
        <div className="ltr" style={inputItemStyle}>Left to right<ControlledInput unit="#"/></div>
        <div className="rtl" style={inputItemStyle}>Right to left<ControlledInput rtl unit="$"/></div>
        <div className="ltr" style={inputItemStyle}>With error<ControlledInput error unit="$"/></div>
      </div>

      <h4>Magnifying Glass</h4>
      <div>
        <div className="ltr" style={inputItemStyle}>Left to right<ControlledInput magnifyingGlass/></div>
        <div className="rtl" style={inputItemStyle}>Right to left<ControlledInput rtl magnifyingGlass/></div>
        <div className="ltr" style={inputItemStyle}>With unit<ControlledInput magnifyingGlass unit="$"/></div>
        <div className="ltr" style={inputItemStyle}>With error<ControlledInput magnifyingGlass error/></div>
        <div className="ltr" style={inputItemStyle}>With unit & error<ControlledInput magnifyingGlass error unit="$"/></div>
      </div>

      <h4>Controlled input</h4>
      <div>
        <div className="ltr" style={inputItemStyle}>Shows error for value of "error"<ControlledInput/></div>
      </div>

      <h3>Style: paneltitle</h3>
      <div style={{background: '#3899ec', padding: '20px', width: '400px'}}>
        <div style={{width: '400px'}} className="ltr">
          <Input style="paneltitle"/>
        </div>
      </div>
    </div>
  ));

