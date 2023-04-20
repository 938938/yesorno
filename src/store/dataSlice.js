import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { answer: '', image: '' },
  // reducers: {
  //   set: (state, action) => {
  //     console.log(action);
  //     state.answer = action.payload.answer;
  //     state.image = action.payload.image;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(asyncAPI.fulfilled, (state, action) => {
      state.answer = action.payload.answer;
      state.image = action.payload.image;
    });
  },
});

export default dataSlice;
export const { set } = dataSlice.actions;

export const asyncAPI = createAsyncThunk(
  'data',
  async (_, thunkAPI) => {
    try {
      const data = await axios
        .get('https://yesno.wtf/api')
        .then((res) => res.data);
      return data;
    } catch (error) {
      return error;
    }
  }
);
