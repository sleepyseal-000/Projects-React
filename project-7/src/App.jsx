import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Nav from "./componets/Nav";


function App() {

  return (
    
      <div className='app-container'>
        <div className='nav-container'>
        <Nav />
        </div>
        
        <div className='route-container'>
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
        </div>

      </div>
  )
}

export default App