import React from 'react';
import {Simulate, renderIntoDocument} from 'react-addons-test-utils';

import Ticker from '../Ticker';

import styles from '../Ticker.scss';

export const tickerDriverFactory = component => {
  const handlers = {
    getUp: () => component.querySelector(`.${styles.up}`),
    getDown: () => component.querySelector(`.${styles.down}`),
    clickUp: () => Simulate.click(handlers.getUp()),
    clickDown: () => Simulate.click(handlers.getDown()),
    isUpDisabled: () => handlers.getUp().classList.contains(styles.disabled),
    isDownDisabled: () => handlers.getDown().classList.contains(styles.disabled),
    exists: () => !!component
  };
  return handlers;
};

export const componentFactory = (props = {}) =>
  renderIntoDocument(<div><Ticker {...props}/></div>).childNodes[0];

export const tickerTestkitFactory = ({wrapper}) =>
  tickerDriverFactory(wrapper.querySelector('[data-hook=ticker]'));
