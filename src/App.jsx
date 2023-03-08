import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Principal from './components/Principal'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemSubContainer from './components/ItemSubContainer'
import Carrito from './components/Carrito'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Principal />} />
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/sub/:subcategoria" element={<ItemSubContainer />} />
        <Route exact path="/articulo/:id" element={<ItemDetailContainer />} />
        <Route exact path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

/*
<Route exact path='/categoria/:categoria' element={<Videojuegos />} />
*/