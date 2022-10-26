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
import Message_String from '../../../../components/Message_String';
import Alert_String from '../../../../components/Alert_String';
import SavingAccount_OpenArrear_Components01 from '../SavingAccount_Open/SavingAccount_OpenArrear_Components01';
import SavingAccount_OpenArrear_Components02 from '../SavingAccount_Open/SavingAccount_OpenArrear_Components02';
import SavingAccount_OpenArrear_Components03 from '../SavingAccount_Open/SavingAccount_OpenArrear_Components03';
import Category_SavingAccount from '../../../../data/Category_SavingAccount'
import Currency_ForeignExchange from '../../../../data/Currency_ForeignExchange'
import ProductLine_SavingAccount from '../../../../data/ProductLine_SavingAccount'
import useFetchRelationCode from "../../../../customHooks/useFetchRelationCode";
import useFetchAccountOfficer from "../../../../customHooks/useFetchAccountOfficer";
import Product_SavingAccount from "../../../../data/Product_SavingAccount";

import savingAccountApi from '../../../../apis/savingAccountApi';




import Block_Children from '../../../../components/Block_Children';

// import Block_Button from '../../../components/Block_Button';

// --------------- MUST HAVE -------------
// Data
let arrError = []
// ----------------------------------------

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_Arrear({CustomerID, object}) {
  // Fetch Data
  const relationCodeList = useFetchRelationCode();
  const accountOfficerList = useFetchAccountOfficer();
  
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
              Arrear Saving Account - Ref ID: {object.SAVINGACCOUNT.Account ?? CustomerID}
            </Typography>
            <Button autoFocus color="inherit" onClick={async () => {
                

              let params = {}
              params.CustomerID = resolveStrtoID(document.getElementById('aut_CustomerID_SavingAccount01_Popup').value);
              params.Category = resolveNameID(Category_SavingAccount,document.getElementById('slt_Category_SavingAccount01_Popup').innerText);
              params.AccountTitle = document.getElementById('txt_AccountTitle_SavingAccount01_Popup').value;
              params.Currency = resolveNameID(Currency_ForeignExchange ,document.getElementById('slt_Currency_SavingAccount01_Popup').innerText);
              params.ProductLine = resolveNameID(ProductLine_SavingAccount,document.getElementById('slt_ProductLine_SavingAccount01_Popup').innerText)
              params.JoinHolder  =  resolveStrtoID(document.getElementById('aut_JointA/CHolder_SavingAccount01_Popup').value);
              params.RelationShip = resolveNameID(relationCodeList, document.getElementById('slt_Relationship_SavingAccount01_Popup').innerText)
              params.Notes = document.getElementById('txt_Notes_SavingAccount01_Popup').value
              params.AccountOfficer = resolveNameID(accountOfficerList,document.getElementById('slt_AccountOfficer_SavingAccount01_Popup').innerText)
              params.Product = resolveNameID(Product_SavingAccount, document.getElementById('slt_Product_SavingAccount02_Popup').innerText)
              params.PrincipalAmount = document.getElementById('txt_Principal_SavingAccount02_Popup').value;
              params.Term =resolveNameID( termOnly, document.getElementById('slt_Term_SavingAccount02_Popup').innerText)
              params.ValueDate = convertDatetime(document.getElementById('dp_Value Date_SavingAccount02_Popup').value)
              // console.log(params)
              arrError = []
              if (!params.CustomerID)
                  arrError.push('Customer ID is Required')
              if (!params.Category)
                  arrError.push('Category is Required')
              if (!params.AccountTitle)
                  arrError.push('Account Title is Required')
              if (!params.Currency)
                  arrError.push('Currency ID is Required')
              if (!params.Product)
                  arrError.push('Product ID is Required')
              if (!params.PrincipalAmount)
                  arrError.push('Principal ID is Required')
              if (!params.Term)
                  arrError.push('Term is Required')
              if(arrError.length == 0){
                const res = await savingAccountApi.postUpdate(CustomerID, params);
                if(res != 'fail') {
                  setIsNotification_Success_01(true); 
                  setTimeout(() => {setIsNotification_Success_01(false)}, 2500);
                  setTimeout(() => {handleClose();}, 2500);
                } else {
                  setIsNotification_Failed_01(true)
                  setTimeout(() => {setIsNotification_Failed_01(false)}, 2500); 
                  
                }
              }else{
                setIsNotification_Message_01(true)
                setTimeout(() => {setIsNotification_Message_01(false)}, 2500);
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
                  <SavingAccount_OpenArrear_Components01 suffixID={'SavingAccount01_Popup'} forceDisable={isDisabledDialog} object={object}/>
                  <SavingAccount_OpenArrear_Components02 suffixID={'SavingAccount02_Popup'} forceDisable={isDisabledDialog} object={object}/>
                  {/* <SavingAccount_OpenArrear_Components03 suffixID={'SavingAccount03_Popup'} forceDisable={isDisabledDialog} object={object}/> */}
              </Block_Children>
          }
          {(!isDisabledDialog) &&  
              <Block_Children>
                  <SavingAccount_OpenArrear_Components01 suffixID={'SavingAccount01_Popup'} forceDisable={isDisabledDialog} object={object}/>
                  <SavingAccount_OpenArrear_Components02 suffixID={'SavingAccount02_Popup'} forceDisable={isDisabledDialog} object={object}/>
                  {/* <SavingAccount_OpenArrear_Components03 suffixID={'SavingAccount03_Popup'} forceDisable={isDisabledDialog} object={object}/> */}
              </Block_Children>
          }
        

        {isNotification_Success_01 && <Message_String type='success' text='Update Individual Customer Successfully'/>} 
        {isNotification_Failed_01 && <Message_String type='error' text='Update Individual Customer Failed'/>}  
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>} 
      </Dialog>
    </div>
  );
}

// --------- CONVERT -------------------
function convertDatetime(date){
  let dateArr = date.split('/')
  let dateConverted = dateArr[2] + '-'+ dateArr[1] + '-' + dateArr[0]
  return dateConverted
}
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

  const termOnly = [
    {id: 1, Name: '1 month'},
    {id: 2, Name: '2 month'},
    {id: 3, Name: '3 month'},
    {id: 4, Name: '6 month'},
    {id: 5, Name: '9 month'},
    {id: 6, Name: '12 month'},
    {id: 7, Name: '24 month'},
    {id: 8  , Name: '36 month'},
]