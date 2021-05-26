import React, { useState, useContext } from 'react';
import { UidContext } from '../UidContext';
import firebase from '../../utils/firebaseConfig';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Rating from '@material-ui/lab/Rating';
import { SnackbarProvider, useSnackbar } from 'notistack';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './OpinionForm.css';

const useStyles = makeStyles((theme) => ({
  rootButton: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60ch',
    },
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonSubmit: {
    width: '12ch',
    height: 42,
    marginBottom: '25px',
    marginRight: '25px',
    background: '#481ab4;',
    borderRadius: 7,
    border: 0,
    color: 'white',
    fontSize: '15px',
  },
  rating: {
    marginBottom: 0,
    marginTop: '15px',
  },
}));

function OpinionForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [job, setJob] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = React.useState(0);
  const uid = useContext(UidContext);
  const { enqueueSnackbar } = useSnackbar();

  const createAvis = () => {
    const avisDB = firebase.database().ref('avisDB');
    const avis = {
      uid,
      firstname,
      lastname,
      job,
      rating,
      message,
    };
    if (uid && firstname && lastname && job && rating && message) {
      avisDB.push(avis);
      setJob('');
      setLastname('');
      setMessage('');
      setRating('');
      setFirstname('');
      enqueueSnackbar('Votre message a bien été envoyé.', { variant: 'success' });
      setOpen(false);
    } else {
      enqueueSnackbar('Tous les champs doivent être renseignés.', { variant: 'error' });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="opinion-button" variant="contained" color="primary" onClick={handleClickOpen}>
        Laisser un avis
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <h3 id="form-dialog-title">Votre avis compte</h3>
        <DialogContent>
          <DialogContentText>
            <div className="presentation-opinion">
              Dans notre démarche d’évolution constante, toute l’équipe d’AlphaB porte de l’intérêt à votre avis car sans vous, nous ne pourrions
              continuer notre belle aventure. Merci pour votre contribution.
            </div>
          </DialogContentText>
          <TextField
            id="firstname-opinion"
            className="text"
            variant="outlined"
            label="Prénom"
            margin="dense"
            fullWidth
            value={firstname}
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            inputProps={{
              style: {
                fontSize: '16px',
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: '16px',
              },
            }}
          />
          <TextField
            id="lastname-opinion"
            variant="outlined"
            label="Nom"
            margin="dense"
            fullWidth
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            inputProps={{
              style: {
                fontSize: '16px',
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: '16px',
              },
            }}
          />
          <TextField
            id="job-opinion"
            variant="outlined"
            label="Métier"
            margin="dense"
            fullWidth
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            inputProps={{
              style: {
                fontSize: '16px',
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: '16px',
              },
            }}
          />
          <TextField
            id="message-opinion"
            variant="outlined"
            multiline
            rows={5}
            label="Témoignage"
            margin="dense"
            fullWidth
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            inputProps={{
              style: {
                fontSize: '16px',
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: '16px',
              },
            }}
          />
          <Box className={classes.rating} component="fieldset" mb={3} borderColor="transparent" margin="dense">
            <Typography component="legend"></Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              precision={1}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
        </DialogContent>

        <div className={classes.rootButton}>
          <React.Fragment>
            <Button className={classes.buttonSubmit} variant="contained" onClick={createAvis}>
              Envoyer
            </Button>
          </React.Fragment>
        </div>
      </Dialog>
    </div>
  );
}

export default function OpinionForme() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <OpinionForm />
    </SnackbarProvider>
  );
}
