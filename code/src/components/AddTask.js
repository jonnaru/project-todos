import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";

export const AddTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (inputValue.match(/\S+/)) {
      dispatch(
        todos.actions.addTask({
          text: inputValue,
          complete: false,
        })
      );
    }

    // reset value
    setInputValue("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        placeholder="new task"
        area-label="Type task here"
      />
      <button type="submit" aria-label="Add task">
        +
      </button>
    </form>
  );
};