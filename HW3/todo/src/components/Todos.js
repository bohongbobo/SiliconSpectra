import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item center" key={todo.id}>
          <span
            className="cyan-text"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center cyan-text">You have no todos left, Yay!!!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
