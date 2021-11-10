import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'

import './App.css'
import Create from './components/Create/Create';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Create/>
    </BrowserRouter>
  );
}

export default App;
