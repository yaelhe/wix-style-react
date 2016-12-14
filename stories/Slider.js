import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Slider from '../src/Slider';
import SliderReadme from '../src/Slider/README.md';

class ControlledSlider extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.number)
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <Slider {...this.props} value={this.state.value} onChange={onChange}/>
    );
  }
}

const sliderItemStyle = {padding:'0 5px 55px', width: '500px'};

storiesOf('1. Inputs', module)
  .add('1.4 Slider', () => (
    <div>
      <Markdown source={SliderReadme}/>

      <h1>Examples</h1>

      <h4>Standard</h4>
      <div>
        <div style={sliderItemStyle}>Single handle<ControlledSlider value={[3]} min={1} max={10}/></div>
      </div>

      <div>
        <div style={sliderItemStyle}>Multiple handles<ControlledSlider value={[3,4,5]} min={1} max={10}/></div>
      </div>
    </div>
  ));
