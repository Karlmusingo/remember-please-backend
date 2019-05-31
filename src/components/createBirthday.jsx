import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Input from "./input";
import Button from "./button";
import Hr from "./hr";
import TextArea from "./textArea";
import { addEvent } from "../actions/actions";

class CreateBirthday extends Component {
  state = {
    name: "Karl Musingo",
    date: "04/12",
    whatsappNumber: "+243977849995",
    message: "This is it"
  };
  handleSubmit = async event => {
    const res = await this.props.onAddEvent(event);
    console.log("res: post", res);
    this.props.history.push("/home");
  };
  render() {
    return (
      <div>
        <Navbar history={this.props.history} title="New Birthday" />
        <div
          className="container"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Input
              onChange={e => {
                this.setState({ ...this.state, name: e.target.value });
              }}
              placeholder="Name"
              name="name"
              label="Name"
            />
            <Input
              onChange={e => {
                this.setState({ ...this.state, date: e.target.value });
              }}
              placeholder="30/12"
              name="date"
              label="Date"
            />
            <Input
              onChange={e => {
                this.setState({
                  ...this.state,
                  whatsappNumber: e.target.value
                });
              }}
              placeholder="+250781959044"
              name="whatsappNumber"
              label="Whatsapp Number"
            />

            <Hr />
            <p className="text">Compose your Birthday message here:</p>
            <Hr />
            <TextArea
              onChange={e => {
                this.setState({
                  ...this.state,
                  message: e.target.value
                });
              }}
              height="200px"
            />
            {/* <Link to="/new-message"> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "15px"
              }}
            >
              {/* <Button color="secondary" text="Save" /> */}

              <button
                onClick={e => {
                  this.handleSubmit(this.state);
                }}
                className="btn col-5 btn-lg btn-success"
              >
                Done
              </button>
            </div>
            {/* </Link> */}
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddEvent: event => {
      return dispatch(addEvent(event));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateBirthday);
