import React from 'react';
import MultiSelect from './MultiSelect';
import sinon from 'sinon';
import {mount, shallow} from 'enzyme';


const renderTagFunction = tagsProps => {
  const {onRemove, key, getTagDisplayValue, tag} = tagsProps;
  return (
    <div data-hook="tag" key={getTagDisplayValue(tag)}>{getTagDisplayValue(tag)}
      <a onClick={() => onRemove(key)}/>
    </div>);
};

class MultiSelectDriver {
  constructor() {
    this.props = {};
  }

  given = {
    defaultConfig: () => {
      const props = {
        renderTag: renderTagFunction,
        suggestions: [],
        renderSuggestion: suggestion => <div data-hook="suggestion">{suggestion.name}</div>,
        getSuggestionValue: suggestion => suggestion.name,
        tagDisplayProp: 'id',
        onDone: sinon.spy(),
        onCancel: sinon.spy()
      };
      Object.assign(this.props, props);
      return this;
    },

    placeholder: inputPlaceholder => {
      Object.assign(this.props, {inputPlaceholder});
      return this;
    },

    allowNotSuggestedTags: allowNotSuggestedTags => {
      Object.assign(this.props, {allowNotSuggestedTags});
      return this;
    },

    tags: tags => {
      Object.assign(this.props, {tags});
      return this;
    },

    renderTag: renderTag => {
      Object.assign(this.props, {renderTag});
      return this;
    },

    renderSuggestion: renderSuggestion => {
      Object.assign(this.props, {renderSuggestion});
      return this;
    },

    getSuggestionValue: getSuggestionValue => {
      Object.assign(this.props, {getSuggestionValue});
      return this;
    },

    suggestions: suggestions => {
      Object.assign(this.props, {suggestions});
      return this;
    },

    filterSuggestionsFunction: filterSuggestionsFunction => {
      Object.assign(this.props, {filterSuggestionsFunction});
      return this;
    },

    customProp: prop => {
      Object.assign(this.props, {customProp: prop});
      return this;
    }
  };

  get and() {
    return this.given;
  }

  build() {
    this.component = mount(<MultiSelect {...this.props}/>);
    return this;
  }

  buildShallow() {
    this.component = shallow(<MultiSelect {...this.props}/>);
    return this;
  }

  get = {
    inputElement: () => this.component.find('[data-hook="autosuggest-input"]'),
    inputValue: () => this.component.find('[data-hook="autosuggest-input"]').get(0).value,
    tags: () => this.component.find('[data-hook="tag"]').map(node => node.text()),
    doneButtonElement: () => this.component.find('[data-hook="done-button"]'),
    doneCallback: () => this.props.onDone,
    cancelCallback: () => this.props.onCancel,
    suggestions: () => this.component.find('[data-hook="suggestion"]').map(node => node.text()),
    firstSuggestionElement: () => this.component.find('[data-hook="suggestion"]').first(),
    autoSuggestComponent: () => this.component.find('[data-hook="autosuggest-component"]').first()
  };


  simulate = {
    changeInput: value => {
      this.get.inputElement().simulate('change', {target: {value}});
    },
    clickOnDone: () => {
      this.get.doneButtonElement().simulate('click');
    },
    backspacePressed: () => {
      this.get.inputElement().simulate('keyDown', {keyCode: 8});
    },
    deletePressed: () => {
      this.get.inputElement().simulate('keyDown', {keyCode: 46});
    },

    downArrow: () => {
      this.get.inputElement().simulate('keyDown', {keyCode: 40});

    },

    enterIsPressed: () => {
      this.get.inputElement().simulate('keyDown', {keyCode: 13});
    },

    clickOnFirstSuggestion: () => {
      this.get.firstSuggestionElement().simulate('click');
    }
  };

  isExist = {
    noSuggestionMessage: () => this.testIsExist('no-suggestions-message'),
    customRenderedTag: () => this.testIsExist('custom-rendered-tag'),
    customRenderSuggestion: () => this.testIsExist('custom-render-suggestion')
  };

