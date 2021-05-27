import React, { useState, useEffect } from "react";
import Navigation from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import TextToSpeech from "./views/TextToSpeech";
import CardMaps from "./components/Map/CardMaps";
import SimpleAccordion from "./components/Questions/questions";
import Contact from "./components/Contact/Contact";

import { Route, Switch } from "react-router-dom";

import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import firebase from "./utils/firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import Access from "./Acces";

import "./App.css";
import { UidContext } from "./components/UidContext";
function App() {
  const [isSignedIn, setSignedIn] = useState(null);
  const [uid, setUid] = useState(null);
  useEffect(() => {
    if (isSignedIn === null) {
      firebase.auth().onAuthStateChanged((user) => {
        console.log("je suis la");
        setSignedIn(!!user);
        console.log(user);
        setUid(user.uid); // recuperation id unique utilisateur
      });
    }
  }, [isSignedIn]);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  return (
    <>
      <UidContext.Provider value={uid}>
        {isSignedIn ? (
          <>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                exact
                path="/texte"
                component={(SimpleAccordion, TextToSpeech)}
              />
              <Route exact path="/map" component={CardMaps} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </>
        ) : (
          <div style={{ backgroundColor: "#1b2437" }}>
            <Access />
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
            <ScrollReveal />
          </div>
        )}
      </UidContext.Provider>
    </>
  );
}

export default App;
