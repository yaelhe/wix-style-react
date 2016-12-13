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

storiesOf('Inputs', module)
  .add('Standard', () => (
    <div>
      <Markdown source={InputReadme}/>

      <h1>Examples</h1>

      <div>
        <h3>Input</h3>
        <ControlledInput/>
      </div>

      <div>
        <h3>Focus</h3>
        <ControlledInput forceFocus/>
      </div>

      <div>
        <h3>Hover</h3>
        <ControlledInput forceHover/>
      </div>

      <div>
        <h3>Error</h3>
        <ControlledInput error/>
      </div>

      <div>
        <h3>Magnifying Glass</h3>
        <ControlledInput magnifyingGlass/>
      </div>

      <div>
        <h3>Unit</h3>
        <ControlledInput unit="#"/>
      </div>

      <div>
        <h3>RTL</h3>
        <ControlledInput rtl placeholder="חפש..."/>
      </div>
    </div>
  ));
