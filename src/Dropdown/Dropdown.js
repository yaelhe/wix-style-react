import React, {PropTypes} from 'react';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';

const Dropdown = ({id, ...otherProps}) => (
  <div id={id}>
    <AutoCompleteInput
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
