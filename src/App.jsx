import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'
import CustomNavbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element= {<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
