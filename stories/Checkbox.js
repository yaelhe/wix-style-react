import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Checkbox from '../src/Checkbox';
import CheckboxReadme from '../src/Checkbox/README.md';

class ControlledCheckbox extends Component {
  static propTypes = {
    checked: PropTypes.bool
  };

  constructor({checked}) {
    super();
    this.state = {checked};
  }

  render() {
    const onChange = () => this.setState({checked: !this.state.checked});

    return (
      <Checkbox {...this.props} checked={this.state.checked} onChange={onChange}/>
    );
  }
}

storiesOf('Switches', module)
  .add('Checkbox', () => (
    <div>
      <Markdown source={CheckboxReadme}/>

      <h1>Examples</h1>

      <div style={{width: '400px'}}>
        <div>
          <h3>Checkbox</h3>
          <div className="ltr">
            <div><ControlledCheckbox>Make my profile visible</ControlledCheckbox></div>
            <div><ControlledCheckbox checked>Make my profile visible (checked)</ControlledCheckbox></div>
            <div><ControlledCheckbox disabled>Make my profile visible (disabled)</ControlledCheckbox></div>
            <div><ControlledCheckbox disabled checked>Make my profile visible (disabled and checked)</ControlledCheckbox></div>
          </div>
        </div>

        <div>
          <h3>Right to left</h3>
          <div className="rtl">
            <div><ControlledCheckbox rtl>אני רוצה שהפרופיל שלי יהיה פומבי</ControlledCheckbox></div>
            <div><ControlledCheckbox rtl checked>אני רוצה שהפרופיל שלי יהיה פומבי</ControlledCheckbox></div>
            <div><ControlledCheckbox rtl disabled>אני רוצה שהפרופיל שלי יהיה פומבי</ControlledCheckbox></div>
            <div><ControlledCheckbox rtl disabled checked>אני רוצה שהפרופיל שלי יהיה פומבי</ControlledCheckbox></div>
          </div>
        </div>
      </div>
    </div>
  ));
