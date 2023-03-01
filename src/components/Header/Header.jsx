/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';

import Counter from './Counter';
import StartButton from './StartButton';
import Timer from './Timer';

import './Header.css';

const Header = () => {
  const gameStatus = useSelector((state) => state.cell.gameStatus);
  return (
    <div className="header">
      <Counter />
      <StartButton />
      {(gameStatus === 'start' || gameStatus === 'waiting') && <Timer start={gameStatus} /> }
      {(gameStatus !== 'start' && gameStatus !== 'waiting') && (
        <div>
          <img src="./img/timer/number_0.png" alt="timer" />
          <img src="./img/timer/number_0.png" alt="timer" />
          <img src="./img/timer/number_0.png" alt="timer" />
        </div>
      )}
    </div>
  );
};

export default Header;
