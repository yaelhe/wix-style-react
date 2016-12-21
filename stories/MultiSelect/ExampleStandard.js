import React from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import MultiSelect from 'wix-style-react/MultiSelect';

const style = {
  padding: '0 5px 55px',
  width: '500px'
};

const states = [
  {abbr: 'AL', name: 'Alabama', id: 'Alabama'},
  {abbr: 'AK', name: 'Alaska', id: 'Alaska'},
  {abbr: 'AZ', name: 'Arizona', id: 'Arizona'},
  {abbr: 'AR', name: 'Arkansas', id: 'Arkansas'},
  {abbr: 'CA', name: 'California', id: 'California'},
  {abbr: 'CA', name: 'California2', id: 'California2'},
  {abbr: 'CA', name: 'California3', id: 'California3'},
  {abbr: 'CA', name: 'California4', id: 'California4'},
  {abbr: 'CA', name: 'California5', id: 'California5'},
  {abbr: 'CA', name: 'California6', id: 'California6'},
  {abbr: 'CA', name: 'California7', id: 'California7'},
  {abbr: 'CO', name: 'Two words', id: 'Two words'},
];


const testIcon = {
  background: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Emoji_u1f60e.svg/1024px-Emoji_u1f60e.svg.png") no-repeat',
  backgroundSize: 'contain',
  minWidth: '13px',
  minHeight: '13px',
  display: 'inline-block',
  marginRight: '7px'
};

const textAndIcon = {
  padding: '7px 17px 7px 17px'
};

const renderTag = tagsProps => {
  const {tag, key, onRemove, disabled, classNameRemove, getTagDisplayValue, ...other} = tagsProps;
  return (
    <span key={key} {...other}>
        <div style={testIcon}/>
      {getTagDisplayValue(tag)}
      {!disabled && <a className={classNameRemove} onClick={(e) => onRemove(key)}/>}
      </span>
  );
};


const renderSuggestion = (suggestion, {query}) => {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);
  const generateContentFromParts = () => {
    return parts.map(part => {
      return (
        part.highlight ? <span key={part.text} style={{color: 'black'}}>{part.text}</span> :
          <span key={part.text}>{part.text}</span>
      );
    });
  };

  return (<div className="{style.listItem}">
    <div style={textAndIcon}>
      <div style={testIcon}/>
      <span>{generateContentFromParts()}</span></div>
  </div>);
};

const handleOnDone = tags => console.log(tags);
const handleOnCancel = () => console.log('cancel');

export default () =>
  <div>
    <div style={style}>
      <MultiSelect
        renderTag={renderTag}
        suggestions={states}
        renderSuggestion={renderSuggestion}
        onDone={handleOnDone}
        onCancel={handleOnCancel}
      />
    </div>
  </div>;
