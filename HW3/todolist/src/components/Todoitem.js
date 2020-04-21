import React, { Component } from "react";
import "./Todoitem.css";

export default class Todoitem extends Component {
  state = {
    content: this.props.todo.content,
    order: this.props.todo.order,
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
    // console.log(e.target.value);
  };

  onChangeOrde = (e) => {
    this.setState({
      order: e.target.value,
    });
    // console.log(e.target.value);
  };

  onSave = () => {
    this.props.saveNewtodo(this.props.todo.id, this.state.content);
  };

  onPress = (e) => {
    if (e.key === "Enter") {
      this.props.saveNewOrder(this.props.todo.id, this.state.order);
    }
    console.log(this.state.order);
  };

  render() {
    const { todo, deletetodo, toggleEdit } = this.props;
    return (
      <div className="todos collection">
        <div className="collection-item center row">
          <input
            className="col s12 m2 l2"
            type="number"
            value={this.state.order}
            onChange={this.onChangeOrde}
            onKeyPress={this.onPress}
          />
          {todo.editContent === true ? (
            <div>
              <input
                className="col s12 m6 l6"
                value={this.state.content}
                onChange={this.handleChange}
                /* onSubmit={() => this.onSave(todo.id, todo.content)} */
              ></input>
              <button
                className="col s12 m2 l2 waves-effect waves-light btn-large"
                onClick={() => this.onSave(todo.id, todo.content)}
              >
                Save
              </button>

              <button
                className="col s12 m2 l2 waves-effect waves-light btn-large"
                onClick={() => toggleEdit(todo.id)}
              >
                Cancle
              </button>
            </div>
          ) : (
            <div>
              <h5 className="col s12 m6 l6">{todo.content}</h5>
              <button
                className="col s12 m2 l2 waves-effect waves-light btn-large"
                onClick={() => toggleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="col s12 m2 l2 waves-effect waves-light btn-large"
                onClick={() => deletetodo(todo.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
