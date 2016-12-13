import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Input/README.md';
import ExampleSimple from './ExampleSimple';
import ExampleSimpleRaw from '!raw!./ExampleSimple';
import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

storiesOf('Inputs', module)
  .add('Standard', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Simple input" code={ExampleSimpleRaw}>
        <ExampleSimple/>
      </CodeExample>

      <CodeExample title="Controlled input" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>
    </div>
  ));
