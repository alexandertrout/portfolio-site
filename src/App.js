import React, { Component } from "react";
import "./App.css";
import Top from "./components/Top";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <Main />
      </div>
    );
  }
}

export default App;
