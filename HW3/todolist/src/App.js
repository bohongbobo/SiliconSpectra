import React, { Component } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo.js";
import Todos from "./components/Todos.js";

export default class App extends Component {
  state = {
    todos: [],
  };

  addtodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
    console.log(this.state.todos);
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center cyan-text">TodoList</h1>
        <Addtodo addtodo={this.addtodo} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
