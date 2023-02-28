import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import { startGame, changeCellStatus } from '../../slices/cellReducer';

import './Cell.css';

const Cell = (props) => {
  const { id } = props;
  const dispatch = useDispatch();

  const cells = useSelector((state) => state.cell.field);
  const gameStatus = useSelector((state) => state.cell.gameStatus);
  const [cell] = cells.flat().filter((c) => c.id === id);

  const clickHandler = (e) => {
    if (!gameStatus) {
      dispatch(startGame());
    }
    if (cell.status === 'closed') {
      dispatch(changeCellStatus({ id, type: e.type }));
    }
  };

  const rightClickHandler = (e) => {
    e.preventDefault(e);
    if (!gameStatus) {
      dispatch(startGame());
    }
    if (cell.status !== 'opened') {
      dispatch(changeCellStatus({ id, type: e.type }));
    }
  };

  const className = cn('cell', {
    opened: cell.status === 'opened',
    flagged: cell.status === 'flagged',
    question: cell.status === 'question',
  });

  return (
    <button
      id={id}
      type="button"
      aria-label="cell"
      className={className}
      onClick={clickHandler}
      onContextMenu={rightClickHandler}
    />
  );
};

export default Cell;
