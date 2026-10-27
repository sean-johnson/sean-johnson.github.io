import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from './Work.styles';
import Hero, { DIRECTCO_URL } from '../Hero';

import imageTwo from '../../assets/img/portfolio/image-2@2x.png';
import imageThree from '../../assets/img/portfolio/image-3@2x.png';
import imageFour from '../../assets/img/portfolio/image-4@2x.png';
import imageFive from '../../assets/img/portfolio/image-5@2x.png';
import imageSix from '../../assets/img/portfolio/image-6@2x.png';
import imageSeven from '../../assets/img/portfolio/image-7@2x.png';
import imageEight from '../../assets/img/portfolio/image-8@2x.png';

const TASKHUNTER_URL = 'https://taskhunter.co.nz';

// Layout rows below the hero: each entry is a list of images; one image = full width,
// two = half width each. `href` makes the image a link to the live product.
const rows = [
  [
    { src: imageTwo, alt: 'Taskhunter marketplace: customer visit task', href: TASKHUNTER_URL },
    { src: imageThree, alt: 'Directco ordering app on tablet', href: DIRECTCO_URL },
  ],
  [
    { src: imageFour, alt: 'Directco ordering app on mobile', href: DIRECTCO_URL },
    { src: imageFive, alt: 'Taskhunter: editing a task product', href: TASKHUNTER_URL },
  ],
  [{ src: imageSix, alt: 'Taskhunter agent app: mission, checklist and performance screens', href: TASKHUNTER_URL }],
  [
    { src: imageSeven, alt: 'Timmy Cooks logo and branding' },
    { src: imageEight, alt: 'Metagalaxy NFT marketplace website' },
  ],
];

const hostOf = (href) => href.replace(/^https?:\/\//, '');

export default function Work() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12}>
        <Hero />
      </Grid>
      {rows.map((row) =>
        row.map((image) => {
          const img = (
            <img
              alt={image.alt}
              src={image.src}
              className={classes.imgFluid}
              loading="lazy"
              decoding="async"
            />
          );
          return (
            <Grid item xs={12} sm={row.length === 1 ? 12 : 6} key={image.src}>
              {image.href ? (
                <a
                  href={image.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.imageLink}
                  title={`Open ${hostOf(image.href)} in a new tab`}
                  aria-label={`${image.alt}. Opens ${hostOf(image.href)} in a new tab`}
                >
                  {img}
                  <span className={classes.imageLinkTag}>{hostOf(image.href)} ↗</span>
                </a>
              ) : (
                img
              )}
            </Grid>
          );
        })
      )}
    </Grid>
  );
}
