import React from 'react';
import Tag from 'wix-style-react/Tag';
import styles from './ExampleStandard.scss';

const ExampleStandard = () => (
  <div className={styles.main}>
    <div className={styles.row}>
      <Tag id="myId1" label="Small Tag" erasable={false}/>
      <Tag id="myId2" label="Small erasable"/>
      <Tag id="myId3" label="Small with Icon" icon={<div className={styles.icon}/>}/>
    </div>
    <div className={styles.row}>
      <Tag id="myId4" label="Large Tag" size="large" erasable={false}/>
      <Tag id="myId5" label="Large erasable" size="large"/>
      <Tag id="myId3" label="Large with Icon" size="large" icon={<div className={styles.icon2}/>}/>
    </div>
  </div>
);

export default ExampleStandard;
