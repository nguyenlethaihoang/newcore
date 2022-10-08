// Libraries
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';

// Components
import Block_Children from '../../../components/Block_Children';
import Block_Button from '../../../components/Block_Button';
import CloseAccount_Components01 from './CloseAccount_Components01';
import CloseAccount_Components02 from './CloseAccount_Components02';
import Block_Dialog from '../../../components/Block_Dialog';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_CloseAccount({CustomerID}) {
// Manage Change Component when on Click
const [isChangeComponent01, setIsChangeComponent01] = useState(true)
  // Manage Disable
  const [isDisabledDialog, setIsDisabledDialog] = useState(true)
  const handleClick = () => {
      setIsDisabledDialog(true);
  };
  // Manage Dialog
  const [open, setOpen] = React.useState(false);
  // Open Dialog
  const handleClickOpen = () => {
    setIsDisabledDialog(true)
    setOpen(true);
  };
  // Close Dialog
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton 
          color="primary"
          aria-label="close"
          onClick={handleClickOpen}
      >
          <CloseIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
            style: {
            //   backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
      >
        <AppBar sx={{ position: 'relative' , backgroundColor: '#d71921'}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Close Account 
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Block_Button>
            <Button
                disabled
                variant="contained"
                endIcon={<EditIcon />}
                onClick={() => {
                    setIsDisabledDialog(false)
                }}
            >
                Edit
            </Button>
            <Button
                variant="contained"
                disabled
                endIcon={<PrintIcon />}
                onClick={() => {
                }}
            >
                Print
            </Button>
        </Block_Button>
        <Block_Button>
          <Button
            variant="outlined"
            onClick={() => {
              setIsChangeComponent01(true)
            }}
          >
              Close Account
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setIsChangeComponent01(false)
            }}
          >
              FT Acc Close
          </Button>
        </Block_Button>
        
        {isChangeComponent01 && <CloseAccount_Components01 />}
        {!isChangeComponent01 && <CloseAccount_Components02 />}
      </Dialog>
    </div>
  );
}