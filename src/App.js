import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { SearchPage } from './Pages/SearchPage';
import { FilterPage } from './Pages/FilterPage';
import {Header} from './Components/Header'
import styles from './App.module.scss';


function App() {
  return (
    <div className="App">
        <Router>
        <div>
          <Header />
          <div className={styles.container}>
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/filter' component={FilterPage} />
          </div>
        </div>
      </Router>
      </div>
  );
}

export default App;
