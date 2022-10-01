import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Personagens from './pages/Personagens'
import Personagem from './pages/Personagem'
import Episodios from './pages/Episodios'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route element={<App />}>
          
          <Route path='/' element={<Home/>} />
          <Route path='/personagens' element={<Personagens />} />
          <Route path='/personagens/:id' element={<Personagem />} />
          <Route path='/episodios' element={<Episodios />} />


        </Route>

      </Routes>
    
    </BrowserRouter>

    
  </React.StrictMode>
)
