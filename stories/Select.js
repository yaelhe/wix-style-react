import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Select from '../src/Select';
import SelectReadme from '../src/Select/README.md';

class ControlledSelect extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <Select {...this.props} value={this.state.value} onChange={onChange}/>
    );
  }
}

const options = [
  {value: 0, text: 'Option 1'},
  {value: 1, text: 'Option 2'},
  {value: 2, text: 'Option 3'},
  {value: 3, text: 'Option 4'},
];

const rtlOptions = [
  {value: 0, text: 'אופציה 1'},
  {value: 1, text: 'אופציה 2'},
  {value: 2, text: 'אופציה 3'},
  {value: 3, text: 'אופציה 4'},
];

const reactOptions = [
  {value: 0, text: <span style={{color: 'red'}}>Option 1</span>},
  {value: 1, text: <span style={{color: 'green'}}>Option 2</span>},
  {value: 2, text: <span style={{color: 'blue'}}>Option 3</span>},
  {value: 3, text: <span style={{color: 'brown'}}>Option 4</span>}
];

const selectItemStyle = {display:'inline-block', padding:'0 5px', width: '200px', lineHeight: '22px'};

storiesOf('1. Inputs', module)
  .add('1.2 Select', () => (
    <div>
      <Markdown source={SelectReadme}/>

      <h1>Examples</h1>

      <h4>Select</h4>
      <div>
        <div className="ltr" style={selectItemStyle}>Standard<ControlledSelect value={0} options={options}/></div>
        <div className="rtl" style={selectItemStyle}>Right to left<ControlledSelect value={0} options={rtlOptions}/></div>
      </div>

      <h4>Menu opening to top</h4>
      <div>
        <div className="ltr" style={selectItemStyle}>Standard<ControlledSelect dropDirectionUp value={0} options={options}/></div>
      </div>

      <h4>Placeholder</h4>
      <div>
        <div className="ltr" style={selectItemStyle}>Standard<ControlledSelect placeHolder="Please pick one..." options={options}/></div>
      </div>

      <h4>React elements as options</h4>
      <div>
        <div className="ltr" style={selectItemStyle}>Standard<ControlledSelect value={0} options={reactOptions}/></div>
      </div>
    </div>
  ));
