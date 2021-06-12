import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import reportWebVitals from "./reportWebVitals";
import globale_fr from "./locales/fr/traduction.json";
import globale_en from "./locales/en/traduction.json";
import globale_es from "./locales/es/traduction.json";
import globale_it from "./locales/it/traduction.json";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "fr",
  resources: {
    fr: {
      global: globale_fr,
    },
    en: {
      global: globale_en,
    },
    es: {
      global: globale_es,
    },
    it: {
      global: globale_it,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
