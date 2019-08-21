import React, { Component } from "react";
import Counter from "./counter";
import ReactDOM from "react-dom";

class Counters extends Component {
  state = {
    counters: [
      { id: 234131, value: 4, selected: true },
      { id: 244232, value: 0, selected: false },
      { id: 3324542, value: 6, selected: true },
      { id: 34534, value: 7, selected: false },
      { id: 54525, value: 3, selected: true }
    ]
  };
  handleDelete = id => {
    console.log("Delete button clicked", id);
    const counters = this.state.counters.filter(c => c.id != id);
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <button className="btn btn-dark btn-lg">Reset</button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </>
    );
  }
}

export default Counters;
