import { createSlice } from '@reduxjs/toolkit';
import generateUniqueId from '../../util/functions';

export const storageSlice = createSlice({
  name: 'storage',
  initialState: {
    data: JSON.parse(localStorage.getItem('todo-items')) || [],
  },
  reducers: {
    setData: (state, { payload }) => {
      const dataToSave = { ...payload, id: generateUniqueId() };
      state.data.push(dataToSave);
      localStorage.setItem('todo-items', JSON.stringify(state.data));
    },

    deleteStorage: state => {
      state.data = [];
      localStorage.setItem('todo-items', JSON.stringify(state.data));
    },

    deleteItem: (state, { payload }) => {
      state.data = state.data.filter(item => item.id !== payload.id);
      localStorage.setItem('todo-items', JSON.stringify(state.data));
    },

    completedItem: (state, { payload }) => {
      const itemToChange = state.data.find(item => item.id === payload.id);
      const itemIndex = state.data.indexOf(itemToChange);
      state.data.splice(itemIndex, 1, payload);
      localStorage.setItem('todo-items', JSON.stringify(state.data));
    },
  },
});

export const { setData, deleteStorage, deleteItem, completedItem } =
  storageSlice.actions;

export default storageSlice.reducer;
