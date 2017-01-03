import React from 'react';
import styles from './Dropdown.scss';
import Input from '../Input/Input';
import DropdownLayout from '../DropdownLayout/DropdownLayout';

class Dropdown extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      selectedId: -1,
      showOptions: false,
    };

    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  render() {

    const {options} = this.props;
    const isVisible = this.state.showOptions && options.length > 0;

    return (
      <div className={styles.wrapper} onFocus={this._onFocus} onBlur={this._onBlur} onKeyDown={this._onKeyDown}>
        <Input
          ref={'input'}
          menuArrow
          onChange={this._onChange}
          />
        <DropdownLayout
          visible={isVisible}
          options={options}
          ref={
            dropdownLayout => {
              this.dropdownLayout = dropdownLayout;
            }
          }
          />
      </div>
    );
  }

  _onBlur(event) {
    this.setState({
      showOptions: false
    });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  _onFocus(event) {
    this.setState({
      showOptions: true
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  _onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  _onKeyDown(event) {
    this.dropdownLayout._onKeyDown(event);

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }
}

Dropdown.defaultProps = Input.defaultProps;
Dropdown.propTypes = Input.propTypes;

export default Dropdown;
