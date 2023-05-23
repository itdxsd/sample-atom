import React from "react";
import { TodoItem } from "../todo-item/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo, onToggleComplete }) => {
  return (
    <ul className="list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => onDeleteTodo(todo)}
          onToggleComplete={() => onToggleComplete(todo)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
