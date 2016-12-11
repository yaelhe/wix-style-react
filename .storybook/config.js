import {configure} from '@kadira/storybook';

function loadStories() {
  // require('../stories');

 require('../stories/stories.css');

 require('../stories/Input');
 
}

configure(loadStories, module);
