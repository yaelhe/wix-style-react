import React from 'react';
import AutoComplete from 'wix-style-react/AutoComplete';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

const options = [
  {id: 0, value: 'First option'},
  {id: 1, value: 'Unselectable option', unselectable: true},
  {id: 2, value: 'Third option'},
  {id: 4, value: 'Very long option text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
];

const rtlOptions = [
  {id: 0, value: 'אפשרות ראשונה'},
  {id: 1, value: 'אפשרות שניה'},
  {id: 2, value: 'אפשרות שלישית'}
];

const onSelect = e => console.log('Select', e);

export default () =>
  <div>
    <div style={style} className="ltr">
      Left to right
      <AutoComplete
        dataSource={options}
        onSelect={onSelect}
        />
    </div>
    <div style={style} className="rtl">
      Right to left<AutoComplete dataSource={rtlOptions} onSelect={onSelect}/>
    </div>
  </div>;
