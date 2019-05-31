import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Hr from "./hr";
import TextArea from "./textArea";
import Button from "./button";

class NewMessage extends Component {
  render() {
    const { name = "Karl M", date = "12/04/2000" } = this.props;
    return (
      <div>
        <Navbar title="New Message" />
        <div
          className="container"
          style={{ background: "#f5f5f5", color: "#000", alignText: "center" }}
        >
          <div
            className="row"
            style={{
              padding: "10px 25px 10px 20px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div>
              <span style={{ color: "#888" }}>Send to: </span> <br />
              <span>{name} </span>
            </div>
            <div>
              <span style={{ color: "#888" }}>Sending date: </span> <br />
              <span>{date} </span>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <p className="text">Compose your Birthday message here:</p>
          <Hr />
          <TextArea height="370px" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px"
          }}
        >
          <Button color="secondary">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                height: "100%"
              }}
            >
              Save
            </Link>
          </Button>

          <Button color="success">
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                height: "100%"
              }}
            >
              Done
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default NewMessage;
