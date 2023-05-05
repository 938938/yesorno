import { createSlice } from '@reduxjs/toolkit';

type Data = {
  answer: string;
  image: string;
};

const initialState: Data = {
  answer: '',
  image: '',
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    set: (state, action) => {
      state.answer = action.payload.answer;
      state.image = action.payload.image;
    },
  },
});

export default dataSlice;
export const { set } = dataSlice.actions;
