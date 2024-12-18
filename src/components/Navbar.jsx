import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

//Por alguna razon si la funcion le dejo como nombre Nav me lo toma como que ya fue definido en otro lado. Oportunidad de mejora.
export default function NavbarComp() {
    return (
      <Navbar className='sNav'>
        <Container>
          <Navbar.Brand as={Link} to='/'><h1>Petricor Store</h1></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
               to="/category/Economia"
                className={({ isActive }) => isActive ? "active" : "" }>
                Economia
            </NavLink>
            <NavLink
               to="/category/Filosofia"
                className={({ isActive }) => isActive ? "active" : "" }>
                Filosofia
            </NavLink>
            <NavLink
               to="/category/Historias"
                className={({ isActive }) => isActive ? "active" : "" }>
                Historias
            </NavLink>
          </Nav>
        <CartWidget />
        </Container>
      </Navbar>
    )
  }
