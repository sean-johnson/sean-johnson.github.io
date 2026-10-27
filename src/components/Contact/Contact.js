import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Form from '../Form';
import Modal from '../Modal';
import Details from '../Details';
import { contactPage } from '../../content/profile';

import useStyles from './Contact.styles';

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Modal />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" color="textPrimary" className={classes.heading}>
          Get in touch
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} />
      <Grid item xs={12} sm={8}>
        {contactPage.intro.map((text) => (
          <Typography key={text} variant="body1" color="textSecondary">
            {text}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} sm={4} />
      <Grid item xs={12} sm={8}>
        <Form />
      </Grid>
      <Details />
    </Grid>
  );
}
