import React, { Component } from "react";
import "./Addtodos.css";

class Addtodos extends Component {
  // handleChange = (e) => {
  //   this.setState({
  //     content: e.target.value,
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.props.content !== "") {
  //     this.props.addTodo(this.state);
  //     this.setState({
  //       content: "",
  //     });
  //   }
  // };

  render() {
    const { handleSubmit, handleChange, editContent } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit} className="row">
          <div className="col s12 m8 l10">
            <label>Add new todo: </label>
            <input
              type="text"
              className="white-text"
              onChange={handleChange}
              value={this.props.content}
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
            {editContent ? "Done" : "add"}
          </button>
        </form>
      </div>
    );
  }
}

export default Addtodos;
