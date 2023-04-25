import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


const ShowCard = ({ data }) => {
  const { image, str, dex, class: characterClass, name , int, cha, con, wis} = data;

  return (
    <div className="card">

        <div className='character-class-container'>

          <h2> {characterClass} - {name} </h2>

        </div>

        <div className="card-image-container">
            <img src={image} alt="" />
        </div>
      
        <div className='input-container'>

        <h2>Strength: {str}</h2>
        <h2>Dexterity: {dex}</h2>
        <h2>Intelligence: {int}</h2>
        <h2>Charisma: {cha} </h2>
        <h2>Constitution: {con}</h2>
        <h2>Wisdom: {wis}</h2>
        </div>
      
    </div>
  );
};

export default ShowCard;
