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

export const checkNearestCells = (id, fieldSize, lineId) => {
  /* const numbers = [];
  numbers.push(id - fieldSize);
  numbers.push(id - fieldSize - 1);
  numbers.push(id + 1);
  numbers.push(id + fieldSize + 1);
  numbers.push(id + fieldSize);
  numbers.push(id + fieldSize - 1);
  numbers.push(id - 1);
  numbers.push(id - fieldSize + 1);
  console.log('numbers', numbers);
  const test = numbers.filter((number) => number > 0);
  return test.sort((a, b) => a - b); */
  if (id % fieldSize !== 1 && id % fieldSize !== 0) {
    if (lineId !== 1 && lineId !== fieldSize) {
      const numbers = [];
      numbers.push(id - fieldSize);
      numbers.push(id - fieldSize - 1);
      numbers.push(id + 1);
      numbers.push(id + fieldSize + 1);
      numbers.push(id + fieldSize);
      numbers.push(id + fieldSize - 1);
      numbers.push(id - 1);
      numbers.push(id - fieldSize + 1);
      return numbers.sort((a, b) => a - b);
    }
    if (lineId === 1) {
      const numbers = [];
      numbers.push(id + 1);
      numbers.push(id + fieldSize + 1);
      numbers.push(id + fieldSize);
      numbers.push(id + fieldSize - 1);
      numbers.push(id - 1);
      return numbers.sort((a, b) => a - b);
    }
    if (lineId === fieldSize) {
      const numbers = [];
      numbers.push(id - fieldSize);
      numbers.push(id - fieldSize - 1);
      numbers.push(id + 1);
      numbers.push(id - 1);
      numbers.push(id - fieldSize + 1);
      return numbers.sort((a, b) => a - b);
    }
  }
  if (id % fieldSize === 1) {
    if (lineId === 1) {
      const numbers = [];
      numbers.push(id + 1);
      numbers.push(id + fieldSize + 1);
      numbers.push(id + fieldSize);
      return numbers.sort((a, b) => a - b);
    } if (lineId === fieldSize) {
      const numbers = [];
      numbers.push(id - fieldSize);
      numbers.push(id - fieldSize + 1);
      numbers.push(id + 1);
      return numbers.sort((a, b) => a - b);
    }
    const numbers = [];
    numbers.push(id - fieldSize);
    numbers.push(id - fieldSize + 1);
    numbers.push(id + 1);
    numbers.push(id + fieldSize + 1);
    numbers.push(id + fieldSize);
    return numbers.sort((a, b) => a - b);
  }
  if (id % fieldSize === 0) {
    if (lineId === 1) {
      const numbers = [];
      numbers.push(id + fieldSize);
      numbers.push(id + fieldSize - 1);
      numbers.push(id - 1);
      return numbers.sort((a, b) => a - b);
    } if (lineId === fieldSize) {
      const numbers = [];
      numbers.push(id - fieldSize);
      numbers.push(id - 1);
      numbers.push(id - fieldSize - 1);
      return numbers.sort((a, b) => a - b);
    }
    const numbers = [];
    numbers.push(id - fieldSize);
    numbers.push(id + fieldSize);
    numbers.push(id + fieldSize - 1);
    numbers.push(id - 1);
    numbers.push(id - fieldSize - 1);
    return numbers.sort((a, b) => a - b);
  }
};
