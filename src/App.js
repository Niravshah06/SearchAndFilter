import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { DashBoardPage } from './Pages/DashBoardPage';
import styles from './App.module.scss';


function App() {
  return (
    <div className="App">
       <Router>
        <div>
        <DashBoardPage/>
        </div>
      </Router>
    </div>
  );
}

export default App;
