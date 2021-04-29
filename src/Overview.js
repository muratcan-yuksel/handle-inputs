import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["take the dog out", "wash the dishes", "code"],
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleItems = this.handleItems.bind(this);
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleItems = (event) => {
    this.setState({
      items: this.state.items.push(this.state.value),
    });
    console.log(this.state.value);
  };

  render() {
    let try2 = this.state.items;
    const try3 = try2.map((item) => <li>{item}</li>);

    return (
      <div>
        <label>Tasks</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <button type="submit" onClick={this.handleItems}>
          Add
        </button>
        <ul>{try3}</ul>
      </div>
    );
  }
}

export default Overview;
