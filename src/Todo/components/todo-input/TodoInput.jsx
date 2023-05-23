import React from "react";
import "./TodoInput.css";
import { useTodoInput } from "./useTodoInput";

const TodoInput = ({ onAddTodo }) => {
  const {
    disabled,
    inputValue,
    handleInputChange,
    handleSubmit
  } = useTodoInput(onAddTodo);

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a todo"
      />
      <button
        className={`add-button ${disabled ? "disabled" : ""}`}
        disabled={disabled}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export { TodoInput };
