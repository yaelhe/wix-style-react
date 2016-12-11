## Button component

## Properties

* **style** - fullblue, emptyblue, fullpurple, emptypurple, fullgreen, emptygreen, fullred, emptyred
* **height** - small (30), medium (36), large (42)
* **disabled**
* **onClick**

| propName | propType | defaultValue | isRequired |
|----------|----------|--------------|------------|
| style    | string   | fullblue     | -          |
| height   | string   | medium       | -          |
| disabled | bool     | false        | -          |
| onClick  | func     |              | -          |

## Usage

```js
import Button form 'wix-style-react/Button';
```
### Examples

```js
// standard
<Button>Click Me!</Button>

// styles variations
<Button style="fullblue">Click Me!</Button>
<Button style="fullgreen">Click Me!</Button>
<Button style="emptyred">Click Me!</Button>

// height variations
<Button height="small">Click Me!</Button>
<Button height="large">Click Me!</Button>

// disabled
<Button disabled>Click Me!</Button>
```
