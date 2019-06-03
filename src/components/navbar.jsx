import React, { Component } from "react";
import { Link, Router } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ background: "#ffc3b8", color: "#fff", alignText: "center" }}
      >
        <div
          className="row"
          style={{
            padding: "10px 25px 0px 20px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div style={{ color: "#fff" }}>
            <p
              onClick={e => {
                this.props.history.push("/home");
              }}
              id="btn-cancel"
            >
              Cancel
            </p>
          </div>
          <div>
            <span> {this.props.title || ""} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
