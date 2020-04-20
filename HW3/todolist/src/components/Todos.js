import React, { Component } from "react";
import Todoitem from "./Todoitem.js";

export default class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todoitem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}
