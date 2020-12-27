import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	leftSection: {
		margin: theme.spacing(3, 0, 0, 0),
		backgroundColor: 'red',
		height: '100%'
	},
	rightSection: {
		margin: theme.spacing(3, 0, 0, 0),
		backgroundColor: 'blue',
		height: '100%'
	}
}));

export default useStyles
