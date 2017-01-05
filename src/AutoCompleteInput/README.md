# AutoCompleteInput component

> options component for Input. (Focus to see in action)

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| options | array | [] | - | Array of objects to display as options when focused. Objects can include *text* and *node* |
| onSelect | func | noop | - | Callback when the user selects one of the selections. Called with the selection. |
| ***All of the Input's Props are also available for this component*** | | | | |


## Functions

| function name | description |
|---------------|-------------|
| focus | Focuses on the input |
| blur | Blurs the input (loses focus) |
| select | Selects all text in the input |
