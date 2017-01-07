import React from 'react';

const TagsComponent = ({tags, renderTag, theme, tagDisplayProp, onRemove}) => {
  const defaultRenderTag = tag => {
    const name = tag[tagDisplayProp];
    return (
      <span className={theme.tag} key={name}>
        {name}
        <a className={theme.tagRemoveButton} onClick={() => onRemove(tag)}/>
      </span>
    );
  };

  return (
    <div className={theme.tagsContainer}>
      {tags.map(tag => renderTag ? renderTag(tag) : defaultRenderTag(tag))}
    </div>
  );
};

TagsComponent.propTypes = {
  tags: React.PropTypes.array.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  renderTag: React.PropTypes.func,
  tagDisplayProp: React.PropTypes.string,
  theme: React.PropTypes.object.isRequired
};

TagsComponent.defaultProps = {
  tagDisplayProp: 'id',
};

export default TagsComponent;
