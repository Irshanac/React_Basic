import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/activity2/Home';
import Login from './components/activity2/Login';
import Reg from './components/activity2/Reg';


function App() {
  return (
     <Routes>
      <Route path='/' element={<Reg/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
     </Routes>
  
  );
}

export default App;
