import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <div class="ui container">
        <h1 class="ui center aligned header">File Upload</h1>
        <Main />
      </div>
    );
  }
}

export default App;
