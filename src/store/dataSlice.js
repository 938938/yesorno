import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { answer: '', image: '' },
  extraReducers: (builder) => {
    builder.addCase(asyncAPI.pending, (state, action) => {
      // 대기상태일 때 state 상태
    });
    builder.addCase(asyncAPI.fulfilled, (state, action) => {
      state.answer = action.payload.answer;
      state.image = action.payload.image;
    });
  },
});

export default dataSlice;

export const asyncAPI = createAsyncThunk('data', async (_, thunkAPI) => {
  try {
    const data = await axios
      .get('https://yesno.wtf/api')
      .then((res) => res.data);
    return data;
  } catch (error) {
    return error;
  }
});
