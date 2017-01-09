import {PropTypes} from 'react';
import InputWithOptions from '../InputWithOptions/InputWithOptions';

class AutoComplete extends InputWithOptions {

  constructor(props) {
    super(props);
    this.state = {filteredOptions: props.options};
  }

  dropdownAdditionalProps() {
    return {options: this.state.filteredOptions};
  }

  componentWillReceiveProps(nextProps) {
    const {predicate} = this.props;

    if (predicate && nextProps.options) {
      this.setState({filteredOptions: nextProps.options.filter(predicate)});
    }
  }
}

AutoComplete.propTypes = {
  ...InputWithOptions.propTypes,
  predicate: PropTypes.func
};

AutoComplete.defaultProps = {
  ...InputWithOptions.defaultProps
};

export default AutoComplete;
