import React, { Component } from "react";
import { Link, Router } from "react-router-dom";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Navbar from "./navbar";
import Birthday from "./birthday";
import Hr from "./hr";
import { fetchEvents } from "../actions/actions";
import {
  faCheckCircle,
  faPlusCircle,
  faPenSquare
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle, faCheckCircle, faPenSquare);

class BirthdayList extends Component {
  async componentDidMount() {
    this.props.onFetchEvents();
  }
  render() {
    const divStyle = {
      padding: "5px"
    };
    const addStyle = {
      color: "red",
      fontSize: "50px",
      position: "fixed",
      right: "20px",
      bottom: "15px"
    };
    const { todays, thisWeek, other } = this.props.events;
    return (
      <div>
        <Navbar history={this.props.history} title="Birthday List" />
        <div className="container">
          <div style={divStyle}>
            <b>TODAY</b>{" "}
            <span className="badge badge-success text-sm">
              {todays.eventsCount}
            </span>
          </div>
          {todays.events.map(event => {
            const { Messages } = event;
            const status = Messages.length
              ? Messages[0].draft
                ? "done"
                : "saved"
              : "add";
            return (
              <Birthday key={event.id} name={event.target} status={status} />
            );
          })}
          <div style={divStyle}>
            <b>TOMORROW</b>{" "}
            <span className="badge badge-success text-sm">
              {thisWeek.eventsCount}
            </span>
          </div>
          <Hr />
          {thisWeek.events.map(event => {
            const { Messages } = event;
            const status = Messages.length
              ? Messages[0].draft
                ? "done"
                : "saved"
              : "add";
            return (
              <Birthday key={event.id} name={event.target} status={status} />
            );
          })}
          <div style={divStyle}>
            <b>THIS MONTH</b>{" "}
            <span className="badge badge-success text-sm">
              {other.eventsCount}
            </span>
          </div>
          <Hr />
          {other.events.map(event => {
            const { Messages } = event;
            const status = Messages.length
              ? Messages[0].draft
                ? "done"
                : "saved"
              : "add";
            return (
              <Birthday key={event.id} name={event.target} status={status} />
            );
          })}
        </div>
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon
            onClick={e => {
              this.props.history.push("/create-birthday");
            }}
            style={addStyle}
            icon="plus-circle"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //   console.log("state", state);
  return { events: state.events };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchEvents: () => {
      dispatch(fetchEvents());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayList);
