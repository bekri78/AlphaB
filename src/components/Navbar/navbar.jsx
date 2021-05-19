import React from 'react';
import firebase from '../../utils/firebaseConfig';
import AlphaB from './img/logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import './Navbar.css';

function Navigation() {
  return (
    <Navbar className="nav" collapseOnSelec sticky="top" expand="sm" bg="" variant="dark">
      <Navbar.Brand>
        <img id="logo" src={AlphaB} alt="AlphaB" />
      </Navbar.Brand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
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
          <button onClick={() => firebase.auth().signOut()}>deco</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
