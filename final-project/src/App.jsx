import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Link, Route, Routes } from "react-router-dom";
import Gallery from './pages/Gallery';
import Character from './pages/Character';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

        <div className='nav-container'>
        <Nav />
        </div>

        <div  className='route-container'>
        <Routes>
          <Route path="/" element={ <Home />} />
          
          <Route path='/gallery' element={<Gallery />}></Route>
        
          <Route path='/create'  element={<Character />}></Route>
        
        </Routes>
        </div>
    
    
      
    </div>
  )
}

export default App
