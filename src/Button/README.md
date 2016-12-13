# Button component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| style | string | fullblue | yes | The style of the button, can be fullblue, emptyblue, fullpurple, emptypurple, fullgreen, emptygreen, fullred or emptyred
| height | string | medium | - | The size of the button, can be small, medium or large |
| disabled | boolean | - | - | - |
| onClick | function | - | - | - |

## Usage

```js
import Input form 'wix-style-react/Button';

// standard
<Button/>

// styles variations
<Button style='emptyblue'>Click Me!</Button>
<Button style="fullgreen" height='small'>Click Me!</Button>

// error
<Button style="fullred" height='large'>Click Me!</Button>
```
