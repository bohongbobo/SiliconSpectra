import React, { Component } from "react";
import "./App.css";
import Addtodos from "./components/Addtodos.js";
import Todos from "./components/Todos.js";
import Search from "./components/Search.js";

class App extends Component {
  state = {
    searchField: "",
    todos: [
      {
        id: 1,
        order: 1,
        content: "This is a test",
      },
      {
        id: 2,
        order: 1,
        content: "This is a test too!",
      },
    ],
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    console.log(todo.id);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  // onSearchChange = event => {
  //   this.setState({
  //     searchField: event.target.value
  //   });
  // };
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    // console.log(searchField);
  };

  setUpdate = (order, id) => {
    console.log(order);
    // const todos = this.state.todos.map((todo) => {
    //   console.log(todo.order);

    //   return todo.id === id ? (todo.order = order) : todo;
    // });
    // this.setState({
    //   todos,
    // });
  };

  render() {
    const filteredTodos = this.state.todos.filter((todo) => {
      return todo.content.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="todo-app container">
        <h1 className="center cyan-text">TO DO LIST</h1>
        <Addtodos addTodo={this.addTodo} />
        <Search searchChange={this.onSearchChange} />
        <Todos todos={filteredTodos} deleteTodo={this.deleteTodo} setUpdate={this.setUpdate} />
      </div>
    );
  }
}

export default App;
