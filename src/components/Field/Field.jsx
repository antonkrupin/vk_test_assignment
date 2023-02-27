import React from 'react';

import CellLine from './CellLine';

import './Field.css';

const Field = (props) => {
  const { size } = props;

  const field = [];

  for (let i = 0; i < size; i += 1) {
    field.push({ id: i });
  }
  /*
    const result = [];

    const getRandomNumber = (max) => {
      return Math.floor(Math.random() * max);
    }

    while(result.length < 40) {
      const temp = getRandomNumber(256);
      if (result.indexOf(temp) === -1) {
        result.push(temp);
      }
    }

    result.sort(function(a, b) {
      return a - b;
    });
  */

  return (
    <div className="field">
      {field.map((f) => (
        <CellLine key={f.id} id={f.id} size={size} />
      ))}
    </div>
  );
};

export default Field;
