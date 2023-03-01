// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

import fieldFilling from '../asserts/fieldFilling';
import { leftClickHandler, rightClickHandler } from '../asserts/switchCellStatus';

const fieldSize = 16;
const mineQuantity = 40;

const { mined, mineCounter, field } = fieldFilling(fieldSize, mineQuantity);

const cellSlice = createSlice({
  name: 'cell',
  initialState: {
    gameStatus: null,
    mined,
    mineCounter,
    field,
  },
  reducers: {
    changeGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
    changeCellStatus: (state, action) => {
      const { id, type } = action.payload;
      state.field.flat().forEach((cell) => {
        if (cell.id === id && type === 'click') {
          leftClickHandler(cell, id, state);
        }
        if (cell.id === id && type === 'contextmenu') {
          rightClickHandler(cell, state);
        }
      });
    },
    getCellStatus: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {
  changeGameStatus,
  changeCellStatus,
  getCellStatus,
} = cellSlice.actions;

export default cellSlice.reducer;
