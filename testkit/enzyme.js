import {enzymetestkitFactory} from '../src/test-common';

import InputDriver from '../src/Input/Input.driver';
export const inputTestkit = enzymetestkitFactory(InputDriver);

export {buttonTestkitFactory} from '../src/Button/testkit/Button.enzyme';
export {toastTestkitFactory} from '../src/Toast/testkit/Toast.enzyme';
