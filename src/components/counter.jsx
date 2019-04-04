import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faPlusSquare, faMinusSquare);
export default class counter extends Component {
  state = {
    tags: [{}]
  };
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  renderTags() {
    console.log("props", this.props);
    if (this.state.tags.length === 0) return <p>There Are no tags..!</p>;
    return (
      <div className="AddWrapper">
        <p>
          Item Name:{" "}
          <span
            class="badge badge-pill badge-info"
            style={{ fontSize: "20px;" }}
          >
            {this.props.counter.ItemName}
          </span>
        </p>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3 style={{ textAlign: "left" }}>
              <span
                className={this.getBadgeClassess()}
                style={{ padding: "10px 20px" }}
              >
                {this.formatCount()}
              </span>
            </h3>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              Add&nbsp;
              <FontAwesomeIcon icon="plus-square" />
            </button>
          </div>
          <div className="col-md-4">
            <button
              onClick={() => this.props.onDelete(this.props.counter)}
              type="button"
              className="btn btn-danger"
            >
              Delete&nbsp;
              <FontAwesomeIcon icon="minus-square" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please Create a New Tag..!"}
        {this.renderTags()}
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClassess() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
