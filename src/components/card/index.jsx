import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({dados,urlImage, personName, episodio, personGender, personLocation, personOrigin, personStatus, personSpecie, personLink}) => {
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
        {dados ? 
            <div className='card-episode'>
              <h2>Dados do Episodio</h2>
              <p>Nome: {dados.name}</p>
              <p>Data de estréia: {dados.air_date}</p>
              <p>Episodio: {dados.episode}</p>
  
            </div>
        : console.log()}
        
    </div>
  )
}

export default Card;