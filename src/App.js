import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Profile} />
    </div>
  );
}

export default App;
