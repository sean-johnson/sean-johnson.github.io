import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  imgFluid: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  // Clickable product shots: lift slightly on hover and reveal the destination host
  imageLink: {
    position: 'relative',
    display: 'block',
    outline: 'none',
    transition: 'transform 250ms ease',
    '&:hover, &:focus-visible': {
      transform: 'translateY(-3px)',
    },
    '&:hover $imageLinkTag, &:focus-visible $imageLinkTag': {
      opacity: 1,
      transform: 'translateY(0)',
    },
    '&:focus-visible $imgFluid': {
      outline: `3px solid ${theme.palette.common.white}`,
      outlineOffset: -3,
    },
  },
  imageLinkTag: {
    position: 'absolute',
    left: theme.spacing(1.5),
    top: theme.spacing(1.5),
    padding: theme.spacing(0.5, 1.25),
    borderRadius: 999,
    backgroundColor: 'rgba(5, 10, 20, 0.75)',
    color: theme.palette.common.white,
    fontSize: 11,
    letterSpacing: 1,
    opacity: 0,
    transform: 'translateY(4px)',
    transition: 'opacity 200ms ease, transform 200ms ease',
    pointerEvents: 'none',
  },
}));

export default useStyles;
