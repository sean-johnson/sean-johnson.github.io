import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { contact, details } from '../../content/profile';
import useStyles from './Details.styles';

const Lines = ({ items }) => (
  <Typography variant="body2" color="textSecondary">
    {items.map((item) => (
      <React.Fragment key={item}>
        {item}
        <br />
      </React.Fragment>
    ))}
  </Typography>
);

// Contact / Design / Software / Cloud columns shown under both the About and Contact tabs.
export default function Details() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={4}>
        <div className={classes.section}>
          <Typography variant="body1" color="textPrimary" className={classes.subtitle}>
            Contact
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link color="inherit" href={`mailto:${contact.email}`}>{contact.email}</Link>
            <br />
            <Link color="inherit" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            {' · '}
            <Link color="inherit" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</Link>
            <br />
            {contact.location.map((line) => (
              <React.Fragment key={line}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </div>
      </Grid>
      {details.map((column) => (
        <Grid item xs={12} sm={4} key={column[0].title}>
          <div className={classes.section}>
            {column.map((section, s) => (
              <React.Fragment key={section.title}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={classes.subtitle}
                  style={s > 0 ? { marginTop: '3rem' } : undefined}
                >
                  {section.title}
                </Typography>
                {section.groups.map((group, g) => (
                  <React.Fragment key={g}>
                    {g > 0 && <div className={classes.gap} />}
                    <Lines items={group} />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </Grid>
      ))}
    </>
  );
}
