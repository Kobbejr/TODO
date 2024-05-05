import React from "react";

const TodoList = ({ todos, onRemoveTodo, onToggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <div>
            <button
              class="completeButton"
              onClick={() => onToggleTodo(todo.id)}
            >
              Completed
            </button>
            <button class="removeButton" onClick={() => onRemoveTodo(todo.id)}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
