import React from "react";
import "./Todos.css";
import { Component } from "react";
// import uuid from "react-uuid";

class Todos extends Component {
  state = {
    order: 1,
    content: "",
  };

  setUpdate = (e, id) => {
    console.log(e.target.value);
    console.log(this.props.todos);
    console.log(id);
    this.setState({
      order: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  render() {
    const { todos, onEdit, deleteTodo, toggleCompelete } = this.props;
    const todoList = todos.length ? (
      todos.map((todo) => {
        return (
          <div className="collection-item center row" key={todo.id}>
            <div>
              <input
                id={todo.id}
                className="col s12 m2 l2"
                type="text"
                value={this.state.order}
                onChange={this.setUpdate}
                placeholder="Enter the Priority"
              />

              {todo.editContent === true ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    margin: "0",
                  }}
                >
                  <input type="text" value={todo.content} onChange={this.handleChange} />
                  <button
                    style={{
                      width: "5rem",
                      background: "#76D7C4",
                      borderRadius: "20px",
                    }}
                    //onClick={}
                  >
                    Save
                  </button>
                  <button
                    style={{
                      width: "5rem",
                      background: "#76D7C4",
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      onEdit(todo.id);
                    }}
                  >
                    Cancle
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    margin: "0",
                  }}
                >
                  <h5
                    style={{ textDecoration: todo.compeleted ? "line-through" : "" }}
                    onClick={() => {
                      toggleCompelete(todo.id);
                    }}
                  >
                    {todo.content}
                  </h5>
                  <button
                    style={{
                      width: "5rem",
                      background: "#76D7C4",
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      onEdit(todo.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      width: "5rem",
                      background: "#76D7C4",
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })
    ) : (
      <p className="center cyan-text">You have no todos left, Yay!!!</p>
    );
    return <div className="todos collection">{todoList}</div>;
  }
}

export default Todos;
