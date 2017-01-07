import React from 'react';
import Autosuggest from 'react-autosuggest';
import style from './multiSelect.scss';
import ButtonsBar from './ButtonsBar';
import TagsComponent from './TagsComponent';

const noop = () => {};
const initialState = {inputValue: '', shouldDisplay: false};

class MultiSelect extends React.Component {
  static propTypes = {
    onAddTag: React.PropTypes.func.isRequired,
    onRemoveTag: React.PropTypes.func.isRequired,
    displayNameProp: React.PropTypes.string,
    tags: React.PropTypes.array.isRequired,
    suggestions: React.PropTypes.array.isRequired,
    onChangeInput: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    renderTag: React.PropTypes.func,
    renderSuggestion: React.PropTypes.func.isRequired,
    onDone: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    theme: React.PropTypes.object,
    multiSection: React.PropTypes.bool,
    renderSectionTitle: React.PropTypes.func,
    getSectionSuggestions: React.PropTypes.func,
    autoFocus: React.PropTypes.bool
  };

  static defaultProps = {
    displayNameProp: 'id',
    placeholder: 'Add tag',
    theme: style,
  };

  constructor(props) {
    super(props);
    this.state = {...initialState};
    this.handleOnDone = this.handleOnDone.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.onClickInputContainer = this.onClickInputContainer.bind(this);
  }

  onClickInputContainer() {
    this.setState({shouldDisplay: true});
    this.autosuggestRef.input.focus();
  }

  renderSuggestionsContainer = ({children, ...rest}) => {
    const {theme} = this.props;
    if (!this.state.shouldDisplay) {
      return null;
    }

    if (children) {
      return (
        <div {...rest}>
          <div className={theme.shadeSeparatorTop}/>
          <div className={style.scrollArea}>
            {children}
          </div>
        </div>
      );
    } else {
      return (<div data-hook="no-suggestions-message" className={theme.noSuggestions}>No search results</div>);
    }
  };

  renderTagInputComponent = inputProps => {
    const {renderTag, theme, displayNameProp, tags} = this.props;
    return (
      <div>
        <div
          className={theme.flexContainer}
          onClick={this.onClickInputContainer}
          >
          <div className={theme.searchIcon}/>
          <div
            data-hook="tagsAndInputContainer"
            className={theme.tagsAndInputContainer}
            onKeyDown={this.handleOnKeyDown}
            >
            <TagsComponent
              renderTag={renderTag}
              tags={tags}
              onRemove={this.handleOnRemoveTag}
              tagDisplayProp={displayNameProp}
              theme={theme}
              />
            <input
              {...inputProps}
              className={theme.inputField}
              data-hook="autosuggest-input"
              onFocus={() => this.setState({shouldDisplay: true})}
              />
          </div>
        </div>
        <div className={theme.lineSeparator}/>
      </div>
    );
  };

  removeLastTag = () => {
    const {tags} = this.props;
    const removedTag = tags[tags.length - 1];
    this.handleOnRemoveTag(removedTag);
  };

  handleOnDone() {
    this.setState(initialState);
    this.props.onDone && this.props.onDone();
  }

  handleOnCancel() {
    this.setState(initialState);
    this.props.onCancel && this.props.onCancel();
  }

  onChangeAutoSuggest = (event, {newValue, method}) => {
    const newState = {inputValue: newValue, shouldDisplay: true};
    if (method === 'type') {
      this.props.onChangeInput(newValue);
    }
    this.setState(newState);
  };

  handleOnKeyDown = e => {
    const {inputValue} = this.state;

    if ((e.key === 'Delete' || e.key === 'Backspace') && inputValue.length === 0) {
      this.removeLastTag();
    }
  };

  handleOnRemoveTag = removedTag => {
    this.props.onRemoveTag(removedTag);
    this.autosuggestRef.input.focus();
  };

  handleOnSuggestionSelected = (event, {suggestion}) => {
    this.props.onAddTag(suggestion);
    this.setState({inputValue: ''});
  };

  getSuggestionValue = suggestion => suggestion[this.props.displayNameProp];

  render() {
    const {inputValue} = this.state;
    const {theme, suggestions, autoFocus, placeholder, tags} = this.props;
    const inputProps = {
      value: inputValue,
      onChange: this.onChangeAutoSuggest,
      autoFocus,
      placeholder: tags.length === 0 ? placeholder : ''
    };

    return (
      <div className={theme.multiSelectContainer}>
        <Autosuggest
          {...this.props}
          data-hook="autosuggest-component"
          ref={autosuggestRef => this.autosuggestRef = autosuggestRef}
          suggestions={suggestions}
          getSuggestionValue={this.getSuggestionValue}
          onSuggestionsFetchRequested={noop}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
          renderInputComponent={this.renderTagInputComponent}
          inputProps={inputProps}
          onSuggestionSelected={this.handleOnSuggestionSelected}
          focusInputOnSuggestionClick
          alwaysRenderSuggestions
          />
        <div className={theme.shadeSeparatorBottom}/>
        {this.state.shouldDisplay && <ButtonsBar onDone={this.handleOnDone} onCancel={this.handleOnCancel} theme={theme}/>}
      </div>
    );
  }
}

export default MultiSelect;
