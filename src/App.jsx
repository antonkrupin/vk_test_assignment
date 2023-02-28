import React from 'react';

import Header from './components/Header/Header';
import Field from './components/Field/Field';

import './App.css';

const App = () => {
  const title = 'Сапер';
  return (
    <div className="main">
      <h1>{title}</h1>
      <Header />
      <Field size={16} />
    </div>
  );
};

export default App;
