import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import activeSlice from './activeSlice';

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    active: activeSlice.reducer,
  },
});

export default store;
