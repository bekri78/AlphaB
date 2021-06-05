import React from "react";
import firebase from "../../utils/firebaseConfig";
import AlphaB from "./img/logo.png";
import France from './img/france.svg'
import Italy from './img/italy.svg'
import Spain from './img/spain.svg'
import United from './img/united.svg'
import { Nav, Navbar, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

function Navigation(props) {
  const [t] = useTranslation("global");
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top"
    >
      <Navbar.Brand href="/">
        {" "}
        <img id="logo" src={AlphaB} alt="AlphaB" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="liens" to="/">
          {t("Navbar.accueil")}
          </Link>
          <Link className="liens" to="/texte">
          {t("Navbar.outils")}
          </Link>
          <Link className="liens" to="/map">
          {t("Navbar.professionnels")}
          </Link>
          <Link className="liens" to="/contact">
          {t("Navbar.contact")}
          </Link>
          <NavDropdown
            title="Theme"
            className="liens"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item   onClick={() => props.changeWord("light")}
              >Light</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item   onClick={() => props.changeWord("dark")}>Dark</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Lang"
            className="liens"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="lng" onClick={() => props.changeLng("fr")}>
              FR    <img className="country" src={France} alt="france" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  className="lng" onClick={() => props.changeLng("en")}>
              EN <img className="country" src={United} alt="united" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="lng" onClick={() => props.changeLng("es")}>
              ES <img className="country" src={Spain} alt="spain" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  className="lng"onClick={() => props.changeLng("it")}>
              IT <img className="country" src={Italy} alt="italy" />
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
