/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useSpeechRecognition } from '../ReactSpeech/';
import { Container } from '../shared';

const languageOptions = [
  { label: 'Cambodian', value: 'km-KH' },
  { label: 'Deutsch', value: 'de-DE' },
  { label: 'English', value: 'en-AU' },
  { label: 'Farsi', value: 'fa-IR' },
  { label: 'Français', value: 'fr-FR' },
  { label: 'Italiano', value: 'it-IT' },
  { label: '普通话 (中国大陆) - Mandarin', value: 'zh' },
  { label: 'Portuguese', value: 'pt-BR' },
  { label: 'Español', value: 'es-MX' },
  { label: 'Svenska - Swedish', value: 'sv-SE' },
];

function Example(props) {
  const [lang, setLang] = useState('fr-FR');
  const [value, setValue] = useState('');
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    console.log(value);
    props.vocaleTexte(value);
  }, [value]);

  const onEnd = () => {};

  const onResult = (result) => {
    setValue(result);
  };

  const changeLang = (event) => {
    setLang(event.target.value);
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd,
  });

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false);
        listen({ lang });
      };
  const erreurMic = {
    color: 'red',
  };

  return (
    <Container>
      <form id="speech-recognition-form">
        {!supported && <p>Quelle dommage il semble que vous ne puissiez utilisez cette fonctionnalitée</p>}
        {supported && (
          <React.Fragment>
            <label htmlFor="language">Langue</label>
            <select form="speech-recognition-form" id="language" value={lang} onChange={changeLang}>
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div style={{ height: 112, display: 'flex', justifyContent: 'center' }}>
              <p>Selectionner votre langue afin de permettre une meilleur retranscription de vos mots.</p>
            </div>
            <Button variant="contained" color="primary" disabled={blocked} onClick={toggle}>
              {listening ? 'Stop' : 'Parler'}
            </Button>

            {blocked && <p style={erreurMic}>Le micro est bloqué sur ce navigateur verifiez vos parametres</p>}
          </React.Fragment>
        )}
      </form>
    </Container>
  );
}

export default Example;
