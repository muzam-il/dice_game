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
  render() {
    return (
      <>
        {this.state.counters.map(item => (
          <Counter key={item.id} value={item.value} selected={item.selected} />
        ))}
      </>
    );
  }
}

export default Counters;
