import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/card';
import { useState, useEffect } from 'react';
import './style.css';


const Personagem = () => {

    const [character, setCharacter] = useState([]);
    const {id} = useParams();
   
    const getCharacters = async (id) => {
      
      let url = "https://rickandmortyapi.com/api/character/"+id;
      
      fetch(url)
      .then((res) => {
        res.json().then( (data) => {setCharacter(data)})
    }).catch((err) => alert(err))
    }

    useEffect(() => {

        getCharacters(id)

    }, [])
    
    
  return (
    <div className='personagem'>
        
        <Card urlImage={character.image} 
                        personName={character.name} 
                        personStatus={character.status}
                        personSpecie={character.species}
                        personLocation={character.location}
                        personOrigin={character.origin}
                        personGender={character.gender}
                        dados={false}
                  />
    </div>
  )
}

export default Personagem;