import React from 'react';
// import { Routes,Route } from 'react-router-dom';
// import Createblog from './components/blog/Createblog';
// import ShowBloag from './components/blog/ShowBlock';
// import Detais from './components/blog/Deatils';
// import {Blogscontain} from './components/blog/Blogs'
import { BackContext } from './components/task/Create'
import { Route,Routes } from 'react-router-dom';
import ShowPage from './components/task/Showpage';
import Create from './components/task/Adddiv'
import Edit from './components/task/Edit'
function App() {
  return (
    <BackContext>
    <Routes>
      <Route  path='/' element={<ShowPage/>}></Route>
      <Route  path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </BackContext>
  //   <Blogscontain>
  //    <Routes>
  //     <Route path='/' element={<Createblog/>}></Route>
  //     <Route path='/blogs' element={<ShowBloag/>}/>
  //     <Route path='/blogs/:id' element={<Detais/>}/>
  //    </Routes>
  //  </Blogscontain>
  
  );
}

export default App;
