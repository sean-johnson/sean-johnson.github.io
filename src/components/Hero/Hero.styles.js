import { makeStyles } from '@material-ui/core/styles';

const CHROME = '#1f2124';
const CHROME_LIGHT = '#2b2e32';

const useStyles = makeStyles((theme) => ({
  // Outer wrapper carries the margins and hosts the arrows, which sit outside the frame
  root: {
    position: 'relative',
    margin: theme.spacing(3, 2, 2, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 9, 3, 7),
    },
    outline: 'none',
  },
  frame: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: CHROME,
    boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.45), 0 18px 36px -18px rgba(0, 0, 0, 0.3)',
    '$root:focus-visible &': {
      boxShadow: `0 0 0 3px ${theme.palette.common.white}, 0 30px 60px -20px rgba(0, 0, 0, 0.45)`,
    },
  },

  // --- browser chrome ---------------------------------------------------------------------
  chrome: {
    display: 'flex',
    alignItems: 'center',
    height: 38,
    padding: theme.spacing(0, 1.5),
    backgroundColor: CHROME,
    borderBottom: `1px solid ${CHROME_LIGHT}`,
  },
  lights: {
    display: 'flex',
    '& span': {
      width: 11,
      height: 11,
      borderRadius: '50%',
      marginRight: 7,
    },
    '& span:nth-child(1)': { backgroundColor: '#ff5f57' },
    '& span:nth-child(2)': { backgroundColor: '#febc2e' },
    '& span:nth-child(3)': { backgroundColor: '#28c840' },
  },
  urlBar: {
    flex: 1,
    margin: theme.spacing(0, 2, 0, 1.5),
    height: 24,
    lineHeight: '24px',
    padding: theme.spacing(0, 1.5),
    borderRadius: 6,
    backgroundColor: CHROME_LIGHT,
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    fontFamily: theme.typography.fontFamily,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& svg': {
      verticalAlign: '-2px',
      marginRight: 6,
      opacity: 0.7,
    },
  },
  counter: {
    color: 'rgba(255, 255, 255, 0.45)',
    fontSize: 11,
    letterSpacing: 1,
    fontVariantNumeric: 'tabular-nums',
  },

  // --- slides -----------------------------------------------------------------------------
  viewport: {
    position: 'relative',
    display: 'block',
    width: '100%',
    paddingTop: `${(1800 / 2880) * 100}%`, // screenshots are 16:10
    overflow: 'hidden',
    backgroundColor: '#0b1220',
    cursor: 'pointer',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0,
    transform: 'scale(1.015)',
    transition: 'opacity 900ms ease, transform 7000ms linear',
    pointerEvents: 'none',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'opacity 300ms ease',
      transform: 'none',
    },
  },
  slideActive: {
    opacity: 1,
    transform: 'scale(1.0)',
  },

  // --- caption bar below the image + controls (siblings of the link, not children) -------
  caption: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 56,
    padding: theme.spacing(1.5, 2.5),
    backgroundColor: CHROME,
    borderTop: `1px solid ${CHROME_LIGHT}`,
    color: theme.palette.common.white,
  },
  captionText: {
    fontSize: 13,
    lineHeight: 1.4,
    letterSpacing: 0.2,
    color: 'rgba(255,255,255,0.72)',
    '& strong': {
      display: 'block',
      fontWeight: 600,
      fontSize: 14,
      color: theme.palette.common.white,
      marginBottom: 1,
    },
  },
  captionCta: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.6)',
    whiteSpace: 'nowrap',
    marginLeft: theme.spacing(2),
    textDecoration: 'none',
    transition: 'color 200ms ease',
    '&:hover, &:focus-visible': { color: theme.palette.common.white },
    [theme.breakpoints.down('xs')]: { display: 'none' },
  },
  dots: {
    position: 'absolute',
    top: 38 + 12,
    right: 14,
    display: 'flex',
    padding: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(5, 10, 20, 0.45)',
    backdropFilter: 'blur(4px)',
  },
  dot: {
    width: 8,
    height: 8,
    margin: 4,
    padding: 0,
    border: 0,
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.4)',
    cursor: 'pointer',
    transition: 'background-color 200ms ease, transform 200ms ease',
    '&:hover': { backgroundColor: 'rgba(255,255,255,0.8)' },
    '&:focus-visible': { outline: `2px solid ${theme.palette.common.white}`, outlineOffset: 2 },
  },
  dotActive: {
    backgroundColor: theme.palette.common.white,
    transform: 'scale(1.25)',
  },
  // Arrows live in the margins beside the frame so they never sit on the screenshot.
  // Only shown from md up, where the margins have room for them.
  arrow: {
    position: 'absolute',
    top: 'calc(50% - 22px)',
    width: 44,
    height: 44,
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '50%',
    backgroundColor: theme.palette.common.white,
    color: '#1f2124',
    boxShadow: '0 6px 16px -6px rgba(0, 0, 0, 0.45)',
    cursor: 'pointer',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
    [theme.breakpoints.up('md')]: { display: 'flex' },
    '&:hover': {
      transform: 'scale(1.08)',
      boxShadow: '0 10px 22px -8px rgba(0, 0, 0, 0.55)',
    },
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.common.white}`,
      outlineOffset: 2,
    },
  },
  arrowPrev: { left: -58 },
  arrowNext: { right: -58 },
  '@keyframes heroProgress': {
    from: { transform: 'scaleX(0)' },
    to: { transform: 'scaleX(1)' },
  },
  progress: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.85)',
    transformOrigin: 'left',
    transform: 'scaleX(0)',
    pointerEvents: 'none',
    animation: '$heroProgress linear forwards',
    '@media (prefers-reduced-motion: reduce)': { display: 'none' },
  },
  progressPaused: {
    animationPlayState: 'paused',
  },
}));

export default useStyles;
