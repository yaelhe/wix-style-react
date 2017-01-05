import React, {PropTypes} from 'react';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';

const AutoComplete = ({dataSource, predicate, ...otherProps}) => (
  <div id={otherProps.id}>
    <AutoCompleteInput
      {...otherProps}
      options={dataSource.filter(predicate)}
      />
  </div>
);

AutoComplete.propTypes = {
  dataSource: PropTypes.array,
  predicate: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

AutoComplete.defaultProps = {
  dataSource: [],
  predicate: () => true
};

AutoCompleteInput.displayName = 'AutoComplete';

export default AutoComplete;