  testIsExist(dataHook) {
    return this.component.find(`[data-hook="${dataHook}"]`).length > 0;
  }
}


// ============================================================================
// Tests
// ============================================================================

function attachIdAndTagToSuggestions(suggestions) {
  return suggestions.map(suggestion => {
    return {...suggestion, id: suggestion.name};
  });
}

describe('MultiSelect,', () => {
  let driver;
  beforeEach(() => {
    driver = new MultiSelectDriver();
  });

  describe('input field:', () => {
    it('should change input value when user type something', () => {
      const value = 'TestInputValue';
      driver.given.defaultConfig().build();
      driver.simulate.changeInput(value);
      expect(driver.get.inputValue()).toEqual(value);
    });

    it('should display placeholder from props ', () => {
      const placeholder = 'thisIsAplaceHolder';
      driver.given
        .defaultConfig()
        .and.placeholder(placeholder)
        .build();
      expect(driver.get.inputElement().props().placeholder).toEqual(placeholder);
    });

    it('should not display a placeholder if there are any tags', () => {
      driver.given
        .defaultConfig()
        .and.placeholder('testPlaceHolder')
        .and.tags([{id: 'test'}])
        .build();
      expect(driver.get.inputElement().props().placeholder).toEqual('');
    });

    it('should add a tag when pressing on enter if "allowNotSuggestedTags" is true', () => {
      const input = 'test';
      driver.given
        .defaultConfig()
        .and.allowNotSuggestedTags(true)
        .build();

      driver.simulate.changeInput(input);
      driver.simulate.enterIsPressed();
      expect(driver.get.tags()).toEqual([input]);
    });

    it('should not add a tag when pressing on enter if "allowNotSuggestedTags" is false', () => {
      const input = 'test';
      driver.given
        .defaultConfig()
        .and.allowNotSuggestedTags(false)
        .build();

      driver.simulate.changeInput(input);
      driver.simulate.enterIsPressed();
      expect(driver.get.tags()).toEqual([]);
    });
  });

  describe('suggestions section:', () => {
    const suggestions = attachIdAndTagToSuggestions([{name: 'firstSuggestion'}, {name: 'firstSuggestion2'}, {name: 'secondSuggestion'}, {name: 'two words'}]);

    it('should show all the suggestions on load', () => {
      driver.given
        .defaultConfig()
        .and.suggestions(suggestions)
        .build();
      expect(driver.get.suggestions()).toEqual(['firstSuggestion', 'firstSuggestion2', 'secondSuggestion', 'two words']);
    });


    it(`default filter should filter out suggestions that do not start with 'inputValue`, () => {
      driver.given
        .defaultConfig()
        .and.suggestions(suggestions)
        .build();
      driver.simulate.changeInput('f');
      expect(driver.get.suggestions()).toEqual(['firstSuggestion', 'firstSuggestion2']);
    });

    it(`default filter should filter out suggestions that are already shown within tags`, () => {
      driver.given
        .defaultConfig()
        .and.tags([{id: 'firstSuggestion'}, {id: 'two words'}])
        .and.suggestions(suggestions)
        .build();
      expect(driver.get.suggestions()).toEqual(['firstSuggestion2', 'secondSuggestion']);
    });

    it('should remove the suggestion on select and add a corresponding tag', () => {
      driver.given
        .defaultConfig()
        .and.suggestions(attachIdAndTagToSuggestions([{name: 'test1'}, {name: 'test2'}]))
        .build();

      driver.simulate.clickOnFirstSuggestion();
      expect(driver.get.suggestions()).toEqual(['test2']);
      expect(driver.get.tags()).toEqual(['test1']);
    });

    it('should show a message if suggestions list is empty', () => {
      driver.given
        .defaultConfig()
        .and.suggestions(attachIdAndTagToSuggestions([{name: 'test1'}, {name: 'test2'}]))
        .build();

      expect(driver.isExist.noSuggestionMessage()).toEqual(false);
      driver.simulate.changeInput('xxx');
      expect(driver.isExist.noSuggestionMessage()).toEqual(true);
    });

    it('should allow specifying suggestion value', () => {
      const suggestions = attachIdAndTagToSuggestions([
        {name: 'alice', lastName: 'lafa'},
        {name: 'bob', lastName: 'lafa'},
        {name: 'corny', lastName: 'notLafa'}]);

      driver.given
        .defaultConfig()
        .and.suggestions(suggestions)
        .and.getSuggestionValue(suggestion => suggestion.lastName)
        .build();
      driver.simulate.changeInput('lafa');
      expect(driver.get.suggestions()).toEqual(['alice', 'bob']);
    });
  });

  describe('when deleting a tag:', () => {
    const tags = [{id: 'first'}, {id: 'second'}];
    it(`should delete the last tag when user press 'backspace' and input is empty `, () => {
      driver.given
        .defaultConfig()
        .and.tags(tags)
        .build();
      driver.simulate.backspacePressed();
      expect(driver.get.tags()).toEqual(['first']);
    });

    it(`should NOT delete the last tag when user press 'backspace' and input is NOT empty `, () => {
      driver.given
        .defaultConfig()
        .and.tags(tags)
        .build();
      driver.simulate.changeInput('a');
      driver.simulate.deletePressed();
      expect(driver.get.tags()).toEqual(['first', 'second']);
    });

    it(`should delete the last tag when user press 'delete' and input is empty `, () => {
      driver.given
        .defaultConfig()
        .and.tags(tags)
        .build();
      driver.simulate.deletePressed();
      expect(driver.get.tags()).toEqual(['first']);
    });

    it(`should NOT delete the last tag when user press 'delete' and input is NOT empty `, () => {
      driver.given
        .defaultConfig()
        .and.tags(tags)
        .build();
      driver.simulate.changeInput('a');
      driver.simulate.deletePressed();
      expect(driver.get.tags()).toEqual(['first', 'second']);
    });
  });

  it('should call done callback function with the correct tags when done button is clicked', () => {
    const tags = [{id: 'Alabama'}];
    driver.given
      .defaultConfig()
      .and.tags(tags)
      .build();
    driver.simulate.clickOnDone();
    expect(driver.get.doneCallback().calledWith(tags)).toEqual(true);
  });

  it('should call cancel callback function when cancel button is clicked', () => {
    driver.given
      .defaultConfig()
      .build();
    driver.simulate.clickOnDone();
    expect(driver.get.cancelCallback().called);
  });

  it('should allow custom filter suggestion function', () => {
    driver.given
      .defaultConfig()
      .and.suggestions(attachIdAndTagToSuggestions([{name: '1'}]))
      .and.filterSuggestionsFunction(() => [{name: 'test filter'}])
      .build();
    expect(driver.get.suggestions()).toEqual(['test filter']);
  });

  it('should allow custom render tag function', () => {
    driver.given
      .defaultConfig()
      .and.tags([{id: 'test1'}])
      .and.renderTag(() => <div data-hook="custom-rendered-tag" key="123"/>)
      .build();
    expect(driver.isExist.customRenderedTag()).toEqual(true);
  });

  it('should allow custom render sugeestion function', () => {
    driver.given
      .defaultConfig()
      .and.suggestions(attachIdAndTagToSuggestions([{name: '1'}]))
      .and.renderSuggestion(() => <div data-hook="custom-render-suggestion" key="123"/>)
      .build();
    expect(driver.isExist.customRenderSuggestion()).toEqual(true);
  });

  it('should pass props to autosuggest component', () => {
    driver.given
      .defaultConfig()
      .and.suggestions(attachIdAndTagToSuggestions([{name: 'nir'}]))
      .and.customProp('customPropValue')
      .buildShallow();
    expect(driver.get.autoSuggestComponent().props().customProp).toEqual('customPropValue');
  });
});
