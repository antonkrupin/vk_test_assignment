import React from 'react';

import StartButton from './StartButton';

import './Header.css';

const Header = () => {
  const test = '1';
  return (
    <div className="header">
      <h1><StartButton /></h1>
      <h2>{test}</h2>
    </div>
  );
};

export default Header;
