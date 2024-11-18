import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


export default function CustomNavbar() {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'><h1>Librería Petricor</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/jewelery'>Joyeria</Nav.Link>
            <Nav.Link as={Link} to='/category/electronics'>Electronica</Nav.Link>
            <Nav.Link as={Link} to='/category/clothing'>Ropa</Nav.Link>
          </Nav>
        <CartWidget />
        </Container>
      </Navbar>
    )
  }
