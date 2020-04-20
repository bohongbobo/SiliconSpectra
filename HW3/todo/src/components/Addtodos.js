import React, { Component } from "react";
import "./Addtodos.css";

class Addtodos extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content !== "") {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
      });
    }
    console.log(this.state.todos);
  };

  render() {
    const { editContent } = this.props;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <form onSubmit={handleSubmit} className="row">
          <div className="col s12 m8 l10">
            <label>Add new todo: </label>
            <input
              type="text"
              className="white-text"
              onChange={handleChange}
              value={this.state.content}
            />
          </div>
          <button
            className={
              editContent
                ? "col s12 m4 l2 waves-effect waves-light btn-large green"
                : "col s12 m4 l2 waves-effect waves-light btn-large "
            }
            onSubmit={handleSubmit}
          >
            {editContent ? "Done" : "Add"}
          </button>
        </form>
      </div>
    );
  }
}

export default Addtodos;
