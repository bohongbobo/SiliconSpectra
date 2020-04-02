import React, { Component } from "react";
import "./App.css";
import Addtodos from "./components/Addtodos.js";
import Todos from "./components/Todos.js";

class App extends Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    todo.id = Math.random();
    console.log(todo.id);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center cyan-text">TO DO LIST</h1>
        <Addtodos addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
