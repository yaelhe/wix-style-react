import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash/fp';

const componentFactory = Element => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}>{Element}</div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

export const createDriverWrapper = driver => _.compose(driver, componentFactory);

export const testkitFactory = driver => ({wrapper, dataHook}) => {
  const component = $(wrapper).find(`[data-hook='${dataHook}']`)[0];
  return driver({component, wrapper});
};

// enzyme
export const enzymeTestKitFactory = driver => ({wrapper, dataHook}) => {
  const component = wrapper.findWhere(n => n.props()['data-hook'] === dataHook);
  return driver({component: component.node, wrapper});
};

// protractor
export const protractorTestkitFactory = driver => dataHook => {
  const component = $(`[data-hook='${dataHook}']`);
  return driver(component);
};
