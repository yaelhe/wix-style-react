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
  {value: 3, text: <span style={{color: 'yellow'}}>Option 4</span>}
];

storiesOf('Inputs', module)
  .add('Select', () => (
    <div>
      <Markdown source={SelectReadme}/>

      <h1>Examples</h1>

      <div style={{width: '400px'}}>
        <div>
          <h3>Select</h3>
          <div className="ltr">
            <ControlledSelect value={0} options={options}/>
          </div>
        </div>

        <div>
          <h3>Right to left</h3>
          <div className="rtl">
            <ControlledSelect value={0} options={rtlOptions}/>
          </div>
        </div>

        <div>
          <h3>Menu opening to top</h3>
          <div className="ltr">
            <ControlledSelect dropDirectionUp value={0} options={options}/>
          </div>
        </div>

        <div>
          <h3>Placeholder</h3>
          <div className="ltr">
            <ControlledSelect placeHolder="Please pick one..." options={options}/>
          </div>
        </div>

        <div>
          <h3>React elements as options</h3>
          <div className="ltr">
            <ControlledSelect value={0} options={reactOptions}/>
          </div>
        </div>
      </div>
    </div>
  ));
