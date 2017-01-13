import React, { PropTypes } from 'react';

import styles from './styles.scss';

const EndorseContentLayout = ({ head, content, primaryCta, secondaryCta }) =>
  <div className={styles.root}>
    { head && <div className={styles.head}>{head}</div> }
    { content && <div className={styles.content}>{content}</div> }
    { primaryCta && <div className={styles.primaryCta}>{primaryCta}</div> }
    { secondaryCta && <div className={styles.secondaryCta}>{secondaryCta}</div> }
  </div>;

EndorseContentLayout.propTypes = {
  head: PropTypes.node,
  content: PropTypes.node,
  primaryCta: PropTypes.node,
  secondaryCta: PropTypes.node
};

export default EndorseContentLayout;

