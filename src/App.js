import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

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
        <NavBar />
        {console.log(this.state.counters)}
        <Counters
          counters={this.state.counters}
          onIncrement={() => this.handleIncrement}
          onDelete={() => this.handleDelete}
          onReset={() => this.handleReset}
        />
      </>
    );
  }
  handleDelete = id => {
    console.log("Delete button clicked", id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = this.state.counters.map(c => {
      if (c === counter) {
        c.value += 1;
      }
      return c;
    });
    this.setState({ counters });
  };
  handleReset = () => {
    // const counters = this.state.counters.map(c => {
    //   c.value = 0;
    //   return c;
    // });
    // this.setState({ counters: counters });
  };
}
