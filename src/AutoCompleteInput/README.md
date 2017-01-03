# AutoCompleteInput component

> Suggestions component for Input. (Focus to see in action)

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| suggestions | array | [] | - | Array of objects to display as suggestions when focused. Objects can include *text* and *node* |
| onSet | func | noop | - | Callback when the user selects one of the selections. Called with the selection. |
| header | node | - | - | Extra node shown at the top of the suggestions list |
| bottomNode | node | - | - | Extra node shown at the bottom of the suggestions list |

***All of the Input's Props are also available for this component***


## Functions

| function name | description |
|---------------|-------------|
| focus | Focuses on the input |
| blur | Blurs the input (loses focus) |
| select | Selects all text in the input |
