import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './ToDoSlice'
import appReducer from "./appSlice"
import trashReducer from './trashSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    app:appReducer,
    trash: trashReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;