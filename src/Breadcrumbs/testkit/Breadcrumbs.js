import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumbs from '../Breadcrumbs';

const breadcrumbsDriverFactory = ({component, wrapper}) => {
  const items = component.querySelector(`[data-hook=breadcrumbs-items]`);
  const optionAt = position => (items.childNodes[position]);

  return {
    breadcrumbContentAt: position => optionAt(position).textContent,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Breadcrumbs {...props}/></div>, wrapper);
    }
  };
};

const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}><Breadcrumbs {...props}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

export {
  componentFactory,
  breadcrumbsDriverFactory
};
