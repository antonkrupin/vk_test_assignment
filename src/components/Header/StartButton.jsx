/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import './StartButton.css';

const StartButton = () => {
  const gameStatus = useSelector((state) => state.cell.gameStatus);

  const className = cn('start', {
    lose: gameStatus === 'lose',
    waiting: gameStatus === 'waiting',
  });

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={reloadPage}
      className={className}
      type="button"
      aria-label="start-button"
    />
  );
};

export default StartButton;
