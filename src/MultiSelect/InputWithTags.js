import React from 'react';
import TagsInput from 'react-tagsinput';

class InputWithTags extends React.Component {
  static propTypes = {
    inputPlaceHolder: React.PropTypes.string,
    renderTag: React.PropTypes.func,
    tags: React.PropTypes.array,
    onKeyDown: React.PropTypes.func,
    onChangeTags: React.PropTypes.func,
    inputProps: React.PropTypes.object,
    theme: React.PropTypes.object,
    tagDisplayProp: React.PropTypes.string
  };

  render() {
    const {renderTag, inputPlaceHolder, tags, onKeyDown, onChangeTags, inputProps, theme, tagDisplayProp} = this.props;
    const shouldShowInputPlaceHolder = () => tags.length === 0;
    const renderLayout = tagComponents => <span>{tagComponents}</span>;

    return (
      <div>
        <div className={theme.flexContainer}>
          <div
            className={theme.searchIcon}
            />
          <div
            className={theme.tagsAndInputContainer}
            onKeyDown={onKeyDown}
            >
            <TagsInput
              renderTag={renderTag}
              onlyUnique
              value={tags}
              onChange={onChangeTags}
              renderLayout={renderLayout}
              tagDisplayProp={tagDisplayProp}
              />
            <input
              {...inputProps}
              className={theme.inputField}
              data-hook="autosuggest-input"
              placeholder={shouldShowInputPlaceHolder() ? inputPlaceHolder : ''}
              />
          </div>
        </div>
        <div className={theme.lineSeparator}/>
      </div>
    );
  }
}

export default InputWithTags;
