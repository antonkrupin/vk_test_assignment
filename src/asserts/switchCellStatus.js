export const leftClickHandler = (cell, id, state) => {
  cell.status = 'opened';
  if (cell.mined) {
    state.gameStatus = 'lose';
    state.mined.forEach((elem) => {
      state.field.flat().forEach((c) => {
        if (elem !== id) {
          if (c.id === elem) {
            c.status = c.status === 'flagged' ? 'disarmed' : 'mine';
          }
        }
      });
    });
  }
};

export const rightClickHandler = (cell, state) => {
  switch (cell.status) {
    case 'closed': {
      cell.status = 'flagged';
      state.mineCounter -= 1;
      break;
    }
    case 'flagged': {
      cell.status = 'question';
      state.mineCounter += 1;
      break;
    }
    default:
      cell.status = 'closed';
  }
};
