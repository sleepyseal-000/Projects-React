import React from 'react'

const Gallery = ({ preDogs }) => {

  return (
    <div>
      <h2>Who have we seen so far?</h2>

        { 
          preDogs && preDogs.length > 0 ? (
            preDogs.map(( pic, index )=>(
              <li key={index} style={{listStyleType: "none"}} >
                <img src={ pic.url } alt="photo" style={{width: "100px", height: "100px", objectFit: "cover"}} />
                <p>The { pic.breeds[0].name }</p>
              </li>
            ))
          ) : (
            <p>no image</p>
          )
        }
        
    </div>
  )
}

export default Gallery