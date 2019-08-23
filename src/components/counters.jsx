import React, { Component } from "react";
import Counter from "./counter";
import ReactDOM from "react-dom";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <>
        <button onClick={onReset} className="btn m-2 btn-dark btn-lg">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={id => onDelete(id)}
            onIncrement={id => onIncrement(id)}
          />
        ))}
      </>
    );
  }
}

export default Counters;
