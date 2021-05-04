import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HideAppBar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import SimpleAccordion from './components/Questions/questions';
import TextToSpeech from './views/TextToSpeech';
import CardMaps from './components/Map/CardMaps';
import Contact from './components/Contact/Contact';

import './App.css';
function App() {
  return (
    <div>
      <HideAppBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/texte" component={(SimpleAccordion, TextToSpeech)} />
        <Route path="/map" component={CardMaps} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
