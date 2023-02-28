/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import StartButton from './StartButton';
import Timer from './Timer';

import './Header.css';

const Header = () => {
  const gameStatus = useSelector((state) => state.cell.gameStatus);
  return (
    <div className="header">
      <Timer />
      <StartButton />
      <Timer start={gameStatus} />
    </div>
  );
};

export default Header;
