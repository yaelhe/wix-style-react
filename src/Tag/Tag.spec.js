import _ from 'lodash/fp';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {tagTestkitFactory, componentFactory, tagDriverFactory} from './testkit/Tag';
import Tag from './Tag';

describe('Tag', () => {

  const createDriver = _.compose(tagDriverFactory, componentFactory);
  const id = 'myId', label = 'Hey', onRemoveTag = jest.fn();

  it('should have a default small size', () => {
    const driver = createDriver({id, label});
    expect(driver.isLarge()).toBeFalsy();
  });

  it('should have a large size', () => {
    const driver = createDriver({id, label, size: 'large'});
    expect(driver.isLarge()).toBeTruthy();
  });

  it('should be erasable by default', () => {
    const driver = createDriver({id, label});
    expect(driver.isErasable()).toBeTruthy();
  });

  it('should not be erasable', () => {
    const driver = createDriver({id, label, erasable: false});
    expect(driver.isErasable()).toBeFalsy();
  });

  it('should call onRemoveTag function on erase', () => {
    const driver = createDriver({id, label, onRemoveTag});

    driver.eraseTag();
    expect(onRemoveTag).toBeCalledWith(id);
  });

  it('should not display icon by default', () => {
    const driver = createDriver({id, label});
    expect(driver.isIconExists()).toBeFalsy();
  });

  it('should display icon', () => {
    const driver = createDriver({id, label, icon: <span>Ho</span>});
    expect(driver.isIconExists()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Tag id={id} label={label}/></div>));
      const driver = tagTestkitFactory({wrapper, id});

      expect(driver.exists()).toBeTruthy();
    });
  });
});
