import React, { Component } from "react";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2, ItemName: "Handfree" },
      { id: 2, value: 0, ItemName: "Mouse" }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handledelete = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value < 0) {
    } else {
      this.setState({ counters });
    }
  };
  handleRest = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  cus() {
    const v1 = this.state.counters[0].value;
    const v2 = this.state.counters[1].value;
    const fintalval = v1 + v2;
    return fintalval;
  }
  render() {
    this.cus();
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-dark">
          <h1 className="mainTitle">Counter App</h1>
          <h1 className="mainTitle">Total Items : {this.cus()}</h1>
        </nav>
        <div className="container">
          <Counters
            onRest={this.handleRest}
            onDelete={this.handledelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </div>
      </div>
    );
  }
}

export default App;
