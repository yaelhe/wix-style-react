import styles from './DropdownLayout.scss';
import React from 'react';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';

const modulu = (n, m) => {
  const remain = n % m;
  return remain >= 0 ? remain : remain + m;
};

const NOT_HOVERED_INDEX = -1;

class DropdownLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseHovered: NOT_HOVERED_INDEX,
      keyboardHovered: this.props.options.findIndex(item => item.id === this.props.selectedId)
    };

    this._onSelect = this._onSelect.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  _onSelect(index) {
    if (this.state.keyboardHovered === NOT_HOVERED_INDEX) {
      this.props.onSelect(NOT_HOVERED_INDEX);
    } else {
      const selectedId = this.props.options[index].id;
      if (selectedId !== this.props.selectedId && this.props.onSelect) {
        this.props.onSelect(selectedId);
      }
    }
  }

  _onMouseEnter(index) {
    if (this.isSelectableOption(this.props.options[index])) {
      this.setState({mouseHovered: index});
    }
  }

  _onMouseLeave() {
    this.setState({
      mouseHovered: NOT_HOVERED_INDEX
    });
  }

  keyboardHoverNextState(step) {
    const {options} = this.props;

    if (!options.some(this.isSelectableOption)) {
      return;
    }

    let newKeyboardHovered = this.state.keyboardHovered;
    do {
      newKeyboardHovered = Math.abs(modulu(Math.max(newKeyboardHovered + step, -1), options.length));
    } while (!this.isSelectableOption(options[newKeyboardHovered]));

    this.setState({keyboardHovered: newKeyboardHovered});
    this.options.scrollTop = (newKeyboardHovered - 2) * parseInt(styles.option_height);
  }

  _onKeyDown(event) {
    switch (event.key) {
      case 'ArrowDown': {
        this.keyboardHoverNextState(1);
        break;
      }

      case 'ArrowUp': {
        this.keyboardHoverNextState(-1);
        break;
      }

      case 'Enter': {
        this._onSelect(this.state.keyboardHovered);
        break;
      }

      case 'Tab': {
        this._onSelect(this.state.keyboardHovered);
        return false;
      }

      case 'Escape': {
        this._onClose();
        break;
      }

      default: {
        return false;
      }
    }

    event.preventDefault();
    event.stopPropagation();
    return true;
  }

  _onClose() {
    this.setState({mouseHovered: NOT_HOVERED_INDEX, keyboardHovered: NOT_HOVERED_INDEX});

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const {options, id, visible, dropDirectionUp, selectedId, tabIndex} = this.props;

    const optionsClassName = classNames({
      [styles.options]: true,
      [styles.shown]: visible,
      [styles.up]: dropDirectionUp,
      [styles.down]: !dropDirectionUp
    });

    return (
      <div tabIndex={tabIndex} className={styles.wrapper} onKeyDown={this._onKeyDown} onBlur={this._onClose} id={id}>
        <div
          className={optionsClassName}
          ref={options => this.options = options}
          >
          {options.map((option, idx) => (
            option.value === '-' ?
              (this.renderDivider(idx)) :
              (this.renderItem({
                option,
                idx,
                selected: option.id === selectedId || this.state.keyboardHovered === idx,
                hovered: idx === this.state.mouseHovered,
                disabled: option.disabled
              }))
          ))}
        </div>
      </div>
    );
  }

  renderDivider(idx) {
    return (<div key={idx} className={styles.divider}/>);
  }

  renderItem({option, idx, selected, hovered, disabled}) {
    const optionClassName = classNames({
      [styles.option]: true,
      [styles.selected]: selected,
      [styles.hovered]: hovered,
      [styles.disabled]: disabled,
    });

    return (
      <div
        className={optionClassName}
        onClick={!disabled ? () => this._onClick(idx) : null}
        key={idx}
        onMouseEnter={() => this._onMouseEnter(idx)}
        onMouseLeave={this._onMouseLeave}
        >
        {option.value}
      </div>
    );
  }

  _onClick(index) {
    this.setState({mouseHovered: index, keyboardHovered: index}, () => this._onSelect(index));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({mouseHovered: NOT_HOVERED_INDEX, keyboardHovered: NOT_HOVERED_INDEX});
    }

    if (this.state.keyboardHovered !== NOT_HOVERED_INDEX && !isEqual(this.props.options, nextProps.options)) {
      this.setState({
        keyboardHovered: nextProps.options.findIndex(item => item.id === this.props.options[this.state.keyboardHovered].id)
      });
    }

    if (this.props.selectedId !== nextProps.selectedId) {
      this.setState({mouseHovered: nextProps.options.findIndex(item => item.id === nextProps.selectedId)});
    }
  }

  isSelectableOption = option => (option.value !== '-') && !option.disabled;

}

DropdownLayout.propTypes = {
  dropDirectionUp: React.PropTypes.bool,
  onClose: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  visible: React.PropTypes.bool,
  id: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    value: React.PropTypes.node.isRequired,
    disabled: React.PropTypes.bool
  })),
  selectedId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  tabIndex: React.PropTypes.number
};

DropdownLayout.defaultProps = {
  options: [],
  visible: true,
  tabIndex: 1,
  selectedId: NOT_HOVERED_INDEX
};

export default DropdownLayout;
