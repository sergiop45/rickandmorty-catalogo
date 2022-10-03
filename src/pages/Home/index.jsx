import './style.css';
import { useState } from 'react';
import Card from '../../components/card';

function Home() {
  const [character, setCharacter] = useState([]);

  const getCharacters = async () => {
    let url = "https://rickandmortyapi.com/api/character";
    await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setCharacter(data.results);
    }).catch((err) => alert(err))
  }

  return (
    <div className="Home">
      
      <button onClick={() => getCharacters()}>buscar</button>

      <div className='container'>
          
          {
            
            character.length > 0 ? 
            
            character.map((person) => {
              return (
                <div>
                <Card urlImage={person.image} 
                      personName={person.name} 
                      personStatus={person.status}
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

export default Home
