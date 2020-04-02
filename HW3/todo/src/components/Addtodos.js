import React, { Component } from "react";
import "./Addtodos.css";

class Addtodos extends Component {
  state = {
    content: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="col s12 m4 l10">
            <label>Add new todo: </label>
            <input
              type="text"
              className="white-text"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <button
            className="col s12 m4 l2 waves-effect waves-light btn-large"
            onSubmit={this.handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Addtodos;
