import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaks: (state, action) => {
      state.push(action.payload);
    },
    deleteTaks: (state, action) => {
      // console.log(action.payload);
      // const taskFound = state.find((state) => state.id === action.payload);
      // if (taskFound) {
      //   state.splice(state.indexOf(taskFound), 1);
      // }
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },
    editTaks: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
  },
});

export const { addTaks, deleteTaks, editTaks } = taskSlice.actions;

export default taskSlice.reducer;
