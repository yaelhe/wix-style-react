import React, {PropTypes} from 'react';
import InputWithOptions from '../InputWithOptions/InputWithOptions';

const Dropdown = ({id, ...otherProps}) => (
  <div id={id}>
    <InputWithOptions
      readOnly
      {...otherProps}
      />
  </div>
);

Dropdown.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

export default Dropdown;
