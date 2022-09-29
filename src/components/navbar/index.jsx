import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        
            <li><a href="/">Home</a></li>
            <li><a href="/personagens">Personagens</a></li>
            <li><a href="/episodios">Episodios</a></li>
        
    </div>
  )
}

export default Navbar;