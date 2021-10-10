import react from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header'
import Main from '../Main/Main'
import Sets from '../Sets/Sets'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Sets></Sets>
    </div>
  );
}

export default App;
