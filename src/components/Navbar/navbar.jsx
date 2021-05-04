import React from 'react';
import './Navbar.css';
// import styles from '../nav.module.css';
import AlphaB from './img/logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function Navigation() {
  return (
    <Navbar className="nav" collapseOnSelec stycky="top" expand="sm" bg="" variant="dark">
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
        </Nav>
      </Navbar.Collapse>
      <img id="logo" src={AlphaB} alt="AlphaB" />
    </Navbar>
  );
}

export default Navigation;
