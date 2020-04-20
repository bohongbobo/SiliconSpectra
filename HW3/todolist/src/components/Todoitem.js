import React, { Component } from "react";
import "./Todoitem.css";

export default class Todoitem extends Component {
  render() {
    const { todo, deletetodo, toggleEdit } = this.props;
    return (
      <div className="todos collection">
        <div className="collection-item center row">
          <h5 className="col s12 m8 l8">{todo.content}</h5>
          <button
            className="col s12 m2 l2 waves-effect waves-light btn-large"
            onClick={() => toggleEdit(todo.id)}
          >
            Edit
          </button>

          <button
            className="col s12 m2 l2 waves-effect waves-light btn-large"
            onClick={() => deletetodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
