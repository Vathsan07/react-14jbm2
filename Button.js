import React, { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component
{
  render()
  {
    return(
      <div onClick={this.props.onClick}>
            {this.props.label}
            </div>

    )
  }
}
export default Button;