/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useSpeechSynthesis } from '../ReactSpeech/';
import { Container } from '../shared';
import { useTranslation } from "react-i18next";
function Example(props) {
  const [text, setText] = useState();
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voiceIndex, setVoiceIndex] = useState(null);
  const [t] = useTranslation("global");
  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  const onEnd = () => {};
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  const voice = voices[voiceIndex] || null;

  const styleFlexRow = { display: 'flex', flexDirection: 'row' };
  const styleContainerRatePitch = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
  };

  return (
    <Container>
      <form>
        {!supported && <p>Quelle dommage il semble que vous ne puissiez utilisez cette fonctionnalitée.</p>}
        {supported && (
          <React.Fragment>
            <label htmlFor="voice">{t("Outils.voix")}</label>
            <select
              id="voice"
              name="voice"
              value={voiceIndex || ''}
              onChange={(event) => {
                setVoiceIndex(event.target.value);
              }}>
              <option value="">Default</option>
              {voices.map((option, index) => (
                <option key={option.voiceURI} value={index}>
                  {`${option.lang} - ${option.name}`}
                </option>
              ))}
            </select>
            <div style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <label htmlFor="rate">Vitesse: </label>
                <div className="rate-value">{rate}</div>
              </div>
              <input
                type="range"
                min="0.5"
                max="2"
                defaultValue="1"
                step="0.1"
                id="rate"
                onChange={(event) => {
                  setRate(event.target.value);
                }}
              />
            </div>
            <div style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <label htmlFor="pitch">Pitch: </label>
                <div className="pitch-value">{pitch}</div>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                defaultValue="1"
                step="0.1"
                id="pitch"
                onChange={(event) => {
                  setPitch(event.target.value);
                }}
              />
            </div>

            {speaking ? (
              <Button variant="contained" color="primary" onClick={cancel}>
                Stop
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={() => speak({ text, voice, rate, pitch })}>
                Play
              </Button>
            )}
          </React.Fragment>
        )}
      </form>
    </Container>
  );
}

export default Example;
