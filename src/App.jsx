import './App.css'
import Navbar from './components/navbar'
import { useState } from 'react'
import Card from './components/card';
import {Outlet} from 'react-router-dom'
import Footer from './components/footer';

function App() {
  

  return (
    <div className="App">
     <Navbar />
     <Outlet />
     <Footer />
    </div>
  )
}

export default App
