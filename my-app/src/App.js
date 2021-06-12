/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import TextToSpeech from "./views/TextToSpeech";
import CardMaps from "./components/Map/CardMaps";
import SimpleAccordion from "./components/Questions/questions";
import Contact from "./components/Contact/Contact";
import Commande from "./components/Commande/Commande";
import { Route, Switch } from "react-router-dom";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import firebase from "./utils/firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Access from "./Acces";
import "./App.css";
import { UidContext } from "./components/UidContext";
import { useTranslation } from "react-i18next";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

const GlobalStyle = createGlobalStyle`
body{
background-color: ${(props) =>
  props.theme.mode === "dark" ? "#191970" : "#EEE"};
   color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#677294")}
   
  }

}  
  `;
function getInitialTheme() {
  const saveTheme = storage.getItem("theme");
  return saveTheme ? JSON.parse(saveTheme) : { mode: "light" };
}
function App() {
  const [isSignedIn, setSignedIn] = useState(null);
  const [uid, setUid] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);

  const [t, i18n] = useTranslation("global");
  const changeLang = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

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
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Navigation
                changeLng={(lng) => changeLang(lng)}
                changeWord={(word) => setTheme((theme.mode = { mode: word }))}
              />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/texte"
                  component={(SimpleAccordion, TextToSpeech)}
                />
                <Route exact path="/map" component={CardMaps} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/commmande" component={Commande} />
              </Switch>
            </ThemeProvider>
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
