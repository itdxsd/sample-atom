import { useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const id = Date.now();
    const newTodo = { id, title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todo) => {
    const { id } = todo;
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos([...updatedTodos]);
  };

  const toggleCompleteTodo = (todo) => {
    const { id } = todo;
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todoItem;
    });
    setTodos([...updatedTodos]);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleCompleteTodo
  };
};

export { useTodo };
