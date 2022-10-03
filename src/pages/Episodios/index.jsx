import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../../components/card';
import './style.css'

const Episodios = () => {
  const [episode, setEpisode] = useState([]);

    const getEpisode = async () => {
      let url = "https://rickandmortyapi.com/api/episode";
      await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setEpisode(data.results);
      }).catch((err) => alert(err))
    }

    useEffect(() => {

        getEpisode();

    }, []);

  return (
    <div className='episodios'>
       <div className='container'>
            
            {
              
              episode.length > 0 ? 
              
              episode.map((epi) => {
                return (
                  <div key={epi.id}>
                  <Card episodio={epi.episode} 
                        personName={epi.name}
                        personLink={"/episodios/"+ epi.id}
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

export default Episodios