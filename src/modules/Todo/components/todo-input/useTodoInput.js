import { useState } from "react";

const useTodoInput = (onAddTodo) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    clearInput();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setDisabled(value.trim() === "");
  };

  const clearInput = () => {
    setInputValue("");
    setDisabled(true);
  };

  return {
    disabled,
    inputValue,
    handleInputChange,
    handleSubmit
  };
};

export { useTodoInput };
