import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 0),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
  leftSection: {
		margin: theme.spacing(3, 0, 0, 0),
		height: '100%'
	},
	rightSection: {
		margin: theme.spacing(3, 0, 0, 0),
		height: '100%'
	}
}));

export default useStyles