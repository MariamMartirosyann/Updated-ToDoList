import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToDoItem } from './interfaces';

const initialState: IToDoItem[] = [];

const trashSlice = createSlice({
  name: 'trash',
  initialState,
  reducers: {
    moveToTrash: (state, action: PayloadAction<IToDoItem>) => {
      state.push(action.payload);
    },
    restoreItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    deletePermanently: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { moveToTrash, restoreItem, deletePermanently } = trashSlice.actions;
export default trashSlice.reducer;
