import styles from './Dropdown.scss';
import InputWithOptions from '../InputWithOptions/InputWithOptions';

class Dropdown extends InputWithOptions {

  constructor(props) {
    super(props);
    this.state = {value: '', selectedId: -1};
  }

  inputClasses() {
    return styles.readonly;
  }

  dropdownAdditionalProps() {
    return {selectedId: this.state.selectedId, value: this.state.value};
  }

  inputAdditionalProps() {
    return {readOnly: 'readonly', value: this.state.value};
  }

  _onSelect(optionId) {
    this.setState({value: this.props.options.find(option => option.id === optionId).value, selectedId: optionId});
    super._onSelect(optionId);
  }
}

Dropdown.propTypes = InputWithOptions.propTypes;
Dropdown.defaultProps = InputWithOptions.defaultProps;

export default Dropdown;
