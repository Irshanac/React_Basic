import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/router/Home'; // Make sure the path to Home.js is correct
import About from './components/router/About';
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
  
  );
}

export default App;
