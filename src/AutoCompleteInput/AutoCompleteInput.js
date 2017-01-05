import React from 'react';
import Input from '../Input/Input.js';
import styles from './AutoCompleteInput.scss';
import isEqual from 'lodash.isequal';
import isobject from 'lodash.isobject';
import has from 'lodash.has';
import isstring from 'lodash.isstring';
import trim from 'lodash.trim';
import omit from 'lodash.omit';
import DropdownLayout from '../DropdownLayout/DropdownLayout';

const NOT_SELECTED_ID = -1;

const initialState = {
  selectedId: NOT_SELECTED_ID,
  showOptions: false,
};

const isLegalOption = option => {
  if (isobject(option)) {
    return (has(option, 'id') && (trim(option.id).length > 0)) &&
      has(option, 'value') && isstring(option.value) && (trim(option.value).length > 0);
  } else {
    return isstring(option) && trim(option).length > 0;
  }
};

class AutoCompleteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};

    this.onSelect = this.onSelect.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.options, nextProps.options)) {
      if (nextProps.options.some(option => !isLegalOption(option))) {
        throw new Error('AutoCompleteInput: Invalid option provided');
      }
      this.setState({
        selectedId: NOT_SELECTED_ID,
      });
    }
    if (this.props.selectedId !== nextProps.selectedId) {
      this.setState({keyboardHovered: nextProps.options.findIndex(item => item.id === nextProps.selectedId)});
    }
  }

  render() {
    const {options, readOnly} = this.props;

    const inputClasses = readOnly ? 'readonly' : '';

    const desiredProps = omit(this.props, ['options', 'onSelect']);
    return (
      <div onFocus={this.onFocus} onKeyDown={this.onKeyDown} onBlur={this.onBlur}>
        <div className={styles[inputClasses]}>
          <Input
            menuArrow
            ref={input => this.input = input}
            {...desiredProps}
            />
        </div>

        <DropdownLayout
          ref={dropdownLayout => this.dropdownLayout = dropdownLayout}
          options={options}
          selectedId={this.state.selectedId}
          visible={this.state.showOptions}
          onClose={this.onBlur}
          onSelect={this.onSelect}
          />
      </div>
    );
  }

  onSelect(optionId) {
    const {options, value} = this.props;
    if (optionId === NOT_SELECTED_ID || options.length === 0) {
      this.props.onSelect({id: 'not a suggested option', value});
    } else {
      this.props.onSelect(options.find(option => option.id === optionId));
    }
    this.onBlur();
  }

  onBlur(event) {
    this.setState(initialState);

    this.input.blur();
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  onFocus(event) {
    this.setState({showOptions: true});

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onKeyDown(event) {
    this.dropdownLayout._onKeyDown(event);

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
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

AutoCompleteInput.defaultProps = {
  ...Input.defaultProps,
  OnSelect: () => {},
  options: [],
};

AutoCompleteInput.propTypes = {
  ...Input.propTypes,
  options: React.PropTypes.arrayOf((propValue, key) => {
    if (!isLegalOption(propValue[key])) {
      return new Error(`AutoCompleteInput: Invalid Prop options was given. Validation failed on the option number ${key}`);
    }
  }),
  onSelect: React.PropTypes.func
};

AutoCompleteInput.displayName = 'AutoCompleteInput';

export default AutoCompleteInput;
