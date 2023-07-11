import { StyleSheet, Font } from '@react-pdf/renderer'
import { makeStyles } from '@material-ui/core/styles';
import Helvetica from '../../assets/fonts/Karla-Regular.ttf'

Font.register({
  family: 'Helvetica',
  src: Helvetica
})

const useStyles = makeStyles((theme) => ({
  pdfViewer: {
    height: '650px',
    marginTop: theme.spacing(2)
  },
  button: {
    // borderLeft: `1px solid ${theme.palette.divider}`,
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

// Font.register({
//   family: 'Work Sans',
//   src: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap'
// });

const documentStyles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    padding: 45,
    paddingTop: 35,
    lineHeight: 1.3
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Helvetica'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Helvetica'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Helvetica'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    textAlign: 'center',
    color: 'grey',
  },
  leftColumn: {
    width: '30%',
    height: '100%',
    flexDirection: 'column'
  },
  leftTopSection: {
    flexDirection: 'column',
    width: '100%',
    height: 95
  },
  rightColumn: {
    flexDirection: 'column',
    paddingLeft: '20px',
    width: '70%',
    height: '100%'
  },
  rightTopSection: {
    flexDirection: 'column',
    width: '100%',
    height: 95
  },
  nameHeading: {
    fontSize: 17,
    fontFamily: 'Helvetica',
  },
  jobDescriptionSubHeading: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: 'grey'
  },
  tagline: {
    fontSize: 15,
    display: 'hidden',
    fontFamily: 'Helvetica',
  },
  descriptionHeading: {
    fontFamily: 'Helvetica',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 10
  },
  descriptionBold: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.5
  },
  description: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    marginBottom: 15
  },
  descriptionRole: {
    fontSize: 11,
    fontFamily: 'Helvetica'
  },
  descriptionYear: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: 'grey',
    marginBottom: 7
  }
});

export {
  documentStyles,
  useStyles
}