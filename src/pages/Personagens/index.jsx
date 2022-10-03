import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '../../components/card';

const Personagens = () => {
    const [character, setCharacter] = useState([]);

    const getCharacters = async () => {
      let url = "https://rickandmortyapi.com/api/character";
      await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.results);
      }).catch((err) => alert(err))
    }

    useEffect(() => {

        getCharacters()

    }, [])
  
    return (
      <div className="Home">
        
        
  
        <div className='container'>
            
            {
              
              character.length > 0 ? 
              
              character.map((person) => {
                return (
                  <div key={person.id}>
                  <Card urlImage={person.image} 
                        personName={person.name}
                        personLink={"/personagens/"+ person.id}
                  />
                
                  </div>
                )
              })
              
              
              : console.log("sem dados")
  
              
            }
        </div>
      </div>
    )
}

export default Personagens