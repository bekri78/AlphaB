import React from 'react';
import firebase from '../../utils/firebaseConfig';
import AlphaB from './img/logo.png';
import { Nav, Navbar, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import './Navbar.css';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {' '}
        <img id="logo" src={AlphaB} alt="AlphaB" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="liens" href="/">
            Accueil
          </Nav.Link>
          <Nav.Link className="liens" href="/texte">
            Outils
          </Nav.Link>
          <Nav.Link className="liens" href="/map">
            Professionnels
          </Nav.Link>
          <Nav.Link className="liens" href="/contact">
            Contact
          </Nav.Link>
          <NavDropdown title="Theme" className="liens" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Light</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Dark</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>Hello {firebase.auth().currentUser.displayName}</Nav.Link>
          <Button onClick={() => firebase.auth().signOut()}>Deconnexion</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
