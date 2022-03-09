import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 3),
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(3, 0, 0, 0)
    // backgroundColor: theme.palette.secondary.main
  }
}));

export default useStyles