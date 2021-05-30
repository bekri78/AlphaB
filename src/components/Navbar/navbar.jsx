import React from "react";
import firebase from "../../utils/firebaseConfig";
import AlphaB from "./img/logo.png";
import { Nav, Navbar, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navigation(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top"
    >
      <Navbar.Brand href="#home">
        {" "}
        <img id="logo" src={AlphaB} alt="AlphaB" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="liens" to="/">
            Accueil
          </Link>
          <Link className="liens" to="/texte">
            Outils
          </Link>
          <Link className="liens" to="/map">
            Professionnels
          </Link>
          <Link className="liens" to="/contact">
            Contact
          </Link>
          <NavDropdown
            title="Theme"
            className="liens"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Light</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Dark</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Lang"
            className="liens"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item onClick={() => props.changeLng("fr")}>
              FR
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => props.changeLng("en")}>
              EN
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => props.changeLng("es")}>
              ES
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => props.changeLng("it")}>
              IT
            </NavDropdown.Item>
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
