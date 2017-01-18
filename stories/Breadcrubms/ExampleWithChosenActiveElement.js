import React from 'react';
import styles from './ExampleBreadcrumbs.scss';

import Breadcrumbs from '../../src/Breadcrumbs/Breadcrumbs';

const items = [{id: '1', value: 'first item'}, {id: '2', value: 'second item'}, {id: '3', value: 'third item'}];

export default () =>
  <div>
    <div className={`${styles.onGrayBackground} ${styles.exampleWrapper}`}>
      <Breadcrumbs
        items={items}
        activeId={'3'}/>
    </div>
  </div>;

