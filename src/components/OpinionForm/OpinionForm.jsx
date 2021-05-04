import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

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
    background: 'linear-gradient(to right top, #40d4f3, #4dd8f6, #58ddf9, #62e1fc, #6ce6ff)',
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

export default function OpinionForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [job, setJob] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const failMessage = () => {
    //ajout modal d'erreur
    // enqueueSnackbar('Tous les champs doivent être renseignés.', { variant: 'error' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && message && rating) {
      axios
        .post('http://localhost:4000/ratings', {
          firstname,
          lastname,
          job,
          message,
          rating,
        })
        .then(function (response) {
          console.log(response.status);
          setFirstname('');
          setLastname('');
          setJob('');
          setMessage('');
          setRating('');
          //ajout modal de validation
          // if (response.status === 201) {
          //   enqueueSnackbar('Votre message a bien été envoyé.', { variant: 'success' });
          // }
        })
        .catch(function (error) {
          console.log(error);
          // enqueueSnackbar('Une erreur est survenue.', { variant: 'error' });
        });
    } else {
      failMessage();
    }
  };

  return (
    <div>
      <Button className="opinion-button" variant="outlined" color="primary" onClick={handleClickOpen}>
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
            <Button className={classes.buttonSubmit} variant="contained" onClick={handleSubmit}>
              Envoyer
            </Button>
          </React.Fragment>
        </div>
      </Dialog>
    </div>
  );
}
