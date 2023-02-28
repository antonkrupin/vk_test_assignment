// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

import fieldFilling from '../asserts/fieldFilling';

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
    startGame: (state) => {
      state.gameStatus = true;
    },
    changeCellStatus: (state, action) => {
      const { id, type } = action.payload;
      state.field.flat().forEach((cell) => {
        if (cell.id === id && type === 'click') {
          cell.status = 'opened';
        }
        if (cell.id === id && type === 'contextmenu') {
          switch (cell.status) {
            case 'closed': {
              cell.status = 'flagged';
              break;
            }
            case 'flagged': {
              cell.status = 'question';
              break;
            }
            default:
              cell.status = 'closed';
          }
        }
      });
    },
    getCellStatus: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {
  startGame,
  changeCellStatus,
  getCellStatus,
} = cellSlice.actions;

export default cellSlice.reducer;
