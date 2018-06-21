import React, { Component } from 'react';

class InputButton extends Component {
  render() {
    return (
      <button className="input-box" onClick={this.props.result} >{this.props.value}</button>
    );
  }
}

export default InputButton;