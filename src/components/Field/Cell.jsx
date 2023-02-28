import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
// import { useSelector, useDispatch } from 'react-redux';

// import { getCellStatus, changeCellStatus } from '../../slices/cellReducer';

import './Cell.css';

const Cell = (props) => {
  const { id, clicked } = props;
  // const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(clicked);

  const [isRightClicked, setIsRightClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const rightClickHandler = (e) => {
    e.preventDefault();
    setIsRightClicked(!isRightClicked);
  };

  return (
    <button
      id={id}
      type="button"
      aria-label="cell"
      className={`cell ${isClicked && 'opened'} ${isRightClicked && 'flagged'}`}
      onClick={clickHandler}
      onContextMenu={rightClickHandler}
    />
  );
};

export default Cell;
