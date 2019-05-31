import React, { Component } from "react";

class TextAreA extends Component {
  render() {
    const { height, value, onChange } = this.props;
    return (
      <textarea
        className="form-control"
        style={{
          border: "none",
          borderBottom: "2px solid #f5f5f5",
          height: height
        }}
        name="message"
        value={value}
        onChange={onChange}
        placeholder="My message"
      />
    );
  }
}

export default TextAreA;
