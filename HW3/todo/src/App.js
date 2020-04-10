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

  // addTodo = (todo) => {
  //   todo.id = uuid();
  //   let todos = [...this.state.todos, todo];
  //   this.setState({
  //     todos,
  //   });
  //   // console.log(todo);
  // };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.content !== "") {
      const newTodo = {
        id: this.state.id,
        content: this.state.content,
      };

      const updtaeTodos = [...this.state.todos, newTodo];
      this.setState({
        todos: updtaeTodos,
        id: uuid(),
        content: "",
        editContent: false,
      });
    }
  };

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

  handleEdit = (id) => {
    if (this.state.content === "") {
      const todos = this.state.todos.filter((todo) => {
        return todo.id !== id;
      });
      const selectedContent = this.state.todos.find((item) => item.id === id);

      this.setState({
        todos,
        content: selectedContent.content,
        editContent: true,
        id: id,
      });
    }
  };

  render() {
    const filteredTodos = this.state.todos.filter((todo) => {
      return todo.content.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="todo-app container">
        <h1 className="center cyan-text">TO DO LIST</h1>
        {/* <Addtodos
          addTodo={this.addTodo}
          editContent={this.state.editContent}
          content={this.state.content}
        /> */}
        <Addtodos
          editContent={this.state.editContent}
          content={this.state.content}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Search searchChange={this.onSearchChange} />
        <Todos todos={filteredTodos} deleteTodo={this.deleteTodo} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default App;
