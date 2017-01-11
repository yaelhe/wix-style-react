import {testkitFactory} from '../src/test-common';

import InputDriver from '../src/Input/Input.driver';
export const inputTestkit = testkitFactory(InputDriver);

export {buttonTestkitFactory} from '../src/Button/testkit/Button';
export {checkboxDriverFactory} from '../src/Checkbox/Checkbox.driver';
export {radioGroupDriverFactory} from '../src/RadioGroup/RadioGroup.driver';
export {toastTestkitFactory} from '../src/Toast/testkit/Toast';
