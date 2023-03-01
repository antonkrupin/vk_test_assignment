import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import { changeGameStatus, changeCellStatus } from '../../slices/cellReducer';

import './Cell.css';

const Cell = (props) => {
  const { id, lineId } = props;
  const dispatch = useDispatch();

  const cells = useSelector((state) => state.cell.field);
  const gameStatus = useSelector((state) => state.cell.gameStatus);
  const [cell] = cells.flat().filter((c) => c.id === id);

  const clickHandler = (e) => {
    console.log(lineId);
    if (!gameStatus) {
      dispatch(changeGameStatus('start'));
    }
    if (cell.status === 'closed') {
      dispatch(changeGameStatus('start'));
      dispatch(changeCellStatus({ id, type: e.type }));
    }
  };

  const rightClickHandler = (e) => {
    e.preventDefault(e);
    if (!gameStatus) {
      dispatch(changeGameStatus('start'));
    }
    if (cell.status !== 'opened') {
      dispatch(changeGameStatus('start'));
      dispatch(changeCellStatus({ id, type: e.type }));
    }
  };

  const mouseDownHandler = () => {
    if (cell.status === 'closed') {
      dispatch(changeGameStatus('waiting'));
    }
  };

  const mouseLeaveHandler = () => {
    dispatch(changeGameStatus('start'));
  };

  const className = cn('cell', {
    opened: cell.status === 'opened',
    flagged: cell.status === 'flagged',
    question: cell.status === 'question',
    armed: cell.status === 'opened' && cell.mined,
    mine: cell.status === 'mine',
    disarmed: cell.status === 'disarmed',
  });

  return (
    <button
      id={id}
      type="button"
      aria-label="cell"
      className={className}
      onClick={clickHandler}
      onMouseDown={mouseDownHandler}
      onContextMenu={rightClickHandler}
      onMouseLeave={mouseLeaveHandler}
    />
  );
};

export default Cell;
