import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["take the dog out", "wash the dishes", "code"],
    };
  }

  render() {
    let try2 = this.state.items;
    const try3 = try2.map((item) => <li>{item}</li>);

    return (
      <div>
        <label>Tasks</label>
        <input type="text"></input>
        <button type="submit">Add</button>
        <ul>{try3}</ul>
      </div>
    );
  }
}

export default Overview;
