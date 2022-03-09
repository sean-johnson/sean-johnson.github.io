import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.divider,
    background: 'linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)', // ''linear-gradient( 180.3deg,  rgba(214,224,255,1) 37.2%, rgba(254,168,168,1) 137.3% )',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  }
}));

export default useStyles