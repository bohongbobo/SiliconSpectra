import React, { Component } from "react";
import "./App.css";
import Addtodos from "./components/Addtodos.js";
import Todos from "./components/Todos.js";
import Search from "./components/Search.js";
import uuid from "react-uuid";

class App extends Component {
  state = {
    searchField: "",
    todos: [],
    id: uuid(),
    content: "",
    editContent: false,
  };

  addTodo = (todo) => {
    todo.id = uuid();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
    console.log(todo);
  };

  // handleChange = (e) => {
  //   this.setState({
  //     content: e.target.value,
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (this.state.content !== "") {
  //     const newTodo = {
  //       id: this.state.id,
  //       content: this.state.content,
  //     };

  //     const updtaeTodos = [...this.state.todos, newTodo];
  //     this.setState({
  //       todos: updtaeTodos,
  //       id: uuid(),
  //       content: "",
  //       editContent: false,
  //     });
  //   }
  // };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

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
