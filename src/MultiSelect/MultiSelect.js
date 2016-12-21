import React from 'react';
import Autosuggest from 'react-autosuggest';
import style from './multiSelect.scss';
import ButtonsBar from './ButtonsBar';
import InputWithTags from './InputWithTags';
import match from 'autosuggest-highlight/match';


const noop = () => {};
const defaultGetSuggestionValue = suggestion => suggestion.name;

const DELETE_KEY_CODE = 46;
const BACKSPACE_KEY_CODE = 8;
const ENTER_KEY_CODE = 13;

const defaultFilterSuggestionsFunction = ({inputValue, tags, suggestions, getSuggestionValue}) => {
  const isSuggestionIncludeInTags = suggestion => tags.find(tag => tag.id === suggestion.id);

  const isMatchingInput = suggestionValue => {
    const numberOfWordsInInput = inputValue.split(' ').length,
      numberOfMatches = match(suggestionValue, inputValue).length;

    return numberOfMatches === numberOfWordsInInput;
  };

  inputValue = inputValue.trim().toLowerCase();
  return suggestions.filter(suggestion => {
    const suggestionValue = getSuggestionValue(suggestion);

    return !isSuggestionIncludeInTags(suggestion) &&
      (inputValue === '' || isMatchingInput(suggestionValue));
  });
};

const defaultRenderTag = tagsProps => {
  const {tag, key, onRemove, getTagDisplayValue} = tagsProps;
  return (
    <span key={key}>
      {getTagDisplayValue(tag)}
      <a onClick={() => onRemove(key)}/>
    </span>
  );
};

class MultiSelect extends React.Component {
  static propTypes = {
    tags: React.PropTypes.array,
    allowNotSuggestedTags: React.PropTypes.bool,
    inputPlaceholder: React.PropTypes.string,
    filterSuggestionsFunction: React.PropTypes.func,
    renderTag: React.PropTypes.func,
    renderSuggestion: React.PropTypes.func.isRequired,
    suggestions: React.PropTypes.array.isRequired,
    getSuggestionValue: React.PropTypes.func.isRequired,
    onDone: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    theme: React.PropTypes.object,
    multiSection: React.PropTypes.bool,
    renderSectionTitle: React.PropTypes.func,
    getSectionSuggestions: React.PropTypes.func,
    tagDisplayProp: React.PropTypes.string
  };

  static defaultProps = {
    tags: [],
    tagDisplayProp: 'id',
    allowNotSuggestedTags: false,
    inputPlaceholder: 'Add tag',
    filterSuggestionsFunction: defaultFilterSuggestionsFunction,
    renderTag: defaultRenderTag,
    theme: style,
    getSuggestionValue: defaultGetSuggestionValue,
    multiSection: false,
  };

  constructor(props) {
    super(props);
    const {tags, suggestions, filterSuggestionsFunction, getSuggestionValue, tagDisplayProp} = props;
    const inputValue = '';
    this.state = {
      inputValue,
      filteredSuggestions: filterSuggestionsFunction({
        suggestions,
        tags,
        inputValue,
        getSuggestionValue,
        tagDisplayProp
      }),
      tags,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tags !== nextProps.tags) {
      const {inputValue, suggestions} = this.state;
      const {tags, getSuggestionValue, filterSuggestionsFunction, tagDisplayProp} = nextProps;
      this.state = {
        filteredSuggestions: filterSuggestionsFunction({
          inputValue,
          tags,
          suggestions,
          getSuggestionValue,
          tagDisplayProp
        }),
        tags
      };
    }
  }

  componentDidMount() {
    this.autosuggestRef.input.focus();
  }

  renderSuggestionsContainer = ({children, ...rest}) => {
    const {theme} = this.props;
    if (children) {
      return (
        <div {...rest}>
          <div className={theme.shadeSeparatorTop}/>
          <div className={style.scrollArea}>
            {children}
          </div>
        </div>
      )
        ;
    } else {
      return (<div data-hook="no-suggestions-message" className={theme.noSuggestions}>No search results</div>);
    }
  };

  renderTagInputComponent = inputProps => {
    const {tags} = this.state;
    const {renderTag, inputPlaceholder, theme, tagDisplayProp} = this.props;
    return (
      <div>
        <InputWithTags
          renderTag={renderTag}
          tagDisplayProp={tagDisplayProp}
          inputPlaceHolder={inputPlaceholder}
          onKeyDown={this.handleOnKeyDown}
          onChangeTags={this.handleOnChangeTags}
          inputProps={inputProps}
          theme={theme}
          tags={tags}
        />
      </div>
    );
  };

  removeLastTag = () => {
    const newTags = this.state.tags.slice(0, -1);
    this.handleOnChangeTags(newTags);
  };

  handleOnDone = () => {
    this.props.onDone(this.state.tags);
  };

  handleOnCancel = () => {
    this.props.onCancel();
  };

  onChangeAutoSuggest = (event, {newValue, method}) => {
    const {tags} = this.state;
    const {filterSuggestionsFunction, getSuggestionValue, suggestions, tagDisplayProp} = this.props;

    const newState = {inputValue: newValue};
    if (method === 'type') {
      newState.filteredSuggestions = filterSuggestionsFunction({
        inputValue: newValue,
        tags,
        suggestions,
        getSuggestionValue,
        tagDisplayProp
      });
    }
    this.setState(newState);
  };

  handleOnChangeTags = tags => {
    const {inputValue} = this.state;
    const {filterSuggestionsFunction, getSuggestionValue, suggestions, tagDisplayProp} = this.props;

    this.setState({
      tags,
      filteredSuggestions: filterSuggestionsFunction({
        inputValue,
        tags,
        suggestions,
        getSuggestionValue,
        tagDisplayProp
      })
    });
    this.autosuggestRef.input.focus();
  };

  handleOnKeyDown = e => {
    const {allowNotSuggestedTags} = this.props;
    const {inputValue, tags} = this.state;

    if ((e.keyCode === DELETE_KEY_CODE || e.keyCode === BACKSPACE_KEY_CODE) && inputValue.length === 0) {
      this.removeLastTag();
    }
    else if (e.keyCode === ENTER_KEY_CODE && allowNotSuggestedTags) {
      this.setState({
        tags: [...tags, {id: inputValue}],
        inputValue: ''
      });
    }
  };

  handleOnSuggestionSelected = (event, {suggestion}) => {
    const tags = this.state.tags.concat([suggestion]);
    const inputValue = '';

    this.setState({
      inputValue,
    }, ()=>this.handleOnChangeTags(tags));
  };

  setAutosuggestRef = autosuggestRef => {
    this.autosuggestRef = autosuggestRef;
  };

  render() {
    const {inputValue, filteredSuggestions} = this.state;
    const {theme} = this.props;
    const inputProps = {
      value: inputValue,
      onChange: this.onChangeAutoSuggest
    };

    return (
      <div className={theme.multiSelectContainer}>
        <Autosuggest
          {...this.props}
          data-hook="autosuggest-component"
          ref={this.setAutosuggestRef}
          suggestions={filteredSuggestions}
          onSuggestionsFetchRequested={noop}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
          renderInputComponent={this.renderTagInputComponent}
          inputProps={inputProps}
          onSuggestionSelected={this.handleOnSuggestionSelected}
          alwaysRenderSuggestions
          focusInputOnSuggestionClick
        />
        <div className={theme.shadeSeparatorBottom}/>
        <ButtonsBar onDone={this.handleOnDone} onCancel={this.handleOnCancel} theme={theme}/>
      </div>
    );
  }
}

export default MultiSelect;
