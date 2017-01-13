import React from 'react';
import typography, {convertFromUxLangToCss} from '../Typography';

export default function Label(props) {

  const {id, appearance, children, for: forAttr} = props;
  const className = typography[convertFromUxLangToCss(appearance)];

  return (
    <label className={className} id={id} htmlFor={forAttr}>
      {children}
    </label>
  );
}

Label.displayName = 'Label';

Label.propTypes = {
  id: React.PropTypes.string,
  for: React.PropTypes.string,
  appearance: React.PropTypes.oneOf(['T1', 'T1.1', 'T1.2', 'T1.3', 'T1.4', 'T2', 'T2.1', 'T2.2', 'T2.3', 'T3', 'T3.1', 'T3.2', 'T3.3', 'T3.4', 'T4', 'T4.1', 'T4.2', 'T4.3', 'T5', 'T5.1']).isRequired,
  children: React.PropTypes.any
};

Label.defaultProps = {
  appearance: 'T1.1'
};
