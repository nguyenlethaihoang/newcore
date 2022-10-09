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
import Block_Button from '../../../../components/Block_Button';
import Alert_String from '../../../../components/Alert_String';
import Message_String from '../../../../components/Message_String';
// APIs
import debitAccountAPI from '../../../../apis/debitAccountApi'; 
import BlockAccount_Components from './BlockAccount_Components';

// ------------------- CONVERT DAY DATA ------------------------
function convertDatetime(date){
  let dateArr = date.split('/')
  console.log('Date Arr')
  console.log(dateArr)
  let dateConverted = dateArr[2] + '-'+ dateArr[1] + '-' + dateArr[0]
  console.log('Date Str')
  console.log(dateConverted)
  return dateConverted
}

let arrError = []
let isShow = false
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_BlockAccount({CustomerID}) {
  console.log("customerid: ", CustomerID)

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
  const [blockage, setBlockage] = useState([]);
  useEffect(() => 
  {
      const fetchBlockage = async () => {
        const response = await debitAccountAPI.getBlocked(CustomerID);
        setBlockage(response.data) 
      }
      fetchBlockage();
  }, [])
  console.log('blockage')
  console.log(blockage)
  let accountStatus = ''
  if(account.Status){
    accountStatus = account.Status.toString()
    if(accountStatus == 'closed') accountStatus = 'Closed'
  }

    // -----------------------------------------------------------
      // Show notification
  // Notification of Accordian 1

  const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
  const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
  const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)

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
              Block Account - Account Code: {CustomerID} - {accountStatus}
            </Typography> 
            <Button autoFocus color="inherit" display={'none'} onClick={async() => {
              if(accountStatus != 'Active'){
                arrError = []
                arrError.push(`Account was ${accountStatus}`)
                setIsNotification_Message_01(true)
                setTimeout(() => {setIsNotification_Message_01(false)}, 5000);
              }else{
                let params = {}
                params.StartDate = convertDatetime(document.getElementById('dp_FromDate_BlockAccount_Popup').value)
                params.EndDate = convertDatetime(document.getElementById('dp_ToDate_BlockAccount_Popup').value)
                params.Amount = document.getElementById('txt_Amount_BlockAccount_Popup').value
                params.Notes = document.getElementById('txt_Description_BlockAccount_Popup').value
                console.log('params')
                console.log(params)
                arrError = []
                if(!params.StartDate){
                  arrError.push('Start Date is required')
                }
                if(!params.EndDate){
                  arrError.push('End Date is required')
                }
                if(arrError.length == 0){
                  const res = await debitAccountAPI.blockAccount(params, CustomerID);
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
            <Button autoFocus color="inherit" display={accountStatus == 'Blocked'? 'inline-flex': 'none'} onClick={async() => {
              console.log('unblock')
            }}>
              Unblock
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
        <BlockAccount_Components suffixID='BlockAccount_Popup' object = {account} blockage={blockage}/> 
        
        {isNotification_Success_01 && <Message_String type='success' text='Block Account Successfully'/>}                  
        {isNotification_Failed_01 && <Message_String type='error' text='Block Account Failed'/>}  
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}  
      </Dialog>
    </div>
  );
}