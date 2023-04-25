import React, { useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom"
import { supabase } from '../supabaseClient'


function CreateCard() {
  
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [character, setcharacter] = useState({ name: "",  str: 0, dex:0, int:0, cha:0, con:0, wis:0,  class: "" , image:""});
  const [formError, setFormError] = useState(null);

  
const images = [
  'https://ctiqitjkpftxkfupjwlp.supabase.co/storage/v1/object/public/my-bucket/barbarian.jpg',
  'https://ctiqitjkpftxkfupjwlp.supabase.co/storage/v1/object/public/my-bucket/bard.jpg',
  'https://ctiqitjkpftxkfupjwlp.supabase.co/storage/v1/object/public/my-bucket/cleric.jpg',
  'https://ctiqitjkpftxkfupjwlp.supabase.co/storage/v1/object/public/my-bucket/druid.jpg',
  'https://ctiqitjkpftxkfupjwlp.supabase.co/storage/v1/object/public/my-bucket/fighter.jpg',
  'https://ctiqitjkpftxkfupjwlp.supabase.co/storage/v1/object/public/my-bucket/monk.jpg',
  'https://ctiqitjkpftxkfupjwlp.supabase.co/storage/v1/object/public/my-bucket/paladin.jpg'


  // Add more image URLs as needed
];


  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const createCharacter = async (event) => {
    event.preventDefault();
  
    const image = images[currentImageIndex];
    const { data, error } = await supabase
      .from('character')
      .insert({  name: character.name, str: character.str, dex: character.dex, int: character.int, cha: character.cha, con: character.con, wis: character.wis, class: character.class, image })
      .select();
  
    if (error) {
      setFormError('Error creating character.');
    } else {
      const newCharacter = { ...character, image };
      setcharacter(newCharacter);
      alert("Success! You created a character!");
    }
  }
  


  const handleChange = (event) => {
    const {name, value} = event.target;
    setcharacter( (prev) => {
        return {
            ...prev,
            [name]:value,
        }
    });
  }



  return (
   
      <div className="card">
       

        <div className="card-image-container">
          <img src={images[currentImageIndex]} alt="card-img"/>
          <button className="card-nav-button card-nav-button-left" onClick={handleBack}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="card-nav-button card-nav-button-right" onClick={handleNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <form  onSubmit={createCharacter}>

          <div className='form-container'>

                <div className='input-container'>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name='name' onChange={handleChange} className='text-input' />
                </div>

                <div className='input-container'>
                  <label> Stat Distribution: </label>

                  <div className='stat-container'>
                      <div>
                        <label htmlFor="str">Str:</label>
                        <input type="number" id="str" name="str" value={character.str} onChange={handleChange} className="text-input" />
                      </div>

                      <div>
                        <label htmlFor="dex">Dex:</label>
                        <input type="number" id="dex" name="dex" value={character.dex} onChange={handleChange} className="text-input" />
                      </div>

                      <div>
                        <label htmlFor="int">Int:</label>
                        <input type="number" id="int" name="int" value={character.int} onChange={handleChange} className="text-input" />
                      </div>

                      <div>
                        <label htmlFor="cha">Cha:</label>
                        <input type="number" id="cha" name="cha" value={character.cha} onChange={handleChange} className="text-input" />
                      </div>

                      <div>
                        <label htmlFor="con">Con:</label>
                        <input type="number" id="con" name="con" value={character.con} onChange={handleChange} className="text-input" />
                      </div>

                      <div>
                        <label htmlFor="wis">Wis:</label>
                        <input type="number" id="wis" name="wis" value={character.wis} onChange={handleChange} className="text-input" />
                      </div>
                  </div>
                </div>

                <div className='input-container'>

                <label> Class: </label>

                  <div className='radiobtn-container'>
                      <div>
                      <input type="radio" id="barbarian" name="class" value='barbarian' onChange={handleChange} />
                      <label htmlFor="barbarian">Barbarian</label>
                      </div>

                      <div>
                      <input type="radio" id="bard" name="class" value='bard' onChange={handleChange} />
                      <label htmlFor="bard">Bard</label>
                      </div>

                      <div>
                      <input type="radio" id="cleric" name="class" value='cleric' onChange={handleChange} />
                      <label htmlFor="cleric">Cleric</label>
                      </div>

                      <div>
                      <input type="radio" id="druid" name="class" value='druid' onChange={handleChange} />
                      <label htmlFor="druid">Druid</label>
                      </div>

                      <div>
                      <input type="radio" id="fighter" name="class" value='bard' onChange={handleChange} />
                      <label htmlFor="bard">Fighter</label>
                      </div>

                      <div>
                      <input type="radio" id="monk" name="class" value='monk' onChange={handleChange} />
                      <label htmlFor="monk">Monk</label>
                      </div>

                      <div>
                      <input type="radio" id="paladin" name="class" value='paladin' onChange={handleChange} />
                      <label htmlFor="paladin">Paladin</label>
                      </div>

                  </div>

                </div>
          </div>
              <button type="submit" className='submit-btn' > Create Character </button>
              {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    

  );
}

export default CreateCard;
