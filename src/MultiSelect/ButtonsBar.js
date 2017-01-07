import React from 'react';

const ButtonsBar = ({onCancel, onDone, theme}) => (
  <div className={theme.buttonsContainer}>
    <button className={theme.cancelButton} onClick={onCancel}>Cancel</button>
    <button className={theme.doneButton} data-hook="done-button" onClick={onDone}>Done</button>
  </div>
);

ButtonsBar.propTypes = {
  theme: React.PropTypes.object,
  onDone: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  shouldDisplay: React.PropTypes.bool
};

export default ButtonsBar;
