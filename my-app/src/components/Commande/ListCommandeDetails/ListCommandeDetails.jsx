import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
 
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
 
import './List.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin:'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function ListCommandeDetails() {
  const classes = useStyles();
  

 

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Des fonctionnalites utiles
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <TextFieldsIcon />
        </ListItemIcon>
        <ListItemText primary="Ecrivez votre texte sans limite" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CloudDownloadIcon />
        </ListItemIcon>
        <ListItemText primary="Recuperer votre texte modifier au format pdf" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ColorLensIcon />
        </ListItemIcon>
        <ListItemText primary="Acceder a une large gamme  de couleurs differentes" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          < FontDownloadIcon />
        </ListItemIcon>
        <ListItemText primary="Acceder a une multitudes de polices differentes" />
      </ListItem>
     
       
    </List>
  );
}
