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

export const createDriverWrapper = driverFactory => _.compose(driverFactory, componentFactory);

export const testkitFactory = (driverFactory, {wrapper, id}) => {
  const component = $(wrapper).find(`#${id}`)[0];
  return driverFactory({component, wrapper});
};

// enzyme
export const enzymeTestKitFactory = (driverFactory, {wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return driverFactory({component: component.node, wrapper});
};

// protractor
export const protractorTestkitFactory = (driverFactory, id) => {
  const component = $(`#${id}`);
  return driverFactory(component);
};
