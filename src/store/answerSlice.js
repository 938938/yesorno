import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import SPINNER from '../images/spinner.gif';
import {
  MIDNIGHTEXPRESS,
  RADICALRED,
  DARKTURQUOISE,
} from '../global/globalColor';

const NG = [
  'https://yesno.wtf/assets/no/3-80a6f5b5d6684674bcfeda34accca4e1.gif',
];
const yes = [
  '응!',
  '좋아!',
  '해!',
  'YESSSS!!',
  'OK!!',
  '좋아요',
  '하세요',
  '응',
  'yes',
  '좋습니다',
  '좋은 생각이야!',
  '맞아요',
];
const no = [
  '안돼!',
  '하지마!',
  'Nooooo!!!!',
  'Nope',
  '하지마세요',
  '아니오',
  '안됩니다',
  '아닙니다',
  '틀렸습니다',
  'NO',
  '가만히 계세요',
  '하지마',
  '안돼',
  '아냐!',
];

const answerSlice = createSlice({
  name: 'answerSlice',
  initialState: { answer: '', image: '', bgColor: '' },
  extraReducers: (builder) => {
    builder.addCase(asyncAPI.pending, (state, action) => {
      state.answer = '답변을 불러오는 중입니다.';
      state.image = SPINNER;
      state.bgColor = `${MIDNIGHTEXPRESS}`;
    });
    builder.addCase(asyncAPI.fulfilled, (state, action) => {
      console.log(action.payload.image);
      if (NG.includes(action.payload.image)) {
        if (action.payload.answer === 'yes') {
          action.payload.image =
            'https://yesno.wtf/assets/yes/10-271c872c91cd72c1e38e72d2f8eda676.gif';
        } else {
          action.payload.image =
            'https://yesno.wtf/assets/no/26-34b31d1f0777f70c61488f67a36576a9.gif';
        }
      }
      const output =
        action.payload.answer === 'no'
          ? no[Math.floor(Math.random() * no.length)]
          : yes[Math.floor(Math.random() * yes.length)];
      state.answer = output;
      state.image = action.payload.image;
      state.bgColor =
        action.payload.answer === 'no' ? `${RADICALRED}` : `${DARKTURQUOISE}`;
    });
    builder.addCase(asyncAPI.rejected, (state, action) => {
      state.answer = '답변을 받아오는 것에 실패했습니다.';
    });
  },
});

export default answerSlice;

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
