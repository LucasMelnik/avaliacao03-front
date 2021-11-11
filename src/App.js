import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'

import style from './App.module.css'
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className={style.container}>
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
