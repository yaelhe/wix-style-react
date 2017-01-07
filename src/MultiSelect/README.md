# MultiSelect component

>   Multi select with tags and auto-suggest.

>   The component should be used as the content of a modal, and when clicking on 'done' the modal should be closed.
    This use case is good when the user needs to select many tags at the same time and you don't want the suggestion box to close
    after each selection.

## MultiSelect Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| renderSuggestion | func(suggestion:object, query:object ) | - | + | A function that receives a suggestion and render it |
| renderTag | func(tag:object) | - | + | A function that receives a tag and render it|
| suggestions | array of objects | - | + | The suggestions that will be shown to the user. Each suggestion should have an 'id' prop|
| onDone | func | - | - | A callback function to be called when done button is clicked|
| onCancel | func | - | - | A callback function to be called when cancel button is clicked|
| onChangeInput | func(value:string) | - | + | A callback function to be called when the input value changed|
| onAddTag | func(tag:object) | - | + | A callback function to be called when a tag should be added|
| onRemoveTag | func(tag:object) | - | + | A callback function to be called when a tag should be removed|
| tags | array of objects | - | + | The tags. tags are just set of selected suggestions|
| displayNameProp | string | 'id' | - | the property name that will be used as the display value of tags and suggestions|
| placeholder | string | 'Add tag' | - | the placeholder for the input|
| theme | object | - | - | Use this prop if you need a custom style for the component|
