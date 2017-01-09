import React from 'react';
import Tag from '../Tag';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const tagDriverFactory = ({component, wrapper}) => {

  const isClassExists = (component, className) => (component && component.className.indexOf(className) !== -1);
  const removeButton = $(component).find('a')[0];
  const icon = $(component).find('span')[0];

  return {
    exists: () => !!component,
    isLarge: () => isClassExists(component, 'large'),
    isErasable: () => isClassExists(removeButton, 'tagRemoveButton'),
    eraseTag: () => ReactTestUtils.Simulate.click(removeButton),
    isIconExists: () => isClassExists(icon, 'icon'),
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Tag {...props}/></div>, wrapper);
    }
  };
};

const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}><Tag {...props}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

const tagTestkitFactory = ({wrapper, id}) => {
  const component = $(wrapper).find(`#${id}`)[0];
  return tagDriverFactory({component, wrapper});
};

export {tagTestkitFactory, componentFactory, tagDriverFactory};
