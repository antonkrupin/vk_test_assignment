import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const mineCounter = String(useSelector((state) => state.cell.mineCounter)).split('');

  return (
    <div>
      {mineCounter.length < 3 && <img src="./img/timer/number_0.png" alt="timer" />}
      {mineCounter.map((elem) => (
        <img key={elem} src={`./img/timer/number_${elem}.png`} alt="timer" />
      ))}
    </div>
  );
};

export default Counter;
