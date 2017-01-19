import React from 'react';
import Dropdown from 'wix-style-react/Dropdown';
import Input from 'wix-style-react/Input';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

const options = [
  {id: 0, value: 'Option 1'},
  {id: 1, value: 'Option 2'},
  {id: 2, value: 'Option 3'},
  {id: 3, value: 'Option 4'},
];

const rtlOptions = [
  {id: 0, value: 'אופציה 1'},
  {id: 1, value: 'אופציה 2'},
  {id: 2, value: 'אופציה 3'},
  {id: 3, value: 'אופציה 4'},
];

export default () =>
  <div>
    <div>
      <div className="ltr" style={style}>
        <div>Left to right</div>
        <Dropdown selectedId={1} options={options}/>
      </div>
      <div className="rtl" style={style}>
        <div>Right to left</div>
        <Dropdown options={rtlOptions}/>
      </div>
      <div className="ltr" style={style}>
        <div>Drop direction up</div>
        <Dropdown options={options} dropDirectionUp/>
      </div>
    </div>
    <div>
      <div className="ltr" style={style}>
        <div>Small</div>
        <Dropdown options={options} dropDirectionUp size="small"/>
      </div>
      <div className="ltr" style={style}>
        <div>Default</div>
        <Dropdown options={options} dropDirectionUp/>
      </div>
      <div className="ltr" style={style}>
        <div>Large</div>
        <Dropdown options={options} dropDirectionUp size="large"/>
      </div>
    </div>
    <div>
      <div className="ltr" style={style}>
        <div>With prefix</div>
        <Dropdown options={options} dropDirectionUp prefix={<Input.Unit>$</Input.Unit>}/>
      </div>
    </div>
  </div>;
