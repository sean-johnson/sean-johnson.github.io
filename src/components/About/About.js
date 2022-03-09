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
          Kia Ora,
        </Typography>
        <Typography variant="body" color="textSecondary" className={classes.bodyCopy}>
          I'm the product designer, branding designer, and full stack developer at Directco. 
          I earned my Master's in Design with a focus on branding, illustration, and typography. 
          After graduating, I worked for an advertising agency.
          I learned to code since then and contributed to the founding of our company Directco.
          I'm proud to say that we built services (from ideation to product) that have maintained customer retention since its inception 6 years ago.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Typography variant="h5" color="subtitle1" className={classes.heading}>
          Experience
        </Typography>
        <Typography variant="body" color="textSecondary" className={classes.bodyCopy}>
          The things that excite me are crafting experiences, collaboration, and applying first principles to solving problems. My experience is in design and start-ups. Feel free to get in contact 🌞
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
            React + Redux <br/>
            React Native + Expo<br/>
          </Typography>
          <Typography variant="body" color="subtitle1" className={classes.subtitle}>
            Backend
          </Typography>
          <Typography variant="body2" color="textSecondary">
            NodeJS<br/>
            MySQL<br/>
            Firebase<br/>
          </Typography>
          <Typography variant="body" color="subtitle1" className={classes.subtitle}>
            DevOps
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Docker<br/>
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
