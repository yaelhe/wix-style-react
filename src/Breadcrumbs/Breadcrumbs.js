import React from 'react';

class Breadcrumbs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {items, onClick, size} = this.props;
    return (
      <div className={size}>
        <div data-hook="breadcrumbs-items">
          {items.map(item => {
            return (<div key={item.id} onClick={() => onClick(item.id)}>{item.value}</div>)
          })}
        </div>
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
	onClick: React.PropTypes.func.isRequired,
	size: React.PropTypes.oneOf(['normal', 'large'])
};

export default Breadcrumbs;
