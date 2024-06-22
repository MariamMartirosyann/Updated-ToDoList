import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showToDoList: true,
    showTrash:false
  },
  reducers: {
    hideToDoList: (state) => {
      state.showToDoList = false;
    },
    showToDoList: (state) => {
      state.showToDoList = true;
    },
    showTrash: (state) => {
      state.showTrash = true;
    },
    hideTrash: (state) => {
      state.showTrash = false;
    },
  },
});

export const{hideToDoList,showToDoList,showTrash,hideTrash}=appSlice.actions
export default appSlice.reducer