import React from 'react';
import { shallow } from 'enzyme';

import EndorseContentLayout from './';
import styles from './styles.scss';

class Driver {
  component;
  when = {
    created: props => this.component = shallow(<EndorseContentLayout {...props}/>)
  }

  get = {
    root: () => this.component.find(`.${styles.root}`)
  }
}

const driver = new Driver();

describe('EndorseContentLayout', () => {
  it('should render', () => {
    driver.when.created();
    expect(driver.get.root().length).toBe(1);
  });
});

