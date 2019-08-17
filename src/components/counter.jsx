import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  styles = {
    fontSize: 20,
    fontWeight: bold
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge  badge-primary   m-2">
          {this.formatCount()}
        </span>
        <button className="btn btm-secondary btn-sm">Incriment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? <h1>zero</h1> : count;
  }
}

export default Counter;
