import React from 'react';
import './style.css';

const Card = ({urlImage, personName, personStatus, personSpecie, personLink}) => {
  return (
    <div className='card'>
        <img src={urlImage} alt="character" />
        
        <p>{personName}</p>
        <p>{personStatus}</p>
        <p>{personSpecie}</p>

        <a href={personLink}>Ver Mais</a>
    </div>
  )
}

export default Card;