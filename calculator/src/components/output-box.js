import React, { Component } from 'react';

class OutputBox extends Component {
  render() {
    return (
      <input className="output-box" type="text" disabled="disabled" value={this.props.result} />
    );
  }
}

export default OutputBox;