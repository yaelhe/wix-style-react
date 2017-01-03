import styles from './DropdownLayout.scss';
import React from 'react';
import classNames from 'classnames';

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
    if (this.props.options[index].value !== '-' && !(this.props.options[index].isSelectable === false)) {
      this.setState({hovered: index});
    }
  }

  _onMouseLeave() {
    this.setState({hovered: this.props.options.findIndex(item => {
      return item.id === this.props.selectedId;
    })});
  }

  hoverNextState(step) {
    step %= this.props.options.length;
    const validOption = this.props.options.find(item => {
      return item.value !== '-' && !(item.isSelectable === false);
    });

    if (!validOption) {
      return;
    }

    let newHovered;
    let oldHovered = this.state.hovered;

    if (!oldHovered) {
      oldHovered = step < 0 ? this.props.options.length : -1;
    }

    do {
      newHovered = oldHovered + step;
      if (newHovered >= this.props.options.length) {
        newHovered -= this.props.options.length;
      } else if (newHovered < 0) {
        newHovered += this.props.options.length;
      }
      oldHovered = newHovered;
    } while (this.props.options[newHovered].value === '-' || this.props.options[newHovered].isSelectable === false);

    this.setState({hovered: newHovered});
    this.options.scrollTop = (newHovered - 2) * parseInt(styles.option_height);
  }

  _onKeyDown(event) {
    if (event.key === 'ArrowDown') {
      this.hoverNextState(1);
    } else if (event.key === 'ArrowUp') {
      this.hoverNextState(-1);
    } else if (event.key === 'Enter') {
      this._onSelect(this.state.hovered || 0);
    } else if (event.key === 'Escape') {
      this._onClose();
    } else {
      return false;
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
          ref={
            options => {
              this.options = options;
            }
          }
          >
          {options.map((option, idx) => (
            option.value === '-' ? (this.renderDivider(idx)) : (this.renderItem({option, idx, selected: option.id === selectedId, hovered: idx === this.state.hovered, isSelectable: !(option.isSelectable === false)}))
          ))}
        </div>
      </div>
    );
  }

  renderDivider(idx) {
    return (<div key={idx} className={styles.divider}/>);
  }

  renderItem({option, idx, selected, hovered, isSelectable}) {
    const optionClassName = classNames({
      [styles.option]: true,
      [styles.selected]: selected,
      [styles.hovered]: hovered,
      [styles.unselectable]: !isSelectable,
    });

    return (
      <div
        className={optionClassName}
        onClick={isSelectable ? () => this._onSelect(idx) : null}
        key={idx}
        onMouseEnter={() => this._onMouseEnter(idx)}
        onMouseLeave={() => this._onMouseLeave(idx)}
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
    isSelectable: React.PropTypes.bool
  })),
  selectedId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  tabIndex: React.PropTypes.number
};

DropdownLayout.defaultProps = {
  dropDirectionUp: false,
  options: [],
  visible: true,
  tabIndex: 1,
};

export default DropdownLayout;
