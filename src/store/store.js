import { configureStore } from '@reduxjs/toolkit';
import answerSlice from './answerSlice';
import activeSlice from './activeSlice';
import askSlice from './askSlice';

const store = configureStore({
  reducer: {
    answer: answerSlice.reducer,
    ask: askSlice.reducer,
    active: activeSlice.reducer,
  },
});

export default store;
