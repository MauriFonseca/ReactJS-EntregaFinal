import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


export default function NavbarComp() {
    return (
      <Navbar className='sNav'>
        <Container>
          <Navbar.Brand as={Link} to='/'><h1>Petricor Store</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/Economia'>Economia</Nav.Link>
            <Nav.Link as={Link} to='/category/Filosofia'>Filosofia</Nav.Link>
            <Nav.Link as={Link} to='/category/Historias'>Historias</Nav.Link>
          </Nav>
        <CartWidget />
        </Container>
      </Navbar>
    )
  }
