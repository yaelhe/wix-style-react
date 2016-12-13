import React, {Component, PropTypes} from 'react';
import Input from '../../src/Input';

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
      <Input error={this.state.value === 'Starwars'} {...this.props} value={this.state.value} onChange={onChange}/>
    );
  }
}

export default () =>
  <div style={{width: '400px'}} className="ltr">
    <h3>Controlled input</h3>
    <ControlledInput placeholder="This input shows an error for 'Starwars'"/>
  </div>;
