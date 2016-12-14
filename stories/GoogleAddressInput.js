import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import GoogleAddressInput from '../src/GoogleAddressInput';
import GoogleAddressInputReadme from '../src/GoogleAddressInput/README.md';
import clients from '../src/clients';

class ControlledGoogleAddressInput extends Component {
  static propTypes = {
    result: PropTypes.bool
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onSet = event => event && this.setState({value: event.originValue});
    const onChange = event => event && this.setState({value: event.target.value});

    return (
      <GoogleAddressInput
        {...this.props}
        value={this.state.value}
        onSet={onSet}
        onChange={onChange}
        placeholder="Enter Address..."
        Client={clients.GoogleMapsClient}
        />
    );
  }
}

const googleAddressInputItemStyle = {display:'inline-block', padding:'0 5px 250px', width: '400px', lineHeight: '22px'};

storiesOf('1. Inputs', module)
  .add('1.5 GoogleAddressInput', () => (
    <div>
      <Markdown source={GoogleAddressInputReadme}/>

      <h1>Examples</h1>

      <h4>Standard</h4>
      <div>
        <div style={googleAddressInputItemStyle} className="ltr">Input should contain address, and be editable.<ControlledGoogleAddressInput countryCode="US"/></div>
        <div style={googleAddressInputItemStyle} className="ltr">With default<ControlledGoogleAddressInput countryCode="US" defaultValue="Default Address"/></div>
      </div>
    </div>
  ));
