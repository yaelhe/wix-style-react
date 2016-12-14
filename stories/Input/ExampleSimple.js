import React from 'react';
import Input from 'wix-style-react/Input';

export default () =>
  <div className="ltr">
    <Input placeholder="Simple"/>
    <Input placeholder="Error" error/>
    <Input placeholder="Unit" unit="$"/>
    <Input placeholder="magnifyingGlass" magnifyingGlass/>
  </div>;
