import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const { completed, title, id } = todo;

  return (
    <li key={id} className={`todo-item ${completed ? "completed" : ""}`}>
      <span className={`todo-title ${completed ? "completed" : ""}`}>
        {title}
      </span>
      <button onClick={onDelete}>Delete</button>
      <button className={"completed-button"} onClick={onToggleComplete}>
        {completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
    </li>
  );
};

export { TodoItem };
