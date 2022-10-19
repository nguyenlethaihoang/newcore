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
import Block_Button from '../../../../components/Block_Button';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_CloseArrearPeriodic({CustomerID}) {
 // Manage Dialog
 const [open, setOpen] = React.useState(false);
 // Open Dialog
 const handleClickOpen = () => {
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
              Close Account - Account Code: 
            </Typography>
            <Button autoFocus color="inherit" onClick={async ()=> {
              
            }}>
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
        
        {/* {isChangeComponent01 && <CloseAccount_Components01 suffixID='CloseAccount_Popup01'  object={account} closure={closure}/>}
        {!isChangeComponent01 && <CloseAccount_Components02 suffixID='CloseAccount_Popup02' object={account} closure={closure}/>}

        {isNotification_Success_01 && <Message_String type='success' text='Close Account Successfully'/>}                  
        {isNotification_Failed_01 && <Message_String type='error' text='Close Account Failed'/>}  
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}   */}
      </Dialog>
    </div>
  );
}