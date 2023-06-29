import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // margin: theme.spacing(3, 0, 3)
  },
  heading: {
    marginBottom: theme.spacing(2)
  },
  subtitle: {
    width: '100%',
    letterSpacing: '2px',
    fontSize: '0.75rem',
    textTransform: 'uppercase'
  },
  section: {
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2, 0, 0, 0)
  },
  gap: {
    padding: theme.spacing(1, 0, 0, 0)
  }
}));

export default useStyles