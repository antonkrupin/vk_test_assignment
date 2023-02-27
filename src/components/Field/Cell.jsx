import React, { useState } from 'react';

import './Cell.css';

const Cell = (props) => {
  const { clicked } = props;

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
      type="button"
      aria-label="cell"
      className={`cell ${isClicked && 'opened'} ${isRightClicked && 'flagged'}`}
      onClick={clickHandler}
      onContextMenu={rightClickHandler}
    />
  );
};

export default Cell;
