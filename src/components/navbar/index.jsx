import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        
            <li><Link to="/">Home</Link></li>
            <li><Link to="/personagens">Personagens</Link></li>
            <li><Link to="/episodios">Episodios</Link></li>
        
    </div>
  )
}

export default Navbar;