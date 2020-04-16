import React, { Component } from "react";
import "./App.css";
import Addtodos from "./components/Addtodos.js";
import Todos from "./components/Todos.js";
import Search from "./components/Search.js";
import uuid from "react-uuid";
import Nav from "./components/with_Router/Nav.js";
// import Process from "./components/with_Router/Process.js";
// import Done from "./components/with_Router/Done.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    searchField: "",
    todos: [{ id: "unique", content: "aodnainds" }],
    // order: "",
    id: uuid(),
    content: "",
    editContent: false,
    compeleted: false,
    todosToShow: "All",
  };

  addTodo = (todo) => {
    todo.id = uuid();
    todo.order = 1;
    let todos = [...this.state.todos, todo];
    console.log(this.state.editContent);
    this.setState({
      todos,
    });
    // console.log(todo);
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
  //       order: this.state.order,
  //       id: this.state.id,
  //       content: this.state.content,
  //     };

  //     const updtaeTodos = [...this.state.todos, newTodo];
  //     this.setState({
  //       todos: updtaeTodos,
  //       id: uuid(),
  //       content: "",
  //       editContent: false,
  //       compeleted: false,
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

  // handleEdit = (id) => {
  //   // console.log(id);
  //   if (this.state.content === "") {
  //     const todos = this.state.todos.filter((todo) => {
  //       return todo.id !== id;
  //     });
  //     const selectedContent = this.state.todos.find((item) => item.id === id);
  //     console.log(selectedContent);

  //     this.setState({
  //       todos,
  //       content: selectedContent.content,
  //       editContent: true,
  //       compeleted: false,
  //       id: id,
  //     });
  //   }
  // };

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

  onEdit = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo.editContent);
          return { ...todo, editContent: !todo.editContent };
        } else {
          return todo;
        }
      }),
    });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      content: e.target.value,
    });
  };

  updateToShow = (tar) => {
    this.setState({
      todosToShow: tar,
    });
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "processing") {
      todos = this.state.todos.filter((todo) => !todo.compeleted);
    } else if (this.state.todosToShow === "done") {
      todos = this.state.todos.filter((todo) => todo.compeleted);
    }

    const filteredTodos = todos.filter((todo) => {
      return todo.content.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    const beforeFilteredTodos = this.state.todos.filter((todo) => {
      return todo.content.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="todo-app container">
        <h1 className="center cyan-text">TO DO LIST</h1>

        <Addtodos
          editContent={this.state.editContent}
          content={this.state.content}
          addTodo={this.addTodo}
          /* handleChange={this.handleChange} */
          /* handleSubmit={this.handleSubmit} */
        />
        <Search searchChange={this.onSearchChange} />
        {/* with Router  */}
        <Router>
          <Nav updateToShow={this.updateToShow} />
          <Switch>
            <Route exact path="/">
              <Todos
                todos={beforeFilteredTodos}
                onEdit={this.onEdit}
                handleChange={this.handleChange}
                toggleCompelete={this.toggleCompelete}
                deleteTodo={this.deleteTodo}
                handleEdit={this.handleEdit}
              />
            </Route>
            <Route path="/all">
              <Todos
                todos={filteredTodos}
                onEdit={this.onEdit}
                handleChange={this.handleChange}
                toggleCompelete={this.toggleCompelete}
                deleteTodo={this.deleteTodo}
                handleEdit={this.handleEdit}
              />
            </Route>
            <Route path="/process">
              <Todos
                todos={filteredTodos}
                onEdit={this.onEdit}
                handleChange={this.handleChange}
                toggleCompelete={this.toggleCompelete}
                deleteTodo={this.deleteTodo}
                handleEdit={this.handleEdit}
              />
            </Route>
            <Route path="/done">
              <Todos
                todos={filteredTodos}
                onEdit={this.onEdit}
                handleChange={this.handleChange}
                toggleCompelete={this.toggleCompelete}
                deleteTodo={this.deleteTodo}
                handleEdit={this.handleEdit}
              />
            </Route>
          </Switch>
        </Router>
        {/* <h3>Without Router blow</h3>
        {/* without Router 
        <div className="button">
          <button onClick={() => this.updateToShow("all")}>All</button>
          <button onClick={() => this.updateToShow("processing")}>Processing</button>
          <button onClick={() => this.updateToShow("done")}>Done</button>
        </div>

        <Todos
          todos={filteredTodos}
          toggleCompelete={this.toggleCompelete}
          deleteTodo={this.deleteTodo}
          handleEdit={this.handleEdit}
        /> */}
        <div className="center cyan-text">
          You have {this.state.todos.filter((todo) => !todo.compeleted).length} todos left!
        </div>
      </div>
    );
  }
}

export default App;
