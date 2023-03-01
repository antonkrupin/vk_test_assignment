/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useSelector } from 'react-redux';

import './Timer.css';

const Timer = () => {
  const {
    seconds,
    pause,
  } = useStopwatch({ autoStart: true });

  const gameStatus = useSelector((state) => state.cell.gameStatus);

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(timer + 1);
    if (gameStatus === 'lose') {
      pause();
    }
  }, [seconds, gameStatus]);

  if (gameStatus === 'lose') {
    setTimer(timer);
  }

  const path1 = `./img/timer/number_${timer > 9 ? `${timer % 10}` : `${timer}`}.png`;
  const path2 = `./img/timer/number_${timer < 100 && timer > 9 ? `${timer % 100}`[0] : '0'}.png`;
  const path3 = `./img/timer/number_${timer < 1000 && timer > 99 ? `${timer % 1000}`[0] : '0'}.png`;

  return (
    <div className="timer">
      <div style={{ fontSize: '20px' }}>
        <span className="seconds">
          <img src={path3} alt="timer" />
          <img src={path2} alt="timer" />
          <img src={path1} alt="timer" />
        </span>
      </div>
    </div>
  );
};

export default Timer;
