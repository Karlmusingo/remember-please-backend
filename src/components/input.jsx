import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, placeholder, label, onChange } = this.props;
    return (
      <div className="form-group">
        <label style={{ marginLeft: "10px", marginBottom: "-18px" }}>
          {label}
        </label>
        <input
          style={{ border: "none", borderBottom: "2px solid #f5f5f5" }}
          className="form-control"
          type="text"
          onChange={onChange}
          name={name}
          id={name}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Input;
