import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import useStyles from './Work.styles';

// new images
import imageOne from '../../assets/img/portfolio/image-1@2x.png'
import imageTwo from '../../assets/img/portfolio/image-2@2x.png'
import imageThree from '../../assets/img/portfolio/image-3@2x.png'
import imageFour from '../../assets/img/portfolio/image-4@2x.png'
import imageFive from '../../assets/img/portfolio/image-5@2x.png'
import imageSix from '../../assets/img/portfolio/image-6@2x.png'
import imageSeven from '../../assets/img/portfolio/image-7@2x.png'
import imageEight from '../../assets/img/portfolio/image-8@2x.png'

export default function Work() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.root}>
      {/* Top header full width */}
      <Grid item xs={12} sm={12}>
        <img
          alt="..."
          src={imageOne}
          className={classes.imgFluid}
        />
      </Grid>
      {/* Left column half width */}
      <Grid item xs={12} sm={6}>
        <img
          alt="..."
          src={imageTwo}
          className={classes.imgFluid}
        />
        <img
          alt="..."
          src={imageFour}
          className={classes.imgFluid}
        />
      </Grid>
      {/* Right column half width */}
      <Grid item xs={12} sm={6}>
        <img
          alt="..."
          src={imageThree}
          className={classes.imgFluid}
        />
        <img
          alt="..."
          src={imageFive}
          className={classes.imgFluid}
        />
      </Grid>
      {/* Bottom-mid image full width */}
      <Grid item xs={12} sm={12}>
        <img
          alt="..."
          src={imageSix}
          className={classes.imgFluid}
        />
      </Grid>
      {/* Bottom left column half width */}
      <Grid item xs={12} sm={6}>
        <img
          alt="..."
          src={imageSeven}
          className={classes.imgFluid}
        />
      </Grid>
      {/* Bottom right column half width */}
      <Grid item xs={12} sm={6}>
        <img
          alt="..."
          src={imageEight}
          className={classes.imgFluid}
        />
      </Grid>
    </Grid>
  );
}
