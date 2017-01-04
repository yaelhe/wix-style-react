import React from 'react';
import AutoCompleteInput from 'wix-style-react/AutoCompleteInput';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

const suggestions = [
  {id: 0, value: 'First suggestion'},
  {id: 1, value: 'Unselectable suggestion', unselectable: true},
  {id: 2, value: 'Third suggestion'},
  {id: 3, node: <span style={{color: 'red'}}>Node suggestion</span>, value: 'Text of node suggestion'},
  {id: 4, value: 'Very long suggestion text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
];

const rtlSuggestions = [
  {id: 0, value: 'אפשרות ראשונה'},
  {id: 1, value: 'אפשרות שניה'},
  {id: 2, value: 'אפשרות שלישית'}
];

const onSelect = e => console.log('Select', e);

export default () =>
  <div>
    <div style={style} className="ltr">
      Left to right
      <AutoCompleteInput
        suggestions={suggestions}
        onSelect={onSelect}
        />
    </div>
    <div style={style} className="rtl">
      Right to left<AutoCompleteInput suggestions={rtlSuggestions} rtl/>
    </div>
  </div>;
