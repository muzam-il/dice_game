import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
import { PassThrough } from "stream";

export default class App extends Component {
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
        <NavBar count={this.state.counters.filter(c => c.value > 0).length} />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
  handleIncrement = id => {
    const counters = this.state.counters.map(c => {
      if (c.id === id) {
        c.value = c.value + 1;
      }
      return c;
    });
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
}
