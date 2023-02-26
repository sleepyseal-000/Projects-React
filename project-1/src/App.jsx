import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardRow from '../components/Card'
import MediaCard from '../components/Card'



function App() {

  return (
      
  <section className='Top'>
    <img src='https://heroic-pixie-6d7f91.netlify.app/awning.png' />

    <div>

      <h1>Food Truck Favorites</h1>
      <MediaCard></MediaCard>
    </div>
  </section>

  )
}

export default App
