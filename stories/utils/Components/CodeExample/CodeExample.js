import React, {Component, PropTypes} from 'react';
import CodeBlock from '../CodeBlock';

export default class CodeExample extends Component {
  static propTypes = {
    code: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
        <br/>
        <CodeBlock source={this.props.code}/>
      </div>
    );
  }
}
