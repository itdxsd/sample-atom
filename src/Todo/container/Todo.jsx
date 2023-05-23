import React from "react";
import { TodoInput } from "../components/todo-input/TodoInput";
import TodoList from "../components/todo-list/TodoList";
import "./Todo.css";
import { useTodo } from "./useTodo";

const Todo = () => {
  const { todos, addTodo, deleteTodo, toggleCompleteTodo } = useTodo();

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleComplete={toggleCompleteTodo}
      />
    </div>
  );
};

export { Todo };
