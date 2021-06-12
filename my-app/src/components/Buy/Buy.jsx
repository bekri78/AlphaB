import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import imgBuy from './Img/graduation.svg'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin:'auto',
    textAlign:'center'
   
  },
  commande:{
      color:'white'
  },
}));

export default function Buy(props) {
  const classes = useStyles();
  
 

  const handleClose = () => {
    props.closeBuy(false);
  };

  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.openBuy}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.openBuy}>
          <div className={classes.paper}>
              <img src ={imgBuy} alt='imgBuy' style={{width:'50%'}}/>
            <h2 id="transition-modal-title">Passer a un compte Premium </h2>
            <p id="transition-modal-description">Afin de depasser la limite de 250 caractères</p>
            <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />}>
            <Link   className={classes.commande} to="/commmande">  Commander</Link>
      </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
