import React, {cloneElement, Component, PropTypes, Children} from 'react';

import CodeExample from '../CodeExample';

export default class InteractiveCodeExample extends Component {

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      code: '',
    };

    this.onCodeChange = this.onCodeChange.bind(this);
  }

  onCodeChange(code) {
    if (code !== this.state.code) {
      this.setState({code});
    }
  }

  render() {
    const childrenWithOnChange = Children.map(this.props.children,
      child => cloneElement(child, {onChange: this.onCodeChange})
    );

    return (
      <CodeExample
        title={this.props.title}
        code={this.state.code}
        codeType="html"
        autoExpand
        >
        {childrenWithOnChange}
      </CodeExample>
    );
  }

}
