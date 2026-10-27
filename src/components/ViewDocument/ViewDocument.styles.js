import { makeStyles } from '@material-ui/core/styles';

// PDF document styles now live in src/cv/Resume.styles.js;
// fonts are registered in src/cv/registerFonts.js.

const useStyles = makeStyles((theme) => ({
  pdfViewer: {
    height: '650px',
    marginTop: theme.spacing(2)
  },
  button: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 0,
    width: '200px',
    textTransform: 'capitalize',
    backgroundColor: 'transparent'
  },
  pdfDownloadLink: {
    textDecoration: 'none'
  }
}));

export {
  useStyles
}
