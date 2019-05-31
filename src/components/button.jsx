import React, { Component } from "react";

class Button extends Component {
  render() {
    const { color, children } = this.props;
    const styleClass = `btn col-5 btn-lg btn-${color}`;
    return <button className={styleClass}>{children}</button>;
  }
}

export default Button;
