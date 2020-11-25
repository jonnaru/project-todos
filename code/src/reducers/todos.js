import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    username: "Jonna",
    tasks: [
      { id: 1, text: "Get a dog", complete: false, time: "1606335505869" },
      { id: 2, text: "Drink beer", complete: false, time: Date.now() },
      { id: 3, text: "Work out", complete: true, time: Date.now() },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    doneTask: (state, action) => {
      const taskDone = state.tasks.find((item) => item.id === action.payload);
      taskDone.complete = !taskDone.complete;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    removeAllTasks: (state) => {
      state.tasks = [];
    },
    completeAllTasks: (state) => {
      state.tasks = state.tasks.map((item) => {
        return { ...item, complete: true };
      });
    },
  },
});
