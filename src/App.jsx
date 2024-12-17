import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'
import NavbarComp from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element= {<ItemDetailContainer />} />
        <Route path="/cart" element= {<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
