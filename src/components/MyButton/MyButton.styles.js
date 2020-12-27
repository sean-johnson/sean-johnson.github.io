import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1.5),
    borderRadius: 3,
    width: '200px',
    // boxShadow: 'none',
    backgroundColor: 'transparent'
  },
  buttonText: {
    fontSize: '0.75rem',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  }
}));

export default useStyles