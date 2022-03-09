import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import useStyles from './Work.styles';

import webPlatform from '../../assets/img/portfolio/web-platform-1@2x.png'
import mobilePlatform from '../../assets/img/portfolio/mobile-platform-1@2x.png'
import mobilePlatformAngle from '../../assets/img/portfolio/mobile-platform-angle-1.png'
import ipadDirectco from '../../assets/img/portfolio/ipad-directco.jpg'

import monkeys from '../../assets/img/portfolio/studio-pleasure.png'
import bastardRye from '../../assets/img/portfolio/gp-2.jpg'
import garageProjectTwo from '../../assets/img/portfolio/gp-5.jpg'
import thweeknd2 from '../../assets/img/portfolio/thweeknd-2.jpg'
import quantum from '../../assets/img/portfolio/quantum-4.jpg'
import bigOrange from '../../assets/img/portfolio/various-5.jpg'
import okewa from '../../assets/img/portfolio/various-7.jpg'
import seanLogo from '../../assets/img/portfolio/type-2.jpg' 


export default function Work() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} sm={12}>
        <img
          alt="..."
          src={webPlatform}
          className={classes.imgFluid}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          alt="..."
          src={mobilePlatformAngle}
          className={classes.imgFluid}
        />
        <img
          alt="..."
          src={garageProjectTwo}
          className={classes.imgFluid}
        />
       
        <img
          alt="..."
          src={mobilePlatform}
          className={classes.imgFluid}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          alt="..."
          src={ipadDirectco}
          className={classes.imgFluid}
        />
       <img
          alt="..."
          src={okewa}
          className={classes.imgFluid}
        />
         <img
          alt="..."
          src={bastardRye}
          className={classes.imgFluid}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          alt="..."
          src={monkeys}
          className={classes.imgFluid}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          alt="..."
          src={bigOrange}
          className={classes.imgFluid}
        />
      </Grid>
    </Grid>
  );
}
