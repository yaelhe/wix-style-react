import React from 'react';
import ReactDOM from 'react-dom';
import Toast from '../Toast';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const byDataHook = hook => `[data-hook|="${hook}"]`;

const toastDriverFactory = ({component, wrapper}) => {
  const $component = $(component);
  const $wrapper = $(wrapper);

  return {
    hasId: id => $component.attr('id') === id,
    getChildrenText: () => $component.find(byDataHook('toast-children')).text(),
    clickOnClose: () => ReactTestUtils.Simulate.click($component.find(byDataHook('toast-close'))[0]),
    hasTheme: theme => $component.hasClass(theme),
    toastExists: () => $wrapper.find(byDataHook('toast')).length > 0
  }
};

const componentFactory = (props = {}) => {
  let component;
  const {children, ...otherProps} = props;
  const wrapperDiv = document.createElement('div');

  ReactDOM.render(<div ref={r => component = r}><Toast {...otherProps}>{children}</Toast></div>, wrapperDiv);

  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

const toastTestkitFactory = ({wrapper, id}) => {
  const component = $(wrapper).find(`#${id}`)[0];
  return toastDriverFactory({component, wrapper});
};

export {toastTestkitFactory, componentFactory, toastDriverFactory};
