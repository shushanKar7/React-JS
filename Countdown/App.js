import React from "react";
import { Component } from "react";
import "./App.css";
import Countdown from "./Countdown";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return <Countdown date={`${year}-12-31T00:00:00`} />;
  }
}

export default App;
