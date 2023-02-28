import React from 'react';

import Cell from './Cell';

import './CellLine.css';

const CellLine = (props) => {
  const { line } = props;

  return (
    <div className="cellLine">
      {line.map((cell) => (
        <Cell key={cell.id} id={cell.id} clicked={cell.clicked} />
      ))}
    </div>
  );
};

export default CellLine;
