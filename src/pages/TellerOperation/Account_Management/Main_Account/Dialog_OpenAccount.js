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
// Components
import Block_Button from '../../../../components/Block_Button';
import OpenAccount_Components from './OpenAccount_Components';
import debitAccountApi from '../../../../apis/debitAccountApi';
import Category_OpenAccount from '../../../../data/Category_OpenAccount';
import Alert_String from '../../../../components/Alert_String';
import Message_String from '../../../../components/Message_String';
// Fetch API by Custom Hook
import useFetchAccountOfficer from '../../../../customHooks/useFetchAccountOfficer';
import useFetchCurrency from '../../../../customHooks/useFetchCurrency';
import useFetchCustomer from '../../../../customHooks/useFetchCustomer';
import useFetchProductLine from '../../../../customHooks/useFetchProductLine';
import useFetchChargeCode from '../../../../customHooks/useFetchChargeCode';
import useFetchRelationCode from '../../../../customHooks/useFetchRelationCode';

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
export default function Dialog_OpenAccount({CustomerID}) {
    // Fetch Data 
  const accountOfficerList = useFetchAccountOfficer();
  const currencyList = useFetchCurrency();
  const customerList = useFetchCustomer();
  const productLineList = useFetchProductLine();
  const chargeCodeList = useFetchChargeCode();
  const relationCodeList = useFetchRelationCode();
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

  // APIs - GET ACCOUNT BY ID
  const [account, setAccount] = useState([]);
  useEffect(() => 
  {
      const fetchAccount = async () => {
        const response = await debitAccountApi.getID(CustomerID);
        setAccount(response.data) 
      }
      fetchAccount();
  }, [])




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
                Account Information - Accout Code: {CustomerID}
            </Typography>
            <Button autoFocus color="inherit" onClick={ async () =>{

              let params = {}
              params.CustomerID = resolveStrtoID(document.getElementById('aut_CustomerID_OpenAccount_Popup').value)
              params.Category = resolveNameID(Category_OpenAccount, document.getElementById('slt_Category_OpenAccount_Popup').innerText)
              params.ProductLine = resolveNameID(productLineList, document.getElementById('slt_ProductLine_OpenAccount_Popup').innerText)
              params.Currency = resolveNameID(currencyList, document.getElementById('slt_Currency_OpenAccount_Popup').innerText)
              params.AccountTitle = document.getElementById('txt_AccountTitle_OpenAccount_Popup').value
              params.ShortTitle = document.getElementById('txt_ShortTitle_OpenAccount_Popup').value
              params.AccountOfficer = resolveNameID(accountOfficerList, document.getElementById('slt_AccountOfficer_OpenAccount_Popup').innerText)
              params.ChargeCode = resolveNameID(chargeCodeList, document.getElementById('slt_ChargeCode_OpenAccount_Popup').innerText)
              params.JoinHolder = resolveStrtoID(document.getElementById('aut_IDJoinHolder_OpenAccount_Popup').value)
              params.RelationCode = resolveStrtoID( document.getElementById('aut_RelationCode_OpenAccount_Popup').value)
              params.JoinNotes = document.getElementById('txt_Join Notes_OpenAccount_Popup').value
              arrError = []
                if(!params.CustomerID){
                    arrError.push('Customer ID is required')
                }
                if(!params.Category){
                    arrError.push('Category is required')
                }
                if(!params.Currency){
                    arrError.push('Currency is required')
                }
                if(!params.JoinHolder){
                    arrError.push('Join Holder is required')
                }
                if(!params.RelationCode){
                    arrError.push('Relation Code is required')
                }
                if (
                    arrError.length == 0
                ) {
                
                    const res = await debitAccountApi.updateAccount(params, CustomerID);
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

            }>
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
                }}
            >
                Print
            </Button>
        </Block_Button>
        {isDisabledDialog && <OpenAccount_Components suffixID='OpenAccount_Popup' forceDisable={true} object={account}/>}
        {!isDisabledDialog && <OpenAccount_Components suffixID='OpenAccount_Popup' object={account}/>}

        {isNotification_Success_01 && <Message_String type='success' text='Add Individual Customer Successfully'/>}                  
        {isNotification_Failed_01 && <Message_String type='error' text='Add Individual Customer Failed'/>}  
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}   
      </Dialog>
    </div>
  );
}