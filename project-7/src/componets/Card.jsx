import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({ crew }) => {
  return (
    <div className='card'>
          <br />
          <Link to={'/details/' + crew.id }>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmate.ce385016.png" width="100px" style={{background: "rgb(100, 94, 90)"}} alt="et" />
          </Link>
          <br />
          <h3>Crewmate information</h3>
          <br />
          <p className="name">Name: {crew.name}</p>

          <p className="speed">Speed: {crew.speed} mph</p>

          <p className="color">Color: {crew.color}</p>
          <br />
          <Link to={'/edit/'+ crew.id}>
            <button type='button' className='submit-btn red-border'>Edit Crewmate</button>
          </Link>
    </div>
  )
}

export default Card