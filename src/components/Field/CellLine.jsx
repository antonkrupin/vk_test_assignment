import React from 'react';

import Cell from './Cell';

import './CellLine.css';

const CellLine = (props) => {
  const { id, line } = props;

  return (
    <div className="cellLine" id={id}>
      {line.map((cell) => (
        <Cell key={cell.id} id={cell.id} lineId={id} clicked={cell.clicked} />
      ))}
    </div>
  );
};

export default CellLine;
