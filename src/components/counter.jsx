import React, { Component } from "react";
class Counter extends Component {
  render() {
    const { onDelete, onIncrement, counter } = this.props;
    return (
      <div className="pt-3 offset-1 pl-1">
        <span
          style={{ fontSize: 18 }}
          className={this.classNameProducer() + " p-2 col-1 m-1"}
        >
          {this.formatCount()}
        </span>
        <button onClick={() => onIncrement(counter.id)} className={this.incr()}>
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  incr = () => {
    let clss = "btn m-1  btn-";
    return this.props.counter.selected ? clss + "success" : clss + "warning";
  };
  classNameProducer() {
    let clasName = "badge badge-";
    return this.props.counter.value === 0
      ? clasName + "warning"
      : clasName + "secondary";
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
