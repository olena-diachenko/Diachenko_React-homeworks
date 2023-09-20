import { createSlice } from '@reduxjs/toolkit';
import generateUniqueId from '../../util/functions';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      const dataToSave = { ...payload, id: generateUniqueId() };
      state.todos.push(dataToSave);
    },

    deleteStorage: state => {
      state.todos = [];
    },

    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter(item => item.id !== payload.id);
    },

    completedTodo: (state, { payload }) => {
      const itemToChange = state.todos.find(item => item.id === payload);
      itemToChange.isCompleted = !itemToChange.isCompleted;
    },
  },
});

export const { addTodo, deleteStorage, removeTodo, completedTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
