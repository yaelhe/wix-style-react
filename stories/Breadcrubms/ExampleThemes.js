import React from 'react';
import styles from './ExampleBreadcrumbs.scss';

import Breadcrumbs from '../../src/Breadcrumbs/Breadcrumbs';

export default () =>
    <div>
      <div className={`${styles.onGrayBackground} ${styles.exampleWrapper}`}>
        <Breadcrumbs items={[{id: '1', value: 'first item'}, {id: '2', value: 'second item'}, {id: '3', value: 'third item'}]}
                     theme={'onGrayBackground'}/>
      </div>
      <div className={`${styles.onWhiteBackground} ${styles.exampleWrapper}`}>
        <Breadcrumbs items={[{id: '1', value: 'first item'}, {id: '2', value: 'second item'}, {id: '3', value: 'third item'}]}
                     theme={'onWhiteBackground'}/>
      </div>
      <div className={`${styles.onDarkBackground} ${styles.exampleWrapper}`}>
        <Breadcrumbs items={[{id: '1', value: 'first item'}, {id: '2', value: 'second item'}, {id: '3', value: 'third item'}]}
                     theme={'onDarkBackground'}/>
      </div>
    </div>;

