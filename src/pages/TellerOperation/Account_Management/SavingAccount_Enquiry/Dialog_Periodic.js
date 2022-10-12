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
import IndividualCustomer_Components from '../../Customer_Management/IndividualCustomer_Components';
import Message_String from '../../../../components/Message_String';
import Alert_String from '../../../../components/Alert_String';
import SavingAccount_OpenArrear_Components01 from '../SavingAccount_Open/SavingAccount_OpenArrear_Components01';
import SavingAccount_OpenArrear_Components02 from '../SavingAccount_Open/SavingAccount_OpenArrear_Components02';
import SavingAccount_OpenArrear_Components03 from '../SavingAccount_Open/SavingAccount_OpenArrear_Components03';
import Block_Children from '../../../../components/Block_Children';
import SavingAccount_OpenPeriodic_Components01 from '../SavingAccount_Open/SavingAccount_OpenPeriodic_Components01';
import SavingAccount_OpenPeriodic_Components02 from '../SavingAccount_Open/SavingAccount_OpenPeriodic_Components02';

// import Block_Button from '../../../components/Block_Button';

// --------------- MUST HAVE -------------
// Data
let arrError = []
// ----------------------------------------

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_Periodic({CustomerID, object}) {
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

  // ------------------ SET DISPLAY ALERT ----------
    // Callback childs -> parent
    const [message, setMessage] = useState('panel1')
    const callbackFunction = (childData) => {setMessage(childData)}
    // Show notification
    // Notification of Accordian 1
    const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
    const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
    const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
    // Notification of Accordian 2
    const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
    const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
    const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)


    return (
    <div
      onClick={() => {
        document.getElementById('txt_WorkingAccount_SavingAccount02_Popup').value = document.getElementById('aut_CustomerID_SavingAccount01_Popup').value;
        document.getElementById('txt_Customer_SavingAccount02_Popup').value = document.getElementById('aut_CustomerID_SavingAccount01_Popup').value;
        document.getElementById('txt_Category_SavingAccount02_Popup').value = document.getElementById('slt_Category_SavingAccount01_Popup').innerText;
        document.getElementById('txt_Currency_SavingAccount02_Popup').value = document.getElementById('slt_Currency_SavingAccount01_Popup').innerText;
      
      }}
    >
      <Button 
            variant="outlined" 
            onClick={handleClickOpen}
      >
        Open
      </Button>
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
              Periodic Saving Account - Ref ID: {CustomerID}
            </Typography>
            <Button autoFocus color="inherit" onClick={async () => {
                

              let params = {}
              params.FirstName = document.getElementById('txt_FirstName_OpenIndividual_Popup').value;
              params.LastName = document.getElementById('txt_LastName_OpenIndividual_Popup').value;
              params.MiddleName = document.getElementById('txt_MiddleName_OpenIndividual_Popup').value;
              params.GBShortName = document.getElementById('txt_GBShortName_OpenIndividual_Popup').value;
              params.GBFullName = document.getElementById('txt_GBFullName_OpenIndividual_Popup').value;
              params.BirthDay = document.getElementById('dp_BirthDay_OpenIndividual_Popup').value;
              arrError = []
              if (document.getElementById('txt_GBShortName_OpenIndividual_Popup').value.length <= 2)
                      arrError.push('GB Short Name is Required')
              if (document.getElementById('txt_GBFullName_OpenIndividual_Popup').value.length <= 2)
                      arrError.push('GB Full Name is Required')
              if (document.getElementById('txt_GBStreet_OpenIndividual_Popup').value.length == 0)
                      arrError.push('GB Street is Required')
              if (document.getElementById('txt_GBTownDist_OpenIndividual_Popup').value.length == 0)
                      arrError.push('GB Town/Dist is Required')
                      
              if(arrError.length == 0){
                // const res = await customerApi.updateIndividual(params, CustomerID);
                const res = 0
                if(res != 'fail') {
                  setIsNotification_Success_01(true); 
                  setTimeout(() => {setIsNotification_Success_01(false)}, 3000);
                  setTimeout(() => {handleClose();}, 3000);
                } else {
                  setIsNotification_Failed_01(true)
                  setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                  
                }
              }else{
                setIsNotification_Message_01(true)
                setTimeout(() => {setIsNotification_Message_01(false)}, 5000);
              }

                
                
            }}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Block_Button>
            <Button
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
                endIcon={<PrintIcon />}
                onClick={() => {
                    console.log('object')
                    console.log(object)
                    console.log('object.Category')
                    console.log(object.Category)
                }}
            >
                Print
            </Button>
        </Block_Button>
           
          {(isDisabledDialog) &&  
              <Block_Children>
                  <SavingAccount_OpenPeriodic_Components01 suffixID={'SavingAccount01_Popup'} forceDisable={isDisabledDialog} object={object}/>
                  <SavingAccount_OpenPeriodic_Components02 suffixID={'SavingAccount02_Popup'} forceDisable={isDisabledDialog} object={object}/>
                  {/* <SavingAccount_OpennPeriodic_Components03 suffixID={'SavingAccount03_Popup'} forceDisable={isDisabledDialog} object={object}/> */}
              </Block_Children>
          }
          {(!isDisabledDialog) &&  
              <Block_Children>
                  <SavingAccount_OpenPeriodic_Components01 suffixID={'SavingAccount01_Popup'} forceDisable={isDisabledDialog} object={object}/>
                  <SavingAccount_OpenPeriodic_Components02 suffixID={'SavingAccount02_Popup'} forceDisable={isDisabledDialog} object={object}/>
                  {/* <SavingAccount_OpennPeriodic_Components03 suffixID={'SavingAccount03_Popup'} forceDisable={isDisabledDialog} object={object}/> */}
              </Block_Children>
          }
        

        {isNotification_Success_01 && <Message_String type='success' text='Update Individual Customer Successfully'/>} 
        {isNotification_Failed_01 && <Message_String type='error' text='Update Individual Customer Failed'/>}  
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>} 
      </Dialog>
    </div>
  );
}