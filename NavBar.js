import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav } from 'react-bootstrap';
import logo from '../image/logo1.png';
import '../css/all.css';
import {Link } from 'react-router-dom';
import '../css/NavBar.css';
function NavBar() {
  const category=<Link to={'/category'}>Category</Link>
  return (
    <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} width="80px" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link to={'/home'}>Home</Link>
            <Link to={'/category'}>Category</Link>
            <Nav.Link href="#link">
            <i className="fa-solid fa-cart-plus"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;