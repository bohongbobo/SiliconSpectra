import React, { Component } from "react";

export default class Todoitem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div className="todos collection">
        <div className="collection-item center row">
          <h5 className="col s12 m8 l10">{todo.content}</h5>
          <button className="col s12 m4 l2 waves-effect waves-light btn-large">Delete</button>
        </div>
      </div>
    );
  }
}
