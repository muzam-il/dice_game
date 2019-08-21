import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  render() {
    return (
      <div className="pt-3 offset-1 pl-1">
        {/* {this.props.children} */}
        <span
          style={{ fontSize: 18 }}
          className={this.classNameProducer() + " p-2 col-1 m-1"}
        >
          {this.formatCount()}
        </span>
        <button onClick={this.increment} className={this.incr()}>
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
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
  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  classNameProducer() {
    let clasName = "badge badge-";
    return this.state.value === 0
      ? clasName + "warning"
      : clasName + "secondary";
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
