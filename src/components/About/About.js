import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Modal from '../Modal';
import Details from '../Details';
import { about } from '../../content/profile';

import useStyles from './About.styles';

const Paragraphs = ({ items, className }) =>
  items.map((text) => (
    <Typography key={text} variant="body1" color="textSecondary" className={className}>
      {text}
    </Typography>
  ));

export default function About() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Modal />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Typography className={classes.heading} variant="h5" color="textPrimary">
          Kia ora
        </Typography>
        <Paragraphs items={about.intro} className={classes.bodyCopy} />
      </Grid>
      <Grid item xs={12} sm={4} />
      <Grid item xs={12} sm={5}>
        <Typography variant="h5" color="textPrimary" className={classes.heading}>
          {about.experienceHeading}
        </Typography>
        <Paragraphs items={about.experience} className={classes.bodyCopy} />
      </Grid>
      <Details />
    </Grid>
  );
}
