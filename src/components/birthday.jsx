import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faCheckCircle,
  faPlusCircle,
  faPenSquare
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle, faCheckCircle, faPenSquare);

class Birthday extends Component {
  render() {
    const container = {
      display: "flex",
      justifyContent: "space-between"
    };
    const { name = "John Doe", status = "add" } = this.props;

    let icon;
    let color;
    switch (status) {
      case "add":
        icon = "plus-circle";
        color = "black";
        break;

      case "done":
        icon = "check-circle";
        color = "green";
        break;

      case "saved":
        icon = "pen-square";
        color = "#8a6d15";
        break;

      default:
        break;
    }
    return (
      <div style={container}>
        <span>{name}</span>
        <FontAwesomeIcon style={{ color }} icon={icon} />
      </div>
    );
  }
}

export default Birthday;
