/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useStopwatch } from 'react-timer-hook';

import './Timer.css';

const Timer = () => {
  const {
    seconds,
  } = useStopwatch({ autoStart: true });

  const path1 = `./img/timer/number_${seconds > 9 ? `${seconds % 10}` : `${seconds}`}.png`;
  const path2 = `./img/timer/number_${seconds < 100 && seconds > 9 ? `${seconds % 100}`[0] : '0'}.png`;
  const path3 = `./img/timer/number_${seconds < 1000 && seconds > 99 ? `${seconds % 1000}`[0] : '0'}.png`;

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
