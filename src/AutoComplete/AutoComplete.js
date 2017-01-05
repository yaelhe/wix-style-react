import React, {PropTypes} from 'react';
import InputWithOptions from '../InputWithOptions/InputWithOptions';

const AutoComplete = ({dataSource, predicate, ...otherProps}) => (
  <div id={otherProps.id}>
    <InputWithOptions
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

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
