import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Form from '../Form'
import Modal from '../Modal'

import useStyles from './Contact.styles';

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Modal />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" color="subtitle1">
          Get in touch
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="body" color="textSecondary">
          I'm working full time at Directco but keen to collaborate in a contractual part-time capacity. <br />
          More examples of my work are available upon request.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Form/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className={classes.section}>
          <Typography variant="body" color="subtitle1" className={classes.subtitle}>
            Contact
          </Typography>
          <Typography variant="body2" color="textSecondary">
            sean.johnson.dev@gmail.com <br/>
            Wellington, <br/>
            New Zealand
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className={classes.section}>
          <Typography variant="body" color="subtitle1" className={classes.subtitle}>
            Design
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Product Design <br/>
            UI/UX <br/>
            Software Architecture<br/>
            Design Thinking & First Principles <br/>
            Branding <br/>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className={classes.section}>
          <Typography variant="body" color="subtitle1" className={classes.subtitle}>
            Software
          </Typography>
          <Typography variant="body2" color="textSecondary">
            React (Web)<br/>
            React Native + Expo (Mobile)<br/>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            NodeJS (Server)<br/>
            MySQL, NoSQL (Database)<br/>
            Firebase (+ Serverless)<br/>
          </Typography>
            <div className={classes.gap} />
          <Typography variant="body" color="subtitle1" className={classes.subtitle} style={{marginTop: '5rem'}}>
            Architecture
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Docker<br/>
            AWS<br/>
            Google Cloud<br/>
            Github, Version control<br/>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
      </Grid>
    </Grid>
  );
}
