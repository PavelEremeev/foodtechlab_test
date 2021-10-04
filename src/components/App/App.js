import react from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Header></Header>
        <Route exact path="/">
        </Route>
      </Switch>
    </div>
  );
}

export default App;
