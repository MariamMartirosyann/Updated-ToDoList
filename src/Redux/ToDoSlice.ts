import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDoList, IToDoItem, AddItemPayload, EditItemPayload, ToggleDonePayload, DeleteItemPayload } from "./interfaces";
import { defaultList } from "./constants";

const initialState: IToDoList = {
  list: defaultList,
};


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      const newToDo: IToDoItem = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        deadline: action.payload.deadline,
        done: false,
      };
      state.list.push(newToDo);
    },

    editItem: (state, action: PayloadAction<EditItemPayload>) => {
      const { id, title, description,deadline, done } = action.payload;
      const index = state.list.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.list[index] = { id, title, description,deadline, done };
      }
    },

    toggleDone: (state, action: PayloadAction<ToggleDonePayload>) => {
      const index = state.list.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.list[index].done = action.payload.done;
      }
    },

    deleteItem: (state, action: PayloadAction<DeleteItemPayload>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addItem, editItem, toggleDone, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
