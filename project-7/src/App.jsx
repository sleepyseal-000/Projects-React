import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Crewmate from './pages/Crewmate';
import Edit from './pages/Edit';
import Show from "./pages/Show";
import Nav from "./componets/Nav";


function App() {

  return (
    
      <div className='app-container'>
        <div className='nav-container'>
        <Nav />
        </div>
        
        <div className='route-container'>
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/create" element={ <Crewmate /> } />
            <Route path='/gallery' element={ <Gallery />} />
            <Route path="/edit/:id" element={ <Edit /> } />
            <Route path="/details/:id" element={ <Show/> } />
        </Routes>
        </div>

      </div>
  )
}

export default App