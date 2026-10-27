import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import MyButton from '../MyButton';
import { useStyles } from './ViewDocument.styles';

import { preloadFonts } from '../../cv/registerFonts';
import Resume from '../../cv/Resume';
import general from '../../cv/variants/general';

// The website always shows the general CV. Company-specific variants live in
// src/cv/variants/private/ and are exported with `node scripts/build-cv.js <variant>`.
const MyResume = () => <Resume data={general.data} />;

export default function ViewDocument() {
  // Fonts must be loaded before the viewer and download link render concurrently.
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    let mounted = true
    preloadFonts().then(() => { if (mounted) setIsClient(true) })
    return () => { mounted = false }
  }, [])

  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        <Grid container direction="row" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="textPrimary">
              Sean Johnson - Resumé
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={6} direction="row" justify="flex-end">
            {isClient && <PDFDownloadLink
              className={classes.pdfDownloadLink}
              document={<MyResume />}
              fileName={general.fileName}>
              {({ blob, url, loading, error }) => (loading
                ? 'Loading...'
                : <MyButton buttonText={"Download C.V."}/>)}
              </PDFDownloadLink>
            }
          </Grid>
        </Grid>
        {isClient && <PDFViewer className={classes.pdfViewer}>
          <MyResume />
        </PDFViewer>}
      </Grid>
    </div>
  )
}
