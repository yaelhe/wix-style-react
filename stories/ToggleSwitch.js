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

storiesOf('Switches', module)
  .add('ToggleSwitch', () => (
    <div>
      <Markdown source={ToggleSwitchReadme}/>

      <h1>Examples</h1>

      <div style={{width: '400px'}}>
        <div>
          <h3>ToggleSwitch</h3>
          <div className="ltr">
            <ControlledToggleSwitch/>
            {' '}
            <ControlledToggleSwitch checked/>
          </div>
        </div>

        <div>
          <h3>Sizes</h3>
          <div className="ltr">
            <ControlledToggleSwitch size="small"/>
            {' '}
            <ControlledToggleSwitch size="large" checked/>
          </div>
        </div>
      </div>
    </div>
  ));
