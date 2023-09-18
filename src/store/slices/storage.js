import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const storageSlice = createSlice({
  name: 'storage',
  initialState: {
    storage: JSON.parse(localStorage.getItem('todo-items')) || [],
  },
  reducers: {
    setData: (state, { payload }) => {
      const dataToSave = { ...payload, id: uuid() };
      state.storage.push(dataToSave);
      localStorage.setItem('todo-items', JSON.stringify(state.storage));
    },

    deleteStorage: state => {
      localStorage.clear();
      state.storage = [];
    },

    deleteItem: (state, { payload }) => {
      state.storage = state.storage.filter(item => item.id !== payload.id);
      localStorage.setItem('todo-items', JSON.stringify(state.storage));
    },

    completedItem: (state, { payload }) => {
      const itemToChange = state.storage.find(item => item.id === payload.id);
      const itemIndex = state.storage.indexOf(itemToChange);
      state.storage.splice(itemIndex, 1, payload);
      localStorage.setItem('todo-items', JSON.stringify(state.storage));
    },
  },
});

export const { setData, deleteStorage, deleteItem, completedItem } =
  storageSlice.actions;

export default storageSlice.reducer;
