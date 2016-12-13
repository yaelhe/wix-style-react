import React from 'react';
import Button from '../src/Button';
import {storiesOf, action} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import ButtonReadme from '../src/Button/README.md';

const ButtonWrapper = props =>
  <Button
    onClick={action('clicked')}
    {...props}> Click Me!
    </Button>;

const buttonsRowStyle = {display:'flex', alignItems:'center', justifyContent:'space-between', width: '400px'};
const buttonItemStyle = {display:'flex', alignItems:'center'};

storiesOf('Buttons', module)
  .add('Standard', () => (
    <div>
      <Markdown source={ButtonReadme}/>

      <h1>Examples</h1>

      <h4>Standard buttons</h4>
      <div style={buttonsRowStyle}>
        <div style={buttonItemStyle}>Main:&nbsp;<ButtonWrapper style={'fullblue'}/></div>
        <div style={buttonItemStyle}>Secondary:&nbsp;<ButtonWrapper style={'emptyblue'}/></div>
      </div>

      <h4>Error buttons</h4>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width: '400px'}}>
        <div style={{display:'flex', alignItems:'center'}}>Main:&nbsp;<ButtonWrapper style={'fullred'}/></div>
        <div style={{display:'flex', alignItems:'center'}}>Secondary:&nbsp;<ButtonWrapper style={'emptyred'}/></div>
      </div>

      <h4>Premuim buttons</h4>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width: '400px'}}>
        <div style={{display:'flex', alignItems:'center'}}>Main:&nbsp;<ButtonWrapper style={'fullpurple'}/></div>
        <div style={{display:'flex', alignItems:'center'}}>Secondary:&nbsp;<ButtonWrapper style={'emptypurple'}/></div>
      </div>

      <h4>Green buttons</h4>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width: '400px'}}>
        <div style={{display:'flex', alignItems:'center'}}>Main:&nbsp;<ButtonWrapper style={'fullgreen'}/></div>
        <div style={{display:'flex', alignItems:'center'}}>Secondary:&nbsp;<ButtonWrapper style={'emptygreen'}/></div>
      </div>

      <h4>Size</h4>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width: '600px'}}>
        <div style={{display:'flex', alignItems:'center'}}>Small:&nbsp;<ButtonWrapper height={'small'}/></div>
        <div style={{display:'flex', alignItems:'center'}}>Medium:&nbsp;<ButtonWrapper height={'medium'}/></div>
        <div style={{display:'flex', alignItems:'center'}}>Large:&nbsp;<ButtonWrapper height={'large'}/></div>
      </div>
    </div>
  ));
