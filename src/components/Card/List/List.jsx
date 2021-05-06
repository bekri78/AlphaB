/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Liste(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem></ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.author} src={props.profile} />
        </ListItemAvatar>
        <ListItemText
          primary={`Note: ${props.noteUser}`}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                {props.author} :
              </Typography>
              {props.text}
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
}
