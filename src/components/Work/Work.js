import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import useStyles from './Work.styles';

import work1 from '../../assets/img/examples/birmingham-museums-trust-rhHr3O3G0ZE-unsplash.jpg';
import work2 from '../../assets/img/examples/birmingham-museums-trust-5EUh-tq31eA-unsplash.jpg';
import work3 from '../../assets/img/examples/europeana-YIfFVwDcgu8-unsplash.jpg';
import work4 from '../../assets/img/examples/lukas-meier-aAxn9pYE8L0-unsplash.jpg';
import work5 from '../../assets/img/examples/europeana-L9au-ZOs8WU-unsplash.jpg';

import webPlatform from '../../assets/img/portfolio/web-platform-1@2x.png'
import mobilePlatform from '../../assets/img/portfolio/mobile-platform-1@2x.png'
import mobilePlatformAngle from '../../assets/img/portfolio/mobile-platform-angle-1.png'
import ipadDirectco from '../../assets/img/portfolio/ipad-directco.jpg'

import monkeys from '../../assets/img/portfolio/studio-pleasure.png'
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
          src={okewa}
          className={classes.imgFluid}
        />
        <img
          alt="..."
          src={ipadDirectco}
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
          src={mobilePlatform}
          className={classes.imgFluid}
        />
      </Grid>
    </Grid>
  );
}
