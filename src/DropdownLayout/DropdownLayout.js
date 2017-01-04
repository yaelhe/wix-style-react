import styles from './DropdownLayout.scss';
import React from 'react';
import classNames from 'classnames';

const modulu = (n, m) => {
  const remain = n % m;
  return remain >= 0 ? remain : remain + m;
};

class DropdownLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hovered: null};
    this._onSelect = this._onSelect.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  _onSelect(index) {
    const selectedId = this.props.options[index].id;
    if (selectedId !== this.props.selectedId && this.props.onSelect) {
      this.props.onSelect(selectedId);
    }
  }

  _onMouseEnter(index) {
    const {options} = this.props;
    if (this.isSelectableOption(options[index])) {
      this.setState({hovered: index});
    }
  }

  _onMouseLeave() {
    const hovered = this.props.options.findIndex(item => item.id === this.props.selectedId);
    this.setState({
      hovered: hovered === -1 ? null : hovered
    });
  }

  hoverNextState(step) {
    const {options} = this.props;
    step = modulu(step, options.length);

    if (!options.some(this.isSelectableOption)) {
      return;
    }

    let newHovered = this.state.hovered || 0;
    do {
      newHovered = modulu(newHovered + step, options.length);
    } while (!this.isSelectableOption(options[newHovered]));

    this.setState({hovered: newHovered});
    this.options.scrollTop = (newHovered - 2) * parseInt(styles.option_height);
  }

  _onKeyDown(event) {
    switch (event.key) {
      case 'ArrowDown': {
        this.hoverNextState(1);
        break;
      }

      case 'ArrowUp': {
        this.hoverNextState(-1);
        break;
      }

      case 'Enter': {
        this._onSelect(this.state.hovered || 0);
        break;
      }

      case 'Tab': {
        this._onSelect(this.state.hovered || 0);
        return true;
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
            option.value === '-' ? (this.renderDivider(idx)) : (this.renderItem({option, idx, selected: option.id === selectedId, hovered: idx === this.state.hovered, disabled: option.disabled}))
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
        onClick={!disabled ? () => this._onSelect(idx) : null}
        key={idx}
        onMouseEnter={() => this._onMouseEnter(idx)}
        onMouseLeave={this._onMouseLeave}
        >
        {option.value}
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({hovered: null});
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
};

export default DropdownLayout;
