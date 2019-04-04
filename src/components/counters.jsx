import React, { Component } from "react";
import Counter from "./counter";

export default class counters extends Component {
  render() {
    return (
      <div className="mainw">
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
        <button
          type="button"
          className="btn btn-info"
          onClick={this.props.onRest}
        >
          Rest&nbsp;
        </button>
      </div>
    );
  }
}
