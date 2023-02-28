// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

import fieldFilling from '../asserts/fieldFilling';

const fieldSize = 16;
const mineQuantity = 40;

const initialState = fieldFilling(fieldSize, mineQuantity);

const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    test: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {
  test,
} = cellSlice.actions;

export default cellSlice.reducer;
