import _ from 'lodash/fp';
import React from 'react';
import {componentFactory, breadcrumbsDriverFactory} from './testkit/Breadcrumbs';

describe('Breadcrumbs', () => {
  const createDriver = _.compose(breadcrumbsDriverFactory, componentFactory);
  const items = [
    {id: 0, value: 'Option 1'},
    {id: 1, value: 'Option 2'}
  ];

  it('should have correct text on each breadcrumb', () => {
    const driver = createDriver({items});
    expect(driver.breadcrumbContentAt(0)).toBe(items[0].value);
    expect(driver.breadcrumbContentAt(1)).toBe(items[1].value);
  });
});