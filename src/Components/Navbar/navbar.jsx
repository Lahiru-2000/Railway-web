import '../Navbar/navbar.css'
import Logo from '../../Assets/Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function navbar() {

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav nav-links" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto con">
            <Nav.Link href="#home" className='navbar-links'>Contact Us</Nav.Link>
            <Nav.Link href="#link" className='navbar-links'>About Us</Nav.Link>
            <NavDropdown title="Statements" id="basic-nav-dropdown" className='navbar-links'>
              <NavDropdown.Item href="" >Statements</NavDropdown.Item>
              <NavDropdown.Item href="" >Statements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Statements</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='navbar-links'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


