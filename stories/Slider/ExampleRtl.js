import React from 'react';
import Slider from 'wix-style-react/Slider';

const style = {
  padding: '0 5px 55px',
  width: '500px'
};

export default () =>
  <div style={{direction: 'rtl'}}>
    <div style={style}>Single handle<Slider rtl={true} value={[3]} min={1} max={10}/></div>
  </div>;
