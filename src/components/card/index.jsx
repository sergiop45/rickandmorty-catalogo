import React from 'react';
import './style.css';

const Card = ({urlImage, personName, personGender, personLocation, personOrigin, personStatus, personSpecie, personLink}) => {
  return (
    <div className='card'>
        <img src={urlImage} alt="character" />
        
        <p>{personName}</p>
        
        {personSpecie ? <p>Specie: {personSpecie}</p>: console.log("")}
        {personGender ? <p>Gender: {personGender}</p>: console.log("")}
        {personStatus ? <p>Status: {personStatus}</p>: console.log("")}
        {personOrigin ? <p>Origin: {personOrigin.name}</p>: console.log("")}
        {personLocation ? <p>Location: {personLocation.name}</p>: console.log("")}
        {personLink ? <a href={personLink}>Ver Mais</a>: console.log("")}
        
    </div>
  )
}

export default Card;