import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FullApp } from './assets/css/appStyle';
import FullPortfolio from './components/FullPortfolio/FullPortfolio';

function App() {

  return (
    <FullApp>

      <BrowserRouter>

        <FullPortfolio />

      </BrowserRouter>

    </FullApp>
  );
}

export default App;
