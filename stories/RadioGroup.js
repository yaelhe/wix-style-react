import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import RadioGroup from '../src/RadioGroup';
import RadioGroupReadme from '../src/RadioGroup/README.md';

class ControlledRadioGroup extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.any
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <RadioGroup {...this.props} value={this.state.value} onChange={onChange}>
        {this.props.children}
      </RadioGroup>
    );
  }
}

const radioGroupItemStyle = {display:'inline-block', padding:'0 5px', width: '200px', lineHeight: '22px'};

storiesOf('2. Switches', module)
  .add('2.3 RadioGroup', () => (
    <div>
      <Markdown source={RadioGroupReadme}/>

      <h1>Examples</h1>

      <h4>Standard</h4>
      <div className="ltr" style={radioGroupItemStyle}>Left to right
        <ControlledRadioGroup value={1}>
          <div><RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio></div>
          <div><RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio></div>
          <div><RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio></div>
          <div><RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio></div>
        </ControlledRadioGroup>
      </div>

      <div className="rtl" style={radioGroupItemStyle}>Right to left
        <ControlledRadioGroup value={1}>
          <div><RadioGroup.Radio value={1}>אופציה 1</RadioGroup.Radio></div>
          <div><RadioGroup.Radio value={2}>אופציה 2</RadioGroup.Radio></div>
          <div><RadioGroup.Radio value={3}>אופציה 3</RadioGroup.Radio></div>
          <div><RadioGroup.Radio value={4}>אופציה 4</RadioGroup.Radio></div>
        </ControlledRadioGroup>
      </div>

      <h4>vAlign</h4>
      <div className="ltr" style={radioGroupItemStyle}>vAlign center
        <ControlledRadioGroup value={1}>
          <div><RadioGroup.Radio vAlign="center" value={1}><div>Option 1</div><small>best option</small></RadioGroup.Radio></div>
          <div><RadioGroup.Radio vAlign="center" value={2}><div>Option 2</div><small>Also pretty good option</small></RadioGroup.Radio></div>
        </ControlledRadioGroup>
      </div>

      <div className="ltr" style={radioGroupItemStyle}>vAlign top
        <ControlledRadioGroup value={1}>
          <div><RadioGroup.Radio vAlign="top" value={1}><div>Option 1</div><small>best option</small></RadioGroup.Radio></div>
          <div><RadioGroup.Radio vAlign="top" value={2}><div>Option 2</div><small>Also pretty good option</small></RadioGroup.Radio></div>
        </ControlledRadioGroup>
      </div>
    </div>
  ));
