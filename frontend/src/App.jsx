import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router";
import Home from './components/Home.jsx';
import Create from './components/Create.jsx';
import Edit from './components/Edit.jsx';
import Navbar from './components/navigation/Navbar.jsx';

function App() {
  

  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
            
          </Routes>
        }
      />
      
    </>
  )
}

export default App
