import React from 'react';
import Input from '../../src/Input';

export default () =>
  <div style={{width: '400px'}} className="ltr">
    <Input placeholder="Simple"/>
    <Input placeholder="Error" error/>
    <Input placeholder="Unit" unit="$"/>
    <Input placeholder="magnifyingGlass" magnifyingGlass/>
  </div>;
