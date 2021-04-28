import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';
import AlphaB from './img/logo.png';
const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    color: 'yellow',
  },
  titleName: {
    color: 'white',
    textDecoration: 'none',
  },
  logo: {
    width: 50,
    height: 50,
    margin: 'auto',
  },
  active: {
    color: 'white!important',
  },
  navigation: {
    color: 'yellow',
  },
}));
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <img id="logo" src={AlphaB} alt="AlphaB" />
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink exact to="/" activeClassName={classes.active}>
                Accueil
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/texte" activeClassName={classes.active}>
                Texte
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/map" activeClassName={classes.active}>
                Map
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/contact" color="primary" activeClassName={classes.active}>
                Contact
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
