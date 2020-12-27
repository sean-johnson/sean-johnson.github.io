import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import useStyles from './Footer.styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()}. Built by Sean Johnson using <Link color="inherit" href="https://reactjs.org/">React</Link> & <Link color="inherit" href="https://material-ui.com/">Material UI.</Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
      </Grid>
    </Grid>
  );
}
