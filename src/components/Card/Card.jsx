/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SimpleRating from './Stars/Stars';
import Liste from './List/List';
import { Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';

import { ExpandMore, MoreVert } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 10,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#e31d65',
  },
}));
// etape  recuperer place_id
// etape 2 axios sur le place_id
// afficher les informations

export default function CardMaterialUi(props) {
  const [dataReview, setDataReview] = useState([]);
  const [number, setNumber] = useState('');
  const place = props.placeId;

  const commentaire = async () => {
    const cors = 'https://api.allorigins.win/get?url=';
    const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place}&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0`;
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {
      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const results = await JSON.parse(json.contents);
      console.log(results);
      setDataReview(results.result.reviews);
      setNumber(results.result.formatted_phone_number);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };
  const googleStreetView = `https://maps.googleapis.com/maps/api/streetview?size=600x600&location=${props.cardLat},${props.cardLng}&heading=360&pitch=-0.76&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0`;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    commentaire();
  };

  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.initiale}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={props.name}
          subheader={props.adress}
        />
        <CardMedia className={classes.media} image={googleStreetView} title="Paella dish" />
        <CardContent>
          <SimpleRating stars={props.starsRating} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>Contact: {number}</Typography>
            {dataReview &&
              dataReview.map((comment, index) => {
                return (
                  <Liste
                    key={index}
                    number={comment.number}
                    commentaire={comment.reviews}
                    author={comment.author_name}
                    date={comment.relative_time_description}
                    text={comment.text}
                    profile={comment.profile_photo_url}
                    noteUser={comment.rating}
                  />
                );
              })}
          </CardContent>
        </Collapse>
      </Card>
    </Col>
  );
}
