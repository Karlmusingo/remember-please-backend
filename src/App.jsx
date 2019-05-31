import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="app">
        <div className="title">
          <h3>REMEMBER PLEASE</h3>
          <span> NEVER FORGET A BIRTHDAY AGAIN</span>
        </div>
        <div className="start col-10 .ml-2 col-offset-2">
          <Link to="/home">
            <button className="btn col-12 btn-lg btn-success">START</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
