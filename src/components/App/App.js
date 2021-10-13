import react from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header'
import Main from '../Main/Main'
import SetsPage from '../SetsPage/SetsPage'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Main></Main>
        </Route>
        <Route path='/sets'>
          <SetsPage></SetsPage>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
