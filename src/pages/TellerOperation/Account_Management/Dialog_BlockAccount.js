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
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

// Components
import Block_Children from '../../../components/Block_Children';
import Block_Button from '../../../components/Block_Button';
// APIs
import countryApi from '../../../apis/countryApi';
import docTypeApi from '../../../apis/docTypeApi';
import mainIndustryApi from '../../../apis/mainIndustryApi';
import industryApi from '../../../apis/industryApi';
import mainSectorApi from '../../../apis/mainSectorApi';
import subSectorApi from '../../../apis/subSectorApi';
import cityApi from '../../../apis/cityApi';
import accountOfficerApi from '../../../apis/accountOfficerApi';
import customerApi from '../../../apis/customerApi';
import BlockAccount_Components from './BlockAccount_Components';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_BlockAccount({CustomerID}) {
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
          aria-label="block"
          onClick={handleClickOpen}
      >
          <DoDisturbIcon />
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
              Block Account - Account Code: {CustomerID}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Block_Button>
            <Button
                variant="contained"
                endIcon={<EditIcon />}
                disabled
                onClick={() => {
                    setIsDisabledDialog(false)
                }}
            >
                Edit
            </Button>
            <Button
                variant="contained"
                endIcon={<PrintIcon />}
                disabled
                onClick={() => {
                }}
            >
                Print
            </Button>
        </Block_Button>
        <BlockAccount_Components suffixID='BlockAccount_Popup'/> 
      </Dialog>
    </div>
  );
}