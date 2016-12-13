import React, {Component, PropTypes} from 'react';
import Markdown from '../Markdown';

const toCodeBlock = str => `\`\`\`js\n${str}`;
const replaceImportToLibrary = str => str.replace(/from '\.\.\/\.\.\/src/, `from 'wix-style-react`);

export default class CodeBlock extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  render() {
    const source = toCodeBlock(replaceImportToLibrary(this.props.source));

    return (
      <Markdown source={source}/>
    );
  }
}
