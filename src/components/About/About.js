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
          Kia ora
        </Typography>
        <Typography variant="body" color="textSecondary" className={classes.bodyCopy}>
          I'm the lead full stack engineer at Directco, a software company we founded several years ago.
          We have successfully developed services for notable FMCG clients like Fonterra, Red Bull, Unilever, Asahi, Bidfood, and more.
          I'm also the co-founder and lead full stack engineer of Taskhunter, a pay per task marketplace for businesses.
          Prior to that, I earned a Master's degree in Design, specializing in branding and typography, and worked in the design industry.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Typography variant="h5" color="subtitle1" className={classes.heading}>
          Experience
        </Typography>
        <Typography variant="body" color="textSecondary" className={classes.bodyCopy}>
          The things that excite me are crafting experiences, collaboration, and applying first principles to solving problems and creating value.
          My experience is in building software start-ups. Feel free to get in contact.
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
