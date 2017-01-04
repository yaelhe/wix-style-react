import React, {Component} from 'react';
import DropdownLayout from 'wix-style-react/DropdownLayout';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

const options = [
  {id: 1, value: 'Option 1'},
  {id: 2, value: 'Option 2'},
  {id: 0, value: '-'},
  {id: 3, value: 'Option 3'},
  {id: 'disabled', value: 'Disabled', disabled: true},
  {id: 4, value: 'Option 4'},
];

class ControlledExample extends Component {
  constructor() {
    super();
    this.state = {selectedId: null, show: true};
  }

  render() {
    const onSelect = id => this.setState({selectedId: id});
    const onClose = () => this.setState({selectedId: null});

    const selectedOption = options.find(item => {
      return item.id === this.state.selectedId;
    });

    return (
      <div className="ltr" style={style}> Left to right
        <DropdownLayout options={options} onSelect={onSelect} selectedId={this.state.selectedId} onClose={onClose}/>
        <div style={{padding: '160px 0 16px'}}>{selectedOption ? selectedOption.value : 'Nothing'} is selected</div>
      </div>
    );
  }
}

export default () =>
  <ControlledExample/>;
