import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import LOADING from '../images/loadingCat.png';

const NG = [
  'https://yesno.wtf/assets/no/3-80a6f5b5d6684674bcfeda34accca4e1.gif',
];

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { answer: '', image: '' },
  extraReducers: (builder) => {
    builder.addCase(asyncAPI.pending, (state, action) => {
      // 대기상태일 때 state 상태
      state.answer = '답변을 불러오는 중입니다.';
      state.image = LOADING;
    });
    builder.addCase(asyncAPI.fulfilled, (state, action) => {
      if (NG.includes(action.payload.image)) {
        if (action.payload.answer === 'yes') {
          action.payload.image =
            'https://yesno.wtf/assets/yes/10-271c872c91cd72c1e38e72d2f8eda676.gif';
        } else {
          action.payload.image =
            'https://yesno.wtf/assets/no/26-34b31d1f0777f70c61488f67a36576a9.gif';
        }
      }
      state.answer = action.payload.answer;
      state.image = action.payload.image;
    });
    // builder.addCase(asyncAPI.rejected, (state, action) => {
    //   state.answer = '답변을 받아오는 것에 실패했습니다.';
    // });
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
