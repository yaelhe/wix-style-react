import React, {PropTypes} from 'react';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';

const Dropdown = props => (
  <div id={props.id}>
    <AutoCompleteInput
      readOnly
      {...props}
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
