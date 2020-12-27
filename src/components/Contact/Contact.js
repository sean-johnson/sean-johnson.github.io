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
          Get in touch.
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
            Design Services
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Brand Development & Identity <br/>
            UI/UX Design <br/>
            Product Design <br/>
            Printed Materials <br/>
            Promotional Materials <br/>
            Editorial Design
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className={classes.section}>
        <Typography variant="body" color="subtitle1" className={classes.subtitle}>
            Frontend + App Development
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ReactJS <br/>
            Redux <br/>
            React Native + Expo<br/>
          </Typography>
          <Typography variant="body" color="subtitle1" className={classes.subtitle}>
            Backend
          </Typography>
          <Typography variant="body2" color="textSecondary">
            NodeJS<br/>
            MySQL<br/>
          </Typography>
          <Typography variant="body" color="subtitle1" className={classes.subtitle}>
            DevOps
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Docker + Docker Swarm<br/>
            AWS<br/>
            Github, Version control<br/>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
      </Grid>
    </Grid>
  );
}
