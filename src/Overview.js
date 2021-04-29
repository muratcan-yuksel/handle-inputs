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
    this.setState({ input: event.target.value });
  };
  handleItems = (event) => {
    this.setState({
      items: [...this.state.items, this.state.input],
    });
    console.log(this.state.input);
  };

  render() {
    let myArray = this.state.items;
    const arrayList = myArray.map((item, index) => <li key={index}>{item}</li>);

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
        <ul>{arrayList}</ul>
      </div>
    );
  }
}

export default Overview;
