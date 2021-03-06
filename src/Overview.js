import React, { Component } from "react";
import uniqid from "uniqid";
class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      input: {
        task: "",
        id: uniqid(),
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleItems = this.handleItems.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      input: {
        task: event.target.value,
        id: this.state.input.id,
      },
    });
  };
  handleItems = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
      input: {
        task: "",
        id: uniqid(),
      },
    });
    console.log(this.state.input);
  };

  handleDelete = (id, e) => {
    let filtered = this.state.items.filter(function (el) {
      return el != id;
    });
    console.log(filtered);
    this.setState({
      items: filtered,
    });
  };

  render() {
    let myArray = this.state.items;
    const arrayList = myArray.map((item, index) => (
      <div key={item.id}>
        <li> {index + 1 + " " + item.task}</li>
        <button onClick={this.handleDelete.bind(this, item)}>
          Delete item
        </button>
      </div>
    ));

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
