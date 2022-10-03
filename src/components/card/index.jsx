import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({urlImage, personName, episodio, personGender, personLocation, personOrigin, personStatus, personSpecie, personLink}) => {
  return (
    <div className='card'>
        {urlImage ? <img src={urlImage} alt="character" /> : console.log()}
        
        <p>{personName}</p>
        {episodio ? <p>Episodio: {episodio}</p>: console.log()}
        {personSpecie ? <p>Specie: {personSpecie}</p>: console.log()}
        {personGender ? <p>Gender: {personGender}</p>: console.log()}
        {personStatus ? <p>Status: {personStatus}</p>: console.log()}
        {personOrigin ? <p>Origin: {personOrigin.name}</p>: console.log()}
        {personLocation ? <p>Location: {personLocation.name}</p>: console.log()}
        {personLink ? <Link to={personLink}>Ver Mais</Link>: console.log()}
        
    </div>
  )
}

export default Card;