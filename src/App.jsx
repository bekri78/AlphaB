import React, { useState, useEffect } from 'react';
import firebase from './utils/firebaseConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SimpleAccordion from './components/Questions/questions';
import TextToSpeech from './views/TextToSpeech';
import CardMaps from './components/Map/CardMaps';
import Contact from './components/Contact/Contact';

import './App.css';
import Navigation from './components/Navbar/navbar';
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
        <div>
          <h1>react</h1>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      )}
    </div>
  );
}

export default App;
