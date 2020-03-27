import React from 'react';

import { Route } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';

import ReactGA from 'react-ga';

const { REACT_APP_ANALYTICS_ID: analyticsId } = process.env;

ReactGA.initialize(analyticsId);

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
