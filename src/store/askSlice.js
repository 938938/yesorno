import { createSlice } from '@reduxjs/toolkit';

const askSlice = createSlice({
  name: 'askSlice',
  initialState: { ask: '' },
  reducers: {
    setAsk: (state, action) => {
      state.ask = action.payload;
    },
  },
});

export default askSlice;
export const { setAsk } = askSlice.actions;