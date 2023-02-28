// генератор случайного целого числа
const getRandomNumber = (max) => Math.floor(Math.random() * max);

// принимает размер поля и количество мин
// генерирует массив случайных числе, размером равным количеству мин
// возвращает отсортированный массив
const generateMinedCells = (size, mineCounter) => {
  const minedCells = [];
  while (minedCells.length < mineCounter) {
    const temp = getRandomNumber(size ** 2);
    if (minedCells.indexOf(temp) === -1) {
      minedCells.push(temp);
    }
  }
  minedCells.sort((a, b) => a - b);
  return minedCells;
};

// генерирует initialState
const fieldFilling = (size, mineCounter) => {
  const initialState = {};

  const minedCells = generateMinedCells(size, mineCounter);

  initialState.mined = minedCells;
  initialState.mineCounter = minedCells.length;
  initialState.field = [];

  let tempLine = [];
  for (let i = 1; i <= size ** 2; i += 1) {
    tempLine.push({
      id: i,
      mined: minedCells.indexOf(i) !== -1,
      status: 'closed',
    });
    if (i % size === 0) {
      initialState.field.push(tempLine);
      tempLine = [];
    }
  }

  return initialState;
};

export default fieldFilling;
