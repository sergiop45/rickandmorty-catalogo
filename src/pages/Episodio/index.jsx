import React from 'react';
import Card from '../../components/card';
import { useState,  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const Episodio = () => {
    const [episode, setEpisode] = useState([]);
    const {id} = useParams();
   
    const getEpisode = async (id) => {
      
      let url = "https://rickandmortyapi.com/api/episode/"+id;
      
      fetch(url)
      .then((res) => {
        res.json().then( (data) => {setEpisode(data)})
    }).catch((err) => alert(err))
    }

    useEffect(() => {

        getEpisode(id)

    }, [])
  return (
    <div className='episode'>

        <Card 
            dados={episode}
        
        />

    </div>
  )
}

export default Episodio