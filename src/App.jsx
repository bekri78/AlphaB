import React, { useState, useEffect } from 'react';
import Navigation from './components/Navbar/navbar';
import Home from './components/Home/Home';
import TextToSpeech from './views/TextToSpeech';
import CardMaps from './components/Map/CardMaps';
import SimpleAccordion from './components/Questions/questions';
import Contact from './components/Contact/Contact';
import logo from './components/Navbar/img/logo.png';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import firebase from './utils/firebaseConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Route, Switch } from 'react-router-dom';
import './App.css';
function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
    });
  }, []);
  return (
    <div>
      {isSignedIn ? (
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/texte" component={(SimpleAccordion, TextToSpeech)} />
            <Route path="/map" component={CardMaps} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </>
      ) : (
        <div style={{ backgroundColor: '#1b2437' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: '50px' }}>
            <img src={logo} alt="logo" id="logoConnexion" />
            <p style={{ paddingTop: '2%', color: 'white', fontSize: 'large', marginTop: 'auto' }}>Connexion</p>
          </div>

          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          <ScrollReveal />
        </div>
      )}
    </div>
  );
}

export default App;
