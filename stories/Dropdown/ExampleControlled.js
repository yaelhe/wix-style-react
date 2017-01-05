import React from 'react';
import Dropdown from 'wix-style-react/Dropdown';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px',
  marginBottom: '350px'
};

const options = [
  {id: 0, value: 'Option 1'},
  {id: 1, value: 'Option 2'},
  {id: 2, value: 'Option 3'},
  {id: 3, value: 'Option 4', disabled: true},
  {id: 4, value: 'Option 5'},
];

class ControlledDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(option) {
    this.setState({value: option.value});
  }

  render() {
    return (
      <Dropdown
        options={options}
        value={this.state.value}
        onSelect={this.onSelect}
        placeholder={'Choose an option'}
        />
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <ControlledDropdown/>
  </div>;
