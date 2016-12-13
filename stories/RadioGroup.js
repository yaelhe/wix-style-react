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

storiesOf('Switches', module)
  .add('RadioGroup', () => (
    <div>
      <Markdown source={RadioGroupReadme}/>

      <h1>Examples</h1>

      <div style={{width: '400px'}}>
        <div>
          <h3>RadioGroup</h3>
          <div className="ltr">
            <ControlledRadioGroup value={1}>
              <div><RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio></div>
              <div><RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio></div>
              <div><RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio></div>
              <div><RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio></div>
            </ControlledRadioGroup>
          </div>
        </div>

        <div>
          <h3>Right to left</h3>
          <div className="rtl">
            <ControlledRadioGroup value={2}>
              <div><RadioGroup.Radio value={1}>אופציה 1</RadioGroup.Radio></div>
              <div><RadioGroup.Radio value={2}>אופציה 2</RadioGroup.Radio></div>
              <div><RadioGroup.Radio value={3}>אופציה 3</RadioGroup.Radio></div>
              <div><RadioGroup.Radio value={4}>אופציה 4</RadioGroup.Radio></div>
            </ControlledRadioGroup>
          </div>
        </div>

        <div>
          <h3>vAlign center</h3>
          <div className="ltr">
            <ControlledRadioGroup value={0}>
              <div><RadioGroup.Radio vAlign="center" value={1}><div>Option 1</div><small>best option</small></RadioGroup.Radio></div>
              <div><RadioGroup.Radio vAlign="center" value={2}><div>Option 2</div><small>Also pretty good option</small></RadioGroup.Radio></div>
            </ControlledRadioGroup>
          </div>
        </div>

        <div>
          <h3>vAlign top</h3>
          <div className="ltr">
            <ControlledRadioGroup value={0}>
              <div><RadioGroup.Radio vAlign="top" value={1}><div>Option 1</div><small>best option</small></RadioGroup.Radio></div>
              <div><RadioGroup.Radio vAlign="top" value={2}><div>Option 2</div><small>Also pretty good option</small></RadioGroup.Radio></div>
            </ControlledRadioGroup>
          </div>
        </div>
      </div>
    </div>
  ));
