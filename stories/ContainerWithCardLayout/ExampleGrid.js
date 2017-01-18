import React from 'react';
import classNames from 'classnames';
import grid from '../../src/Grid'
import card from '../../src/Card'
import styles from './ExampleGrid.scss'

export default () =>
<div className={styles.exampleContainer}>
  <div className={`${grid.container} ${grid.mainContainer}`}>
    <div className={grid.row}>
      <div className={grid.colXs8}>
        <div className={card.card}>
          <div className={card.header}>Card title</div>
          <div className={card.content}>
            <div className={grid.row}>
              <div className={grid.colXs6}>card grid content</div>
              <div className={grid.colXs6}>card grid content</div>
            </div>
          </div>
        </div>
      </div>
      <div className={grid.colXs4}>
        <div className={card.card}>
          <div className={card.header}>Card title</div>
          <div className={card.content}>Card content</div>
        </div>
      </div>
    </div>

    <div className={grid.row}>
      <div className={grid.colXs4}>
        <div className={card.card}>
          <div className={card.header}>Card title</div>
          <div className={card.content}>Card content</div>
        </div>
      </div>
      <div className={grid.colXs4}>
        <div className={card.card}>
          <div className={card.header}>Card title</div>
          <div className={card.content}>Card content</div>
        </div>
      </div>
      <div className={grid.colXs4}>
        <div className={card.card}>
          <div className={card.header}>Card title</div>
          <div className={card.content}>Card content</div>
        </div>
      </div>
    </div>
  </div>
</div>;
