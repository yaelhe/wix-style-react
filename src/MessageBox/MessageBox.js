import React from 'react';
import Button from '../Button';
import * as styles from './MessageBox.scss';

const MessageBoxLayout1 = ({title, content, primaryButtonLabel, secondaryButtonLabel, onPrimaryButtonClick, onSecondaryButtonClick, imageUrl}) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.headerImage}>
          <img src={imageUrl}/>
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>
        {content}
      </div>
      <div className={styles.buttonsContainer}>
        { primaryButtonLabel ?
          <div className={styles.primaryButtonContainer}>
            <Button style="fullblue" onClick={onPrimaryButtonClick}> {primaryButtonLabel} </Button>
          </div> : null
        }
        { secondaryButtonLabel ? 
          <div className={styles.secondaryButtonContainer}>
            <span onClick={onSecondaryButtonClick}>
              {secondaryButtonLabel}
            </span>
          </div> : null
        }
      </div>
    </div>
  );
};

MessageBoxLayout1.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  primaryButtonLabel: React.PropTypes.string.isRequired,
  secondaryButtonLabel: React.PropTypes.string,
  onPrimaryButtonClick: React.PropTypes.func,
  onSecondaryButtonClick: React.PropTypes.func,
  imageUrl: React.PropTypes.string,
};

export default MessageBoxLayout1;
