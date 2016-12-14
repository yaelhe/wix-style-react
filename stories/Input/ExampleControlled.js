import React, {Component, PropTypes} from 'react';
import Input from 'wix-style-react/Input';

class ControlledInput extends Component {
  static propTypes = {
    value: PropTypes.bool
  };

  constructor({value = ''}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = event => this.setState({value: event.target.value});

    return (
      <Input {...this.props} error={this.state.value === 'Starwars'} value={this.state.value} onChange={onChange}/>
    );
  }
}

export default () =>
  <div className="ltr">
    <ControlledInput placeholder="This input shows an error for 'Starwars'"/>
  </div>;
