import React from "react";
import "./Todos.css";

const Todos = ({ todos, deleteTodo, setUpdate }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item center row" key={todo.id}>
          <div>
            {/* <h5>
              <input
                className="col s12 m4 l3 order"
                type="text"
                value={todo.order}
                onChange={(e) => {
                  setUpdate(e.target.value);
                }}
              />
            </h5> */}
            <h5
              className="cyan-text col s12 m8 l10"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              {todo.content}
            </h5>
            <button
              className="col s12 m4 l2 waves-effect waves-light btn-large"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <p className="center cyan-text">You have no todos left, Yay!!!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
