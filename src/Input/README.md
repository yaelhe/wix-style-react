# Input component

> [view source](https://github.com/wix/wix-style-react/blob/master/stories/Input.js)

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | string | - | - | Inputs value |
| style | other | normal | - | The style of the input, can be normal or paneltitle |
| defaultValue | string | - | - | Default value for those who wants to use this component un-controlled |
| tabIndex  | number | - | - | Standard component tabIndex |
| placeholder  | string | - | - | Placeholder to display |
| error  | bool | false | - | Is input value erroneous |
| unit  | string | - | - | Unit to display in input box |
| magnifyingGlass | bool | false | - | Should the component include a magnifyingGlass |
| rtl  | bool | false | - | Should text input be RTL? |
| autoFocus | bool | false  | - | Standard React Input autoFocus (focus the element on mount) |
| onChange  | func | - | - | Standard input onChange callback |
| onBlur | func | - | -  | Standard input onBlur callback |
| onFocus | func | - | - | Standard input onFocus callback |
| onEnterPressed | func | - | - | Called when user presses -enter- |
| onEscapePressed | func | - | - | Called when user presses -escape- |
| onKeyDown | func | - | - | Standard input onKeyDown callback |
