import React from 'react';
import Input from '../Input/Input.js';
import styles from './InputWithOptions.scss';
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

class InputWithOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};

    this.onSelect = this.onSelect.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.select = this.select.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.options, nextProps.options)) {
      if (nextProps.options.some(option => !isLegalOption(option))) {
        throw new Error('InputWithOptions: Invalid option provided');
      }
      this.setState({
        selectedId: NOT_SELECTED_ID,
      });
    }
    if (this.props.selectedId !== nextProps.selectedId) {
      this.setState({keyboardHovered: nextProps.options.findIndex(item => item.id === nextProps.selectedId)});
    }
  }

  renderInput() {
    const {customInput} = this.props;
    const dropDownLayoutProps = ['options', 'onSelect', 'customInput', 'shouldCloseOnSelect'];
    const inputProps = omit(this.props, dropDownLayoutProps);

    if (customInput) {
      return React.cloneElement(customInput, {
        ref: input => this.input = input,
        ...inputProps
      });
    } else {
      return (
        <Input
          menuArrow
          ref={input => this.input = input}
          {...inputProps}
          />
      );
    }
  }

  render() {
    const {options, readOnly, shouldCloseOnSelect} = this.props;
    return (
      <div onFocus={this.onFocus} onKeyDown={this.onKeyDown} onBlur={this.onBlur}>
        <div className={readOnly ? styles.readonly : ''}>
          {this.renderInput()}
        </div>

        <DropdownLayout
          ref={dropdownLayout => this.dropdownLayout = dropdownLayout}
          options={options}
          selectedId={this.state.selectedId}
          visible={this.state.showOptions}
          onClose={this.onBlur}
          onSelect={this.onSelect}
          shouldCloseOnSelect={shouldCloseOnSelect}
          />
      </div>
    );
  }

  onSelect(optionId) {
    const {options, value, shouldCloseOnSelect} = this.props;
    if (optionId === NOT_SELECTED_ID || options.length === 0) {
      this.props.onSelect({id: 'not a suggested option', value});
    } else {
      this.props.onSelect(options.find(option => option.id === optionId));
    }
    if (shouldCloseOnSelect) {
      this.onBlur();
    }
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

InputWithOptions.defaultProps = {
  ...Input.defaultProps,
  onSelect: () => {},
  options: [],
  shouldCloseOnSelect: true
};

InputWithOptions.propTypes = {
  ...Input.propTypes,
  options: React.PropTypes.arrayOf((propValue, key) => {
    if (!isLegalOption(propValue[key])) {
      return new Error(`InputWithOptions: Invalid Prop options was given. Validation failed on the option number ${key}`);
    }
  }),
  onSelect: React.PropTypes.func,
  customInput: React.PropTypes.element,
  shouldCloseOnSelect: React.PropTypes.bool
};

InputWithOptions.displayName = 'InputWithOptions';

export default InputWithOptions;
