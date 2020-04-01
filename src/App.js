import React from 'react';

import { Route } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import ReactGA from 'react-ga';

const { REACT_APP_ANALYTICS_ID: analyticsId } = process.env;

ReactGA.initialize(analyticsId);

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
