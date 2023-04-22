import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const activeSlice = createSlice({
  name: 'activeSlice',
  initialState: { value: '', link: '', type: '' },
  extraReducers: (builder) => {
    builder.addCase(ActiveAPI.fulfilled, (state, action) => {
      console.log(action.payload);
      const { activity, link, type } = action.payload;
      state.value = activity;
      state.link = link;
      state.type = type;
    });
  },
});

export default activeSlice;

export const ActiveAPI = createAsyncThunk('active', async (_, thunkAPI) => {
  try {
    const data = await axios
      .get('http://www.boredapi.com/api/activity/')
      .then((res) => res.data);
    return data;
  } catch (error) {
    return error;
  }
});
