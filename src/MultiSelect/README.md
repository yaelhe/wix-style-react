# MultiSelect component

>   Multi select with tags and auto-suggest.

>   The component should be used as the content of a modal, and when clicking on 'done' the modal should be closed.
    This use case is good when the user needs to select many tags at the same time and you don't want the suggestion box to close
    after each selection.

## MultiSelect Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| renderSuggestion | func(suggestion:object, query:object ) | - | true | A function that receives a suggestion and render it |
| suggestions | array of objects | - | true | The suggestions that will be shown to the user. Each suggestion should an 'id' prop|
| onDone | func | - | true | A callback function to be called when done button is clicked|
| onCancel | func | - | true | A callback function to be called when cancel button is clicked|
| tags | array of objects | [] | false | Use this attribute if you want to load the component with predefined tags|
| tagDisplayProp | string | 'id' | false | the property name that will be used as the display value of the tag|
| inputPlaceholder | string | 'Add tag' | false | the placeholder for the input|
| getSuggestionValue | function | (suggestion)=> suggestion.name) | false | A function that takes a suggestion and return the display name of this suggestion|
| filterSuggestionsFunction | function | - | false | Use this function to customize the filtering of the suggestions|
| theme | object | - | false | Use this prop if you need a custom style for the component|
| allowNotSuggestedTags | bool | false | false | If true, when the input doesn't match any suggestion and the user presses Enter, a new tag will be created with the input value as the name of the tag |

