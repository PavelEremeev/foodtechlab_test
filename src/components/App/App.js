import react from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header'
import Main from '../Main/Main'
import SetsPage from '../SetsPage/SetsPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <SetsPage></SetsPage>
    </div>
  );
}

export default App;
