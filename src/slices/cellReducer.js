// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

import fieldFilling from '../asserts/fieldFilling';
import { leftClickHandler, rightClickHandler, getNearestCellsId } from '../asserts/switchCellStatus';

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
    openedCells: [],
    tempMinedCells: [],
    temp: [],
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
    changeNearestCellsStatus: (state, action) => {
      const { id, lineId } = action.payload;
      const cellsId = getNearestCellsId(id, fieldSize, lineId);
      state.tempMinedCells = [];
      cellsId.forEach((cellId) => {
        state.field.flat().forEach((elem) => {
          if (elem.id === cellId && elem.mined) {
            state.tempMinedCells.push(elem);
          }
        });
      });
      if (state.tempMinedCells.length === 0) {
        cellsId.forEach((cellId) => {
          state.field.flat().forEach((elem) => {
            if (elem.id === cellId && !elem.mined) {
              elem.status = 'opened';
            }
          });
        });
      }
    },
    getCellStatus: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {
  changeGameStatus,
  changeCellStatus,
  changeNearestCellsStatus,
  getCellStatus,
  newChange,
} = cellSlice.actions;

export default cellSlice.reducer;
