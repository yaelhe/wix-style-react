import React from 'react';
import styles from './AutoCompleteInput.scss';
import classNames from 'classnames';
import Input from '../Input/Input.js';
import defer from 'lodash.defer';
import isEqual from 'lodash.isequal';
import isobject from 'lodash.isobject';
import has from 'lodash.has';
import isstring from 'lodash.isstring';
import trim from 'lodash.trim';

const UP = 38, DOWN = 40, TAB = 9, ENTER = 13, ESCAPE = 27;

const NOT_SELECTED_INDEX = -1;

const initialState = {
  selectedSuggestionIndex: NOT_SELECTED_INDEX,
  shouldHideSuggestions: true,
  isHoveredOnSelectedSuggestion: false,
  isHoveredOnSuggestions: false,
};

const modulu = (n, m) => {
  const remain = n % m;
  return remain >= 0 ? remain : remain + m;
};

const getNextSelectableIndex = (suggestions, startIndex, getNextIndex) => {
  let index = startIndex, counter = 0;
  do {
    index = modulu(getNextIndex(index), suggestions.length);
    if (!suggestions[index].disabled) {
      return index;
    }
  } while (index !== startIndex && ++counter < suggestions.length);

  return counter === suggestions.length ? NOT_SELECTED_INDEX : startIndex;
};

const isLegalSuggestion = suggestion => {
  if (isobject(suggestion)) {
    return has(suggestion, 'node') ||
      (has(suggestion, 'text') && isstring(suggestion.text) && trim(suggestion.text).length > 0);
  } else {
    return isstring(suggestion) && trim(suggestion).length > 0;
  }
};

const getSuggestionText = suggestion => suggestion.node || suggestion.text || suggestion;

class AutoCompleteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseEnterSelectableSuggestion = this.onMouseEnterSelectableSuggestion.bind(this);
    this.onMouseOutSelectableSuggestion = this.onMouseOutSelectableSuggestion.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.suggestions, nextProps.suggestions)) {
      if (nextProps.suggestions.some(suggestion => !isLegalSuggestion(suggestion))) {
        throw new Error('AutoCompleteInput: Invalid suggestion provided');
      }
      this.setState({
        selectedSuggestionIndex: NOT_SELECTED_INDEX,
      });
    }
  }

  componentWillUnmount() {
    // Make sure the event listener is not connected when we're unmounting
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  renderSuggestions() {
    const {suggestions} = this.props;
    return suggestions.map((suggestion, index) => {
      const classname = classNames({
        [styles.suggestion]: true,
        [styles.selected]: index === this.state.selectedSuggestionIndex,
        [styles.disabled]: suggestion.disabled
      });

      const key = suggestion.key || index;

      let eventHandlers;
      if (suggestion.disabled) {
        eventHandlers = {
          onMouseDown: e => e.preventDefault(),
          onMouseOut: () => this.setState({isHoveredOnSuggestions: false}),
          onMouseEnter: () => this.setState({isHoveredOnSuggestions: true})
        };
      } else {
        eventHandlers = {
          onMouseDown: e => {
            e.preventDefault();
            this.onMouseDown(index);
          },
          onMouseOut: this.onMouseOutSelectableSuggestion,
          onMouseEnter: () => this.onMouseEnterSelectableSuggestion(getSuggestionText(suggestion))
        };
      }

      return (
        <div
          key={key}
          className={classname}
          {...eventHandlers}
          >
          {getSuggestionText(suggestion)}
        </div>
      );
    });
  }

  renderNode(node, nodeStyle) {
    if (node) {
      return <div className={styles[nodeStyle]} onMouseDown={e => e.preventDefault()}>{node}</div>;
    }
    return null;
  }

  render() {
    const hidden = this.state.shouldHideSuggestions || this.props.suggestions.length === 0;

    if (hidden) {
      // Make sure the event listener is not connected when we're hidden
      document.removeEventListener('mouseup', this.onMouseUp);
    }

    const autoSuggestionsWrapperClass = classNames({
      [styles.auto_suggestions_wrapper]: true,
      [styles.hidden]: hidden,
      [styles.footer]: !!this.props.footer
    });

    return (
      <div className={styles.wrapper}>
        <Input
          ref={input => this.input = input}
          {...this.props}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          />

        <div className={autoSuggestionsWrapperClass}>
          {this.renderNode(this.props.header, 'top_message')}
          {this.renderSuggestions()}
          {this.renderNode(this.props.footer, 'bottom_message')}
        </div>
      </div>
    );
  }

  onBlur(event) {
    this.setState(initialState);

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  onFocus(event) {
    this.setState({
      shouldHideSuggestions: false
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  onKeyDown(event) {
    if (!this._onKeyDown(event)) {
      this.props.onKeyDown && this.props.onKeyDown(event);
    }
  }

  onMouseClickSuggestion(selectedSuggestionIndex) {
    const {onSet, suggestions} = this.props;
    defer(() => onSet(suggestions[selectedSuggestionIndex]));
    this.input.blur();
  }

  onMouseOutSelectableSuggestion() {
    this.setState({
      isHoveredOnSuggestions: false,
      isHoveredOnSelectedSuggestion: false
    });
  }

  onMouseEnterSelectableSuggestion(suggestion) {
    const {suggestions} = this.props;
    const {selectedSuggestionIndex} = this.state;
    const isHoveredOnSelectedSuggestion = selectedSuggestionIndex !== NOT_SELECTED_INDEX &&
      suggestion === getSuggestionText(suggestions[selectedSuggestionIndex]);

    this.setState({
      isHoveredOnSuggestions: true,
      isHoveredOnSelectedSuggestion
    });
  }

  onMouseDown(selectedSuggestionIndex) {
    this.setState({
      selectedSuggestionIndex,
      isHoveredOnSelectedSuggestion: true
    });

    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp() {
    const {isHoveredOnSelectedSuggestion, selectedSuggestionIndex, isHoveredOnSuggestions} = this.state;
    document.removeEventListener('mouseup', this.onMouseUp);

    if (isHoveredOnSelectedSuggestion) {
      this.onMouseClickSuggestion(selectedSuggestionIndex);
    } else if (isHoveredOnSuggestions) {
      this.setState({
        selectedSuggestionIndex: NOT_SELECTED_INDEX,
        shouldHideSuggestions: false
      });
    } else {
      this.setState({selectedSuggestionIndex: NOT_SELECTED_INDEX});
      this.input.blur();
    }
  }

  _onSet() {
    const {selectedSuggestionIndex} = this.state;
    const {suggestions, onSet, value} = this.props;

    if (selectedSuggestionIndex !== NOT_SELECTED_INDEX) {
      onSet(suggestions[selectedSuggestionIndex]);
    } else {
      onSet(value);
    }
  }

  _onKeyDown(event) {
    switch (event.keyCode) {
      case TAB: {
        this._onSet();
        return false;
      }

      case ENTER: {
        this._onSet();
        this.input.blur();
        break;
      }

      case ESCAPE: {
        this.input.blur();
        break;
      }

      case UP: {
        const getNextIndex = index => Math.max(-1, --index);
        return this.handleUpDownKeys(getNextIndex);
      }

      case DOWN: {
        const getNextIndex = index => index + 1;
        return this.handleUpDownKeys(getNextIndex);
      }

      default:
        return false;
    }

    event.preventDefault();
    return false;
  }

  handleUpDownKeys(getNextIndex) {
    let {selectedSuggestionIndex} = this.state;
    const {suggestions} = this.props;

    if (suggestions.length === 0) {
      return true;
    }

    selectedSuggestionIndex = getNextSelectableIndex(suggestions, selectedSuggestionIndex, getNextIndex);
    if (selectedSuggestionIndex === NOT_SELECTED_INDEX) {
      return true;
    }

    this.setState({selectedSuggestionIndex});
    return false;
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  select() {
    this.input.select();
  }
}

AutoCompleteInput.displayName = 'AutoCompleteInput';

AutoCompleteInput.defaultProps = {
  ...Input.defaultProps,
  onSet: () => {},
  suggestions: [],
};

AutoCompleteInput.propTypes = {
  ...Input.propTypes,
  suggestions: React.PropTypes.arrayOf((propValue, key) => {
    if (!isLegalSuggestion(propValue[key])) {
      return new Error(`AutoCompleteInput: Invalid Prop suggestions was given. Validation failed on the suggestion number ${key}`);
    }
  }),
  header: React.PropTypes.node,
  footer: React.PropTypes.node,
  onSet: React.PropTypes.func
};

export default AutoCompleteInput;
