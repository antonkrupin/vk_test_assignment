import React from 'react';

import Header from './components/Header/Header';
import Field from './components/Field/Field';

import './App.css';

const App = () => {
  const test = '1';
  return (
    <div className="main">
      <h1>{test}</h1>
      <Header />
      <Field size={16} />
    </div>
  );
};

export default App;
