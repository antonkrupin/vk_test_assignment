import React from 'react';

import CellLine from './CellLine';

import './Field.css';

const Field = (props) => {
  const { size } = props;

  const field = [];

  for (let i = 0; i < size; i += 1) {
    field.push({ id: i });
  }

  return (
    <div className="field">
      {field.map((f) => (
        <CellLine key={f.id} id={f.id} size={size} />
      ))}
    </div>
  );
};

export default Field;
