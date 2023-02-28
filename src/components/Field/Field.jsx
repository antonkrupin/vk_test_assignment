import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

import CellLine from './CellLine';

import './Field.css';

const Field = (props) => {
  const { size } = props;

  const field = useSelector((state) => state.cell.field);

  return (
    <div className="field">
      {field.map((line) => (
        <CellLine key={line[0]} id={line.id} size={size} line={line.slice(1)} />
      ))}
    </div>
  );
};

export default Field;
