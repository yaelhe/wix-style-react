import React from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import {MultiSelect} from '../src/index.js';

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

class MultiSelectStory extends React.Component {
  renderTag = tagsProps => {
    const {tag, key, onRemove, disabled, classNameRemove, getTagDisplayValue, ...other} = tagsProps;
    return (
      <span key={key} {...other}>
        <div style={testIcon}/>
        {getTagDisplayValue(tag)}
        {!disabled && <a className={classNameRemove} onClick={(e) => onRemove(key)}/>}
      </span>
    );
  };


  renderSuggestion = (suggestion, {query}) => {
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

  handleOnDone = tags => console.log(tags);
  handleOnCancel = () => console.log('cancel');

  render() {
    return (
      <div style={{width: '900px'}}>

        <h2>MultiSelect
          <small style={{fontSize: '11px'}}><a target="_blank"
                                               href="https://github.com/wix/wix-style-react/blob/master/stories/MultiSelect.js">source</a>
          </small>
        </h2>
        <p>Multi select with tags and auto-suggest</p>

        <div style={{width: '400px', marginLeft: '20px'}} className="ltr">
          <MultiSelect
            renderTag={this.renderTag}
            suggestions={states}
            renderSuggestion={this.renderSuggestion}
            onDone={this.handleOnDone}
            onCancel={this.handleOnCancel}
          />
        </div>

        <h3>MultiSelect - Required Attributes</h3>
        <table className="attributes">
          <tbody>
          <tr>
            <th>Attribute name</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>renderSuggestion</td>
            <td>function(suggestion:object, query:object )</td>
            <td>a function that receives a suggestion and render it. see src for an example of such a function</td>
          </tr>
          <tr>
            <td>suggestions</td>
            <td>array of objects.</td>
            <td>each suggestion should have a 'tag' property and contain the tag that
              will be created for this suggestion. each tag must have at least 'id' prop.
            </td>
          </tr>
          <tr>
            <td>onDone</td>
            <td>function</td>
            <td>a callback function to be called when done button is clicked</td>
          </tr>
          <tr>
            <td>onCancel</td>
            <td>function</td>
            <td>a callback function to be called when done button is clicked</td>
          </tr>
          </tbody>
        </table>


        <h3>MultiSelect - Optional Attributes</h3>
        <table className="attributes">
          <tbody>
          <tr>
            <th>Attribute name</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>tags</td>
            <td>array of tags (default: [])</td>
            <td>Use this attribute if you want to load the component with predefined tags</td>
          </tr>
          <tr>
            <td>tagDisplayProp</td>
            <td>string (default: 'id')</td>
            <td>the property name that will be used as the display value of the tag</td>
          </tr>
          <tr>
            <td>inputPlaceholder</td>
            <td>string (default: 'Add tag')</td>
            <td>the placeholder for the input</td>
          </tr>
          <tr>
            <td>getSuggestionValue</td>
            <td>function (default: (suggestion)=> suggestion.name)</td>
            <td>this function takes a suggestion and return the display name of this suggestion</td>
          </tr>
          <tr>
            <td>filterSuggestionsFunction</td>
            <td>function</td>
            <td>use this function to customize the filtering of the suggestions</td>
          </tr>
          <tr>
            <td>renderTag</td>
            <td>function</td>
            <td>use this function to customize the render function of the tags</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>object</td>
            <td>use this prop if you need a custom style for the component</td>
          </tr>
          <tr>
            <td>multiSection</td>
            <td>boolean (default: true)</td>
            <td>use this prop if you want to group suggestion by categories</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MultiSelectStory;
