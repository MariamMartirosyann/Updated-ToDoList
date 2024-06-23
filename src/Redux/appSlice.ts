import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showToDoList: true,
    showTrash: false,
  },
  reducers: {
    hideToDoList: (state) => {
      state.showToDoList = false;
    },
    showToDoList: (state) => {
      state.showToDoList = true;
    },
  },
});

export const { hideToDoList, showToDoList } = appSlice.actions;
export default appSlice.reducer;
