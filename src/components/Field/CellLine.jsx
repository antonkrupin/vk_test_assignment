import React from 'react';

import Cell from './Cell';

import './CellLine.css';

const CellLine = (props) => {
  const { id, size } = props;

  const line = [];

  for (let i = 0; i < size; i += 1) {
    line.push({ id: [id, i], mined: false, clicked: false });
  }
  return (
    <div className="cellLine">
      {line.map((c) => (
        <Cell key={c.id[1]} clicked={c.clicked} />
      ))}
    </div>
  );
};

export default CellLine;
