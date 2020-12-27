import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './MyButton.styles';

export default function MyButton(props) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      color="primary"
      variant="contained"
      type={props.type || "button"}
      disabled={props.disabled}
      onClick={props.onClick}>
      <Typography
        className={classes.buttonText}
        variant="body2"
        color="textSecondary">
        {props.buttonText}
      </Typography>
    </Button>
  );
}
