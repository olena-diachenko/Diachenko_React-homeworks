import { configureStore } from '@reduxjs/toolkit';
import storageReducer from './slices/storage';

export default configureStore({
  reducer: {
    storage: storageReducer,
  },
});
