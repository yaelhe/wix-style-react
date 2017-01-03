import {dropdownLayoutDriverFactory} from './DropdownLayout';

const dropdownLayoutTestkitFactory = ({wrapper, id}) => {
  const dropdownLayout = wrapper.find(`#${id}`);
  return dropdownLayoutDriverFactory(dropdownLayout.node);
};

export {dropdownLayoutTestkitFactory};
