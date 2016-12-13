# Button component

> [view source](https://github.com/wix/wix-style-react/blob/master/stories/Button.js)

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| style | string | fullblue | + | The style of the button, can be fullblue, emptyblue, fullpurple, emptypurple, fullgreen, emptygreen, fullred or emptyred
| height | string | medium | - | The size of the button, can be small, medium or large |
| disabled | bool | - | - | - |
| onClick | func | - | - | - |

## Usage

```js
import Input from 'wix-style-react/Button';

// standard
<Button/>

// styles variations
<Button style="emptyblue">Click Me!</Button>
<Button style="fullgreen" height="small">Click Me!</Button>

// error
<Button style="fullred" height="large">Click Me!</Button>
```
