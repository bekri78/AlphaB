import React, { useState, useCallback, Fragment } from 'react';
import SimpleAccordion from '../components/Questions/questions';
import SpeechSynthesisExample from '../components/Speech/useSpeechSynthesis';
import SpeechRecognitionExample from '../components/Speech/useSpeechRecognition';
import Interlignage from '../components/Interlignage';
import Intermot from '../components/Intermot';
import Espace from '../components/Espace';
import FontSize from '../components/FontSize/FontSize';
import Couleur from '../components/Couleur';
import Voyelles from '../components/Voyelles';
import Police from '../components/Police';
import Footer from '../components/Footer/Footer';
import InputBase from '@material-ui/core/InputBase';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, CardContent, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '27px 12px 10px',
    height: '100%',
  },
  root2: {
    boxShadow: '0 0px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    minHeight: '534px',
    maxHeight: '534px',
    overflow: 'auto',
    margin: '8px',
    '@media screen and (max-width: 425px)': { margin: '0px' },
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  input: {
    height: '100%',
    width: '100%',
    marginTop: '0!important',
  },
  color: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '-10px',
    flexWrap: 'wrap',
  },
  containerWrapper: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '10px',
    '@media screen and (max-width: 425px)': { display: 'block' },
  },
  botom: {
    margin: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardAudio: {
    display: 'flex',
    justifyContent: 'center',
    margin: '50px',
    flexWrap: 'wrap',
  },
}));

function TextToSpeech() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [modifiedValue, setModifiedValue] = useState([]); // creation d'un state array pour contenir le texte tranformer de voyelles.jsx
  const [currentPolice, setCurrentPolice] = useState('');
  const [currentSize, setCurrentSize] = useState('');
  const [currentLineHeight, setCurrentLineHeight] = useState(''); //useState pour modifier interlignage
  const [currentWordSpace, setCurrentWordSpace] = useState(''); //useState pour modifier inter-mot
  const [letterSpacing, setLetterSpacing] = useState('');
  const [colorText, setColorText] = useState('');
  const [affichage, setAffichage] = useState(true);

  // Callback avec array vide permet de ne pas re rendre la déclaration d'une function
  const handleValueChange = useCallback((event) => {
    setValue(event.target.value);
    let test = event.target.value.length;
    setAffichage(true);
    console.log(test);
    // test > 0 ? setVoyelleVisible(false) : setVoyelleVisible(true);
  }, []);

  const handleTextModifier = useCallback((newText) => {
    setModifiedValue(newText);
    console.log(newText);
    setAffichage(false);
  });

  const handleColorModifier = useCallback((newColor) => {
    setColorText(newColor);
  });

  return (
    <>
      <SimpleAccordion />
      <div className={classes.cardAudio}>
        <SpeechSynthesisExample text={value} />
        <SpeechRecognitionExample vocaleTexte={(mots) => setValue(mots)} />
      </div>
      <div className={classes.color}>
        <Interlignage onChangeLine={(newLineHeight) => setCurrentLineHeight(newLineHeight)} />
        <Intermot onChangeWord={(newWordSpace) => setCurrentWordSpace(newWordSpace)} />
        <Espace letterSpacingModifier={(newEspace) => setLetterSpacing(newEspace)} />
        <FontSize onChangeFontSize={(newFontSize) => setCurrentSize(newFontSize)} />
        <Police onChangePolice={(newPolice) => setCurrentPolice(newPolice)} />
        <Couleur colorModifier={handleColorModifier} />
        <Voyelles textModifier={handleTextModifier} value={value} />
      </div>
      <div className={classes.root}>
        <Box className={classes.containerWrapper}>
          <InputBase
            id="filled-full-width"
            placeholder="Entrer votre texte..."
            multiline
            value={value}
            className={classes.input}
            onChange={handleValueChange}
            inputProps={{
              style: {
                fontFamily: currentPolice,
                fontSize: currentSize,
                lineHeight: currentLineHeight,
                wordSpacing: currentWordSpace,
                letterSpacing: letterSpacing,
                color: colorText,

                boxShadow: '0 0 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                minHeight: '497px',
                padding: 18,
              },
            }}
          />
          {/* wordBreak: 'break-all'  = retour a la ligne du text automatique*/}
          <div style={{ wordBreak: 'break-all' }}>
            {/* utilisation d'une card car textarea ne supporte pas le html */}
            <Card className={classes.root2}>
              <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Vos Modifications
                </Typography> */}
                {/* parcours mon tableau et affiche les lettres avec les span colorier */}
                <Typography
                  style={{
                    fontFamily: currentPolice,
                    fontSize: currentSize,
                    lineHeight: currentLineHeight,
                    wordSpacing: currentWordSpace,
                    letterSpacing: letterSpacing,
                    color: colorText,
                  }}
                  component="h6">
                  {affichage ? <Fragment>{value}</Fragment> : modifiedValue.map((letter, index) => <Fragment key={index}>{letter}</Fragment>)}

                  {/* parcours mon tableau et affiche les lettres avec les span colorier */}
                  {/*fragment = <> utilisé pour englober letter et mettre une key  */}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default TextToSpeech;
