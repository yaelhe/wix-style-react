import React from 'react';
import Button from '../src/Button';
import {storiesOf, action} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import ButtonReadme from '../src/Button/README.md';

const ButtonWrapper = props => <Button onClick={action('clicked')} {...props}> Click Me!</Button>;

const buttonItemStyle = {display:'inline-block', padding:'0 5px', width: '200px', lineHeight: '22px'};

storiesOf('3. Buttons', module)
  .add('3.1 Standard', () => (
    <div>
      <Markdown source={ButtonReadme}/>

      <h1>Examples</h1>

      <h4>Standard</h4>
      <div>
        <div style={buttonItemStyle}>Main<br/><ButtonWrapper style="fullblue"/></div>
        <div style={buttonItemStyle}>Secondary<br/><ButtonWrapper style="emptyblue"/></div>
      </div>

      <h4>Error</h4>
      <div>
        <div style={buttonItemStyle}>Main<br/><ButtonWrapper style={'fullred'}/></div>
        <div style={buttonItemStyle}>Secondary<br/><ButtonWrapper style={'emptyred'}/></div>
      </div>

      <h4>Premium</h4>
      <div>
        <div style={buttonItemStyle}>Main<br/><ButtonWrapper style={'fullpurple'}/></div>
        <div style={buttonItemStyle}>Secondary<br/><ButtonWrapper style={'emptypurple'}/></div>
      </div>

      <h4>Green</h4>
      <div>
        <div style={buttonItemStyle}>Main<br/><ButtonWrapper style={'fullgreen'}/></div>
        <div style={buttonItemStyle}>Secondary<br/><ButtonWrapper style={'emptygreen'}/></div>
      </div>

      <h4>Sizes</h4>
      <div>
        <div style={buttonItemStyle}>Small<br/><ButtonWrapper height={'small'}/></div>
        <div style={buttonItemStyle}>Medium<br/><ButtonWrapper height={'medium'}/></div>
        <div style={buttonItemStyle}>Large<br/><ButtonWrapper height={'large'}/></div>
      </div>
    </div>
  ));