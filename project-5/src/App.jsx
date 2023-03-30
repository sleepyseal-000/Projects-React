import { useState } from 'react'
import './App.css'
import '../components/SideBar'
import SideBar from '../components/SideBar'
import Dashboard from '../components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="sidebar">
      <SideBar></SideBar>
      </div>

      <div className="dashboard">
      <Dashboard></Dashboard>



      </div>
      
    </div>
  )
}

export default App
