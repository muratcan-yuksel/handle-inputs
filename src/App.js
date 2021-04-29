import React, { Component } from "react";
import Overview from "./Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Overview />
      </div>
    );
  }
}

export default App;
