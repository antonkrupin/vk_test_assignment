// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

import fieldFilling from '../asserts/fieldFilling';

const fieldSize = 16;
const mineQuantity = 40;

const { mined, mineCounter, field } = fieldFilling(fieldSize, mineQuantity);

const cellSlice = createSlice({
  name: 'cell',
  initialState: {
    mined,
    mineCounter,
    field,
  },
  reducers: {
    test: (state, action) => {
      console.log(action.payload);
    },
    changeCellStatus: (state, action) => {
      console.log(action.payload);
    },
    getCellStatus: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {
  test,
  changeCellStatus,
  getCellStatus,
} = cellSlice.actions;

export default cellSlice.reducer;
