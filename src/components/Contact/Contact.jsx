import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
 import ContactSvg from './img/contactsvg.svg'
import './Contact.css';
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60ch',
      '@media screen and (max-width: 650px)': { width: '40ch' },
      '@media screen and (max-width: 415px)': { width: '30ch' },
    },
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    width: '12ch',
    height: 44,
    marginTop: '15px',
    padding: '0 30px',

    background: 'linear-gradient(to right top, #114aa3, #1b52ac, #235bb5, #2b63bf, #326cc8)',
    borderRadius: 7,
    border: 0,
    color: 'white',
    fontSize: '15px',
  },
}));

function Contact() {
  const classes = useStyles();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const [t] = useTranslation("global");

  const failMessage = () => {
    //ajout modal d'erreur
    enqueueSnackbar( t("Contact.champs"), { variant: 'error' });
  };

  const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-A0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(regex)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && isEmail() && message) {
      sendEmail({
        firstname,
        lastname,
        email,
        message,
      });
    } else {
      failMessage(t("Contact.remplire"));
    }
  };
  const sendEmail = (variable) => {
    console.log(variable);
    emailjs.send('service_ar8ie92', 'template_7te270a', variable, 'user_CeUZSbU8Tow2n0Uj8WHhH').then(
      () => {
        enqueueSnackbar(t("Contact.envoyer"), { variant: 'success' });
        setFirstname('');
        setLastname('');
        setEmail('');
        setMessage('');
      },
      (error) => {
        failMessage( t("Contact.erreur"), error);
      },
    );
  };

  return (
    <>
      <div className="container-design">
        <img id="design" src={ContactSvg} alt="design" />
       
      </div>
      <h2 className="title-contact">{t("Contact.title")}</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label={t("Contact.prenom")}
          variant="outlined"
          value={firstname}
          type="text"
          autoComplete="off"
          onChange={(e) => setFirstname(e.target.value)}
          inputProps={{
            style: {
              fontSize: '18px',
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: '18px',
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label={t("Contact.nom")}
          variant="outlined"
          value={lastname}
          type="text"
          autoComplete="off"
          onChange={(e) => setLastname(e.target.value)}
          inputProps={{
            style: {
              fontSize: '18px',
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: '18px',
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          inputProps={{
            style: {
              fontSize: '18px',
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: '18px',
            },
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label={t("Contact.message")}
          multiline
          rows={7}
          variant="outlined"
          type="text"
          value={message}
          autoComplete="off"
          onChange={(e) => setMessage(e.target.value)}
          inputProps={{
            style: {
              fontSize: '18px',
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: '18px',
            },
          }}
        />
      </form>
      <div className={classes.root}>
        <React.Fragment>
          <Button id="button-submit" className={classes.button} variant="contained" onClick={handleSubmit}>
             {t("Contact.btn")}
          </Button>
        </React.Fragment>
      </div>
      <Footer />
    </>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <Contact />
    </SnackbarProvider>
  );
}
emailjs.init('user_CeUZSbU8Tow2n0Uj8WHhH');
