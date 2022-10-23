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
import InfoIcon from '@mui/icons-material/Info';
import OpenAccount_Components from '../../Main_Account/OpenAccount_Components';
import Block_Button from '../../../../../components/Block_Button';
import Message_String from '../../../../../components/Message_String';
import Alert_String from '../../../../../components/Alert_String';
import CashDepositsComponents from './CashDepositsComponents';
import cashDepositsApi from '../../../../../apis/cashDepositsApi';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TransferWithdrawalComponents from './TransferWithdrawalComponents';
import Block_Children from '../../../../../components/Block_Children';
import Block_Spacing from '../../../../../components/Block_Spacing';
import printApi from '../../../../../apis/printApi'

// -------------------TEMP DATA ----------------------------
let arrError = []
// -------------------------------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// --------- CONVERT -------------------
// rersolve from text to id with Name
function resolveNameID(object, text) {
  let temp = null
  object.map((data, index) => {
          if (data.Name == text)
          {
          temp = data.id.toString()
          
          }
  })
  return temp
}
// rersolve from text to id with Name Customer
function resolveStrtoID(text) {
  let subArr = text.toString().split(" - ");
  let subStr = subArr[0]
  if(subStr){
      return subStr
  }
  return null
}
// -------------------------------------------------------

// ----- MAIN -----
export default function Dialog_Transfer({CustomerID , object}) {
    // Fetch Data 
    // Show notification
  // Notification of Accordian 1
  const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
  const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
  const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
  // Notification of Accordian 2
  const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
  const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
  const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)
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
      {/* <Button 
            variant="outlined" 
            
      >
        Open
      </Button> */}
      <IconButton 
          color="primary"
          aria-label="detail"
          onClick={handleClickOpen}
      >
          <InfoIcon />
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
                Transfer Withdrawal - Ref ID: {CustomerID}
            </Typography>
            <Button startIcon={<CheckCircleOutlineIcon />} autoFocus color="inherit" onClick={ async () =>{

              let params = {}
              params.Status = resolveNameID(StatusArray,document.getElementById('slt_Status_Transfer_Popup').innerText);
              const res = await cashDepositsApi.postValidateTransfer(CustomerID, params);
              if(res != 'fail') {
                  setIsNotification_Success_01(true); 
                  setTimeout(() => {setIsNotification_Success_01(false)}, 2500);
                  setTimeout(() => {handleClose() }, 2500);
                  
              } else {
                      setIsNotification_Failed_01(true)
                      setTimeout(() => {setIsNotification_Failed_01(false)}, 3000); 
              }   

            }}>
              Validate
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
                onClick={async () => {
                  const res = await printApi.transfer(CustomerID)
                  const link = res.data
                  let a = document.createElement('a');
                  a.href = link;
                  a.download = `CashTransfer-${CustomerID}.docx`;
                  a.click();                
                  return res.data.blobName   
                }}
            >
                Print
            </Button>
        </Block_Button>
        <Block_Spacing>
        {isDisabledDialog && <TransferWithdrawalComponents suffixID='Transfer_Popup' forceDisable={true} object={object}/>}
        {!isDisabledDialog && <TransferWithdrawalComponents suffixID='Transfer_Popup' object={object}/>}
        </Block_Spacing>

        {isNotification_Success_01 && <Message_String type='success' text='Validate Successfully'/>}                  
        {isNotification_Failed_01 && <Message_String type='error' text='Validate Failed'/>}  
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}   
      </Dialog>
      
    </div>
  );
}


const StatusArray = [
  {id: 1, Name: 'Pending'},
  {id: 2, Name: 'Authorize'},
  {id: 3, Name: 'Un-Authorize'},

]