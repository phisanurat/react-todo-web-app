// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Todo from "./todo";
import List from "./List";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Todo} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
