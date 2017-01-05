# Dropdown component

> Dropdown Select Component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| options | array of option | [] | - | Array of objects. Objects must have an Id and can can include *value* and *node*. If value is '-', a divider will be rendered instead. |
| onSelect | func | - | - | Callback function called whenever the user selects a different option in the list |
| value | string or number | '' | - | The value of the selected option |
| placeholder | string | '' | - | Shown when no option is selected |
| id | string or number | '' | - | An identifier of the component |


## Option

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| id | string or number | - | + | The id of the option, should be unique |
| value | text or node | - | + | Can be a text or a react elements, if text is '-', a divider will render at that position. |
| disabled | bool | false | - | Is this option is disabled or not |
