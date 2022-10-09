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
import Block_Button from '../../../../components/Block_Button';
import CloseAccount_Components01 from './CloseAccount_Components01';
import CloseAccount_Components02 from './CloseAccount_Components02';
import Alert_String from '../../../../components/Alert_String';
import Message_String from '../../../../components/Message_String';
// DATA
import Close_Account_PaymentType from '../../../../data/Close_Account_PaymentType';
// API
import debitAccountAPI from '../../../../apis/debitAccountApi'

// ---------TEMP DATA ----------------
let arrError = []

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_CloseAccount({CustomerID}) {
  // Manage Change color button
  const [isContained, setIsContained] = useState(true)
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
  // ---------------- FETCH API --------------------------------
  const [account, setAccount] = useState([]);
  useEffect(() => 
  {
      const fetchAccount = async () => {
        const response = await debitAccountAPI.getID(CustomerID);
        setAccount(response.data) 
      }
      fetchAccount();
  }, [])
  const [closure, setClosure] = useState([]);
  useEffect(() => 
  {
      const fetchClosure = async () => {
        const response = await debitAccountAPI.getClosure(CustomerID);
        setClosure(response.data) 
      }
      fetchClosure();
  }, [])
  let accountStatus = ''
  if(account.Status){
    accountStatus = account.Status.toString()
    if(accountStatus == 'closed') {
      accountStatus = 'Closed'
    }

  }
  
  
  // -----------------------------------------------------------
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
              Close Account - Account Code: {account.id} - {accountStatus}
            </Typography>
            <Button autoFocus color="inherit" onClick={async ()=> {
              if(accountStatus != 'Active'){
                arrError = []
                arrError.push(`Account was ${accountStatus}`)
                setIsNotification_Message_01(true)
                setTimeout(() => {setIsNotification_Message_01(false)}, 5000);
              }else{
                let params = {}
                params.PaymentType = document.getElementById('slt_PaymentType_CloseAccount_Popup02')? document.getElementById('slt_PaymentType_CloseAccount_Popup02').innerText : 'Cash'
                params.TransferredAccount = document.getElementById('txt_Transferred_CloseAccount_Popup02')? document.getElementById('txt_Transferred_CloseAccount_Popup02').innerText : ''
                //params.CloseDate
                params.Notes = document.getElementById('txt_Narrative_CloseAccount_Popup02')? document.getElementById('txt_Narrative_CloseAccount_Popup02').value : ''
                arrError = []
                console.log('params')
                console.log(params.PaymentType)
                if(params.PaymentType == null){
                  arrError.push('Payment Type is required')
                }
                if(params.PaymentType != 'Cash'){
                  if(!params.TransferredAccount)
                    arrError.push('Transferred Account is required')
                }
                if (
                  arrError.length == 0
                ) {
              
                  const res = await debitAccountAPI.closeAccount(params, CustomerID);
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
              }
              
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
            variant={isContained ? 'contained' : 'outlined'}
            onClick={() => {
              setIsChangeComponent01(true)
              setIsContained(true)
            }}
          >
              Close Account
          </Button>
          <Button
            variant={isContained ? 'outlined' : 'contained'}
            onClick={() => {
              setIsChangeComponent01(false)
              setIsContained(false)
            }}
          >
              FT Acc Close
          </Button>
        </Block_Button>
        
        {isChangeComponent01 && <CloseAccount_Components01 suffixID='CloseAccount_Popup01'  object={account} closure={closure}/>}
        {!isChangeComponent01 && <CloseAccount_Components02 suffixID='CloseAccount_Popup02' object={account} closure={closure}/>}

        {isNotification_Success_01 && <Message_String type='success' text='Add Individual Customer Successfully'/>}                  
        {isNotification_Failed_01 && <Message_String type='error' text='Add Individual Customer Failed'/>}  
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}  
      </Dialog>
    </div>
  );
}