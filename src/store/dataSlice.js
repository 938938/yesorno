import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { answer: '', image: '' },
  reducers: {
    set: (state, action) => {
      console.log(action);
      state.answer = action.payload.answer;
      state.image = action.payload.image;
    },
  },
});

export default dataSlice;
export const { set } = dataSlice.actions;
