/* eslint-disable max-len */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import {
  changeGameStatus,
  changeCellStatus,
  changeNearestCellsStatus,
} from '../../slices/cellReducer';

import './Cell.css';

const Cell = (props) => {
  const { id, lineId } = props;
  const dispatch = useDispatch();

  const cells = useSelector((state) => state.cell.field);
  const gameStatus = useSelector((state) => state.cell.gameStatus);
  const [cell] = cells.flat().filter((c) => c.id === id);

  const clickHandler = (e) => {
    if (!gameStatus) {
      dispatch(changeGameStatus('start'));
    }
    if (cell.status === 'closed') {
      dispatch(changeGameStatus('start'));
      dispatch(changeNearestCellsStatus({ id, lineId }));
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

  const className = cn('cell', {
    opened: cell.status === 'opened',
    flagged: cell.status === 'flagged',
    question: cell.status === 'question',
    armed: cell.status === 'opened' && cell.mined,
    mine: cell.status === 'mine',
    disarmed: cell.status === 'disarmed',
    mine_1: cell.marked === 1,
    mine_2: cell.marked === 2,
    mine_3: cell.marked === 3,
    mine_4: cell.marked === 4,
    mine_5: cell.marked === 5,
    mine_6: cell.marked === 6,
    mine_7: cell.marked === 7,
    mine_8: cell.marked === 8,
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
    />
  );
};

export default Cell;
