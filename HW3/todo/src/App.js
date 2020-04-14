import React, { Component } from "react";
import "./App.css";
import Addtodos from "./components/Addtodos.js";
import Todos from "./components/Todos.js";
import Search from "./components/Search.js";
import uuid from "react-uuid";
import Nav from "./components/Nav.js";
import Process from "./components/Process.js";
import Done from "./components/Done.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    searchField: "",
    todos: [],
    id: uuid(),
    content: "",
    editContent: false,
    compeleted: false,
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
        compeleted: false,
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
        compeleted: false,
        id: id,
      });
    }
  };

  toggleCompelete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, compeleted: !todo.compeleted };
        } else {
          return todo;
        }
      }),
    });
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
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Todos
                todos={filteredTodos}
                toggleCompelete={this.toggleCompelete}
                deleteTodo={this.deleteTodo}
                handleEdit={this.handleEdit}
              />
            </Route>
            <Route path="/process">
              <Process
                todos={filteredTodos}
                toggleCompelete={this.toggleCompelete}
                deleteTodo={this.deleteTodo}
                handleEdit={this.handleEdit}
              />
            </Route>
            <Route path="/done">
              <Done />
            </Route>
          </Switch>
        </Router>
        <div className="center cyan-text">
          You have {this.state.todos.filter((todo) => !todo.compeleted).length} todos left!
        </div>
      </div>
    );
  }
}

export default App;
