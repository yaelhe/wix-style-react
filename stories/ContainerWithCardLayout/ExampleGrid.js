import React from 'react';
import classNames from 'classnames';
import grid from '../../src/Grid'
import styles from './ExampleGrid.scss'

export default () =>
  <div className={`${grid.container} ${grid.mainContainer} ${styles.mainContent}`}>
    <div className={grid.row}>
      <div className={`${grid.colXs4}`}>
        <div className={styles.columnnContent}>column content</div>
      </div>
      <div className={`${grid.colXs4}`}>
        <div className={styles.columnnContent}>column content</div>
      </div>
      <div className={`${grid.colXs4}`}>
        <div className={styles.columnnContent}>column content</div>
      </div>
    </div>

    <div className={grid.row}>
      <div className={`${grid.colXs4}`}>
        <div className={styles.columnnContent}>column content</div>
      </div>
      <div className={`${grid.colXs4}`}>
        <div className={styles.columnnContent}>column content</div>
      </div>
      <div className={`${grid.colXs4}`}>
        <div className={styles.columnnContent}>column content</div>
      </div>
    </div>
  </div>;
