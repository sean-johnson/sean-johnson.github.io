import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import ViewDocument from '../ViewDocument'
import MyButton from '../MyButton';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    outline: 'none',
    width: '90%',
    // background: 'linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)',
    backgroundColor: '#0f2027',
    // background: '-webkit-linear-gradient(to bottom, #0f2027, #203a43, #2c5364)', // Chrome 10-25, Safari 5.1-6 
    background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)', // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    borderRadius: '3px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.modal}>
      <ViewDocument />
    </div>
  );

  return (
    <div>
      <MyButton
        buttonText={"View my C.V."}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
