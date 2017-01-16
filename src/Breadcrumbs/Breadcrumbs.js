import React from 'react';
import styles from './Breadcrumbs.scss';
import classNames from 'classnames';

class Breadcrumbs extends React.Component {
  render() {
    const {items, onClick, size, theme, activeId} = this.props;

    const className = classNames({
      [styles[size]]: true,
      [styles[theme]]: true
    });

    return (
      <div className={className}>
        <ul data-hook="breadcrumbs-items">
          {items.map(item => {
            const activeClassName = classNames({
              [styles.active]: activeId === item.id,
              [styles.item]: true
            });
            return (<li key={item.id} onClick={() => onClick(item.id)} className={activeClassName}>{item.value}</li>);
          })}
        </ul>
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.string
    ]).isRequired
  })).isRequired,
  onClick: React.PropTypes.func,
  activeId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  size: React.PropTypes.oneOf(['medium', 'large']),
  theme: React.PropTypes.oneOf(['onWhiteBackground', 'onGrayBackground', 'onDarkBackground']),
};

Breadcrumbs.defaultProps = {
  size: 'medium',
  theme: 'onGrayBackground'
};

export default Breadcrumbs;
