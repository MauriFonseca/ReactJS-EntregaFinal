import Navbar from './components/Navbar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <Navbar>
          <CartWidget />
      </Navbar> 
    <div>
      <ItemListContainer text= 'Descubrenos proximamente' />
    </div>
    </>  
  )
}
export default App
