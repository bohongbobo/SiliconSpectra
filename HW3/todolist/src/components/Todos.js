import React, { Component } from "react";
import Todoitem from "./Todoitem.js";

export default class Todos extends Component {
  render() {
    const { deletetodo, toggleEdit } = this.props;
    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todoitem key={todo.id} todo={todo} deletetodo={deletetodo} toggleEdit={toggleEdit} />
        ))}
      </div>
    );
  }
}
