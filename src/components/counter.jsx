import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1
  };
  styles = {
    fontSize: 20,
    fontWeight: 'bold',
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.classNameProducer()}>
          {this.formatCount()}
        </span>
        <button className="">Incriment</button>
      </React.Fragment>
    );
  }
classNameProducer(){
  let clasName="badge badge-";
  return this.state.count === 0 ? clasName+'warning' : clasName+'secondary';
}
  formatCount() {
    const { count } = this.state;
    return count == 0 ? <h1>zero</h1> : count;
  }
}

export default Counter;
