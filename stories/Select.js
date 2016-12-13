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

const reactOptions = [
  {value: 0, text: <span style={{color: 'red'}}>Option 1</span>},
  {value: 1, text: <span style={{color: 'green'}}>Option 2</span>},
  {value: 2, text: <span style={{color: 'blue'}}>Option 3</span>},
  {value: 3, text: <span style={{color: 'yellow'}}>Option 4</span>}
];

storiesOf('Inputs', module)
  .add('Select', () => (
    <div>
      <Markdown source={SelectReadme}/>

      <h1>Examples</h1>

      <div>
        <h3>Select</h3>
        <ControlledSelect value={0} placeHolder="Please pick one..." options={options}/>
      </div>

      <div>
        <h3>React elements as options</h3>
        <ControlledSelect value={0} placeHolder="Please pick one..." options={reactOptions}/>
      </div>
    </div>
  ));
