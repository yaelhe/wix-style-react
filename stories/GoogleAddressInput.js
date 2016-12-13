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

storiesOf('Inputs', module)
  .add('GoogleAddressInput', () => (
    <div>
      <Markdown source={GoogleAddressInputReadme}/>

      <h1>Examples</h1>

      <div style={{width: '400px'}}>
        <div>
          <h3>GoogleAddressInput</h3>
          <div className="ltr">
            <ControlledGoogleAddressInput countryCode="US"/>
          </div>
        </div>

        <div>
          <h3>Default value</h3>
          <p>Input should contain address, and be editable.</p>
          <div className="ltr">
            <ControlledGoogleAddressInput countryCode="US" defaultValue="Default Address"/>
          </div>
        </div>
      </div>
    </div>
  ));
