import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';
import Navbar from '../features/navbar/Navbar';
import ScrollToTop from '../features/scrollToTop/ScrollToTop';

const AppRouter = () => {
  let [theme, setTheme] = useState('light');

  return (
    <Router>
      <ScrollToTop />
      <div
        className='App'
        style={theme === 'dark' ? { backgroundColor: 'gray' } : null}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path='/' exact>
            <HomePage theme={theme} />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
