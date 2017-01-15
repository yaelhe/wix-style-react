import React from 'react';

class Breadcrumbs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {items} = this.props;
    return (
      <div>
        <div data-hook="breadcrumbs-items">
          {items.map(item => {
            return (<div>{item.value}</div>)
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
  }))
};

export default Breadcrumbs;
