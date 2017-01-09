import React, {PropTypes} from 'react';
import styles from './Tag.scss';
import classNames from 'classnames';

const Tag = ({id, label, icon, erasable, onRemoveTag, size}) => {
  const className = classNames({
    [styles.tag]: true,
    [styles.large]: size === 'large'
  });

  return (
    <span className={className} id={id}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{label}</span>
      {erasable && <a className={styles.tagRemoveButton} onClick={() => onRemoveTag(id)}/>}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onRemoveTag: PropTypes.func,
  erasable: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
};

Tag.defaultProps = {
  onRemoveTag: () => {},
  size: 'small',
  erasable: true,
};

export default Tag;
