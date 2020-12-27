import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from '../Modal'

import useStyles from './About.styles';

export default function About() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Modal />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Typography className={classes.heading} variant="h5" color="subtitle1">
          I’m a product designer and full stack developer.
        </Typography>
        <Typography variant="body" color="textSecondary" className={classes.bodyCopy}>
          I'm currently the product designer, branding designer and full stack developer at Directco.
          I earned my Master’s in Design with a specialisation in branding, illustration and typography.
          After graduating I worked at a design agency (and for clients) as a branding designer.
          Since then, I branched out and learned to code, then helped to co-found our company [Directco]. 
          I'm proud to say we built services (from ideation to product) that's maintained customer retention
          since its inception 5 years ago.
          <br/>
          <br/>
          I like being curious, enjoy nature 🌞, meditation 🧘‍♂️ and the gym 🏋🏻‍♀️
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Typography variant="h5" color="subtitle1" className={classes.heading}>
          Experience
        </Typography>
        <Typography variant="body" color="textSecondary" className={classes.bodyCopy}>
          I'm a team player. I like to experiment with ideas that have practical utility. I enjoy critique for betterment.
          What excites me is crafting experiences, collaboration and using first principles when trying to solve problems. I have 7+ years design industry experience and 5 years in the start-up space. 
          Feel free to get in touch!
        </Typography>
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
