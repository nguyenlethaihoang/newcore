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
import Block_Children from '../../../../components/Block_Children';
import Block_Spacing from '../../../../components/Block_Spacing';
import Block_Info from '../../../../components/Block_Info';
import TextField_Value from '../../../../components/TextField_Value';
import Select_Object from '../../../../components/Select_Object';
import Currency_ForeignExchange from '../../../../data/Currency_ForeignExchange';
import useFetchCustomer from '../../../../customHooks/useFetchCustomer';
import AutoComplete_Object from '../../../../components/AutoComplete_Object';
import savingAccountApi from '../../../../apis/savingAccountApi';
import Message_String from '../../../../components/Message_String';
import Alert_String from '../../../../components/Alert_String';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog_CloseArrearPeriodic({CustomerID, suffixID, forceDisable, object}) {
  // fetch
  const customerList = useFetchCustomer();

  if (object === undefined) object = "";
  if (suffixID === undefined) suffixID = "temp"
  // manage disable
  if (forceDisable === undefined) forceDisable = "";
  const [isDisabled, setIsDisabled] = useState(forceDisable);
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
 // Notification of Accordian 1
 const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
 const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
 const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
  
  
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
            Close Arrear/Periodic - Ref ID: {object.SAVINGACCOUNT.Account ?? CustomerID}
            </Typography>
            <Button startIcon={<CloseIcon />} autoFocus color="inherit" onClick={async ()=> {
              let params = {}
              params.CustomerID = object.SAVINGACCOUNT.CustomerID;
              const res = await savingAccountApi.postCloseArrear(CustomerID, params);
              if(res != 'fail') {
                setIsNotification_Success_01(true); 
                setTimeout(() => {setIsNotification_Success_01(false)}, 2500);
                setTimeout(() => {handleClose();}, 2500);
              } else {
                setIsNotification_Failed_01(true)
                setTimeout(() => {setIsNotification_Failed_01(false)}, 2500);   
                
              }
            }}>
              close
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
        
<Block_Spacing>
    
      <Block_Children header2='CUSTOMER INFOMATION' header1='PRE CLOSE'>
        <Block_Info>
          <TextField_Value id={'txt_Customer_'+suffixID} label='Customer' length='30' disabled={true} noDown={true} value={object.SAVINGACCOUNT.CUSTOMER.GB_FullName}/>
          <TextField_Value id={'txt_Category_'+suffixID} label='Category' length='30' disabled={true} noDown={true} value={object.CATEGORY.Name}/>
          <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='30' disabled={true} noDown={true} value={object != "" ? Currency_ForeignExchange[object.Currency-1]?.Name : ""}/>
          <TextField_Value id={'txt_ProductCode_'+suffixID} label='Product Code' length='30' disabled={true} noDown={true} value={100}/>
          <TextField_Value id={'txt_Principal_'+suffixID} label='Principal' length='30' disabled={true} noDown={true} value={object != "" ? object.PrincipalAmount : ""}/>
          <TextField_Value id={'txt_ValueDate_'+suffixID} label='Value Date' length='30' disabled={true} noDown={true} value={object != "" ? object.ValueDate : ""}/>
          <TextField_Value id={'txt_MaturityDate_'+suffixID} label='Maturity Date' length='30' disabled={true} noDown={true} value={object != "" ? object.MaturityDate : ""} />
          <TextField_Value id={'txt_InterestedRate_'+suffixID} label='Interested Rate' length='30' disabled={true} noDown={true} value={object != "" ? object.InterestRate : ""}/>
        </Block_Info>
      </Block_Children>
    <Block_Children header2='PRE CLOSE'>
      <Select_Object id={'slt_Preclose_'+suffixID}label='Preclose (Y/N)'required={true}object={PreClose}length='25' disabled={isDisabled} dataID={1} />
      <AutoComplete_Object id={'aut_WorkingAccount_'+suffixID} label='Working Account' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true} disabled={true} defaultValue={object?.SAVINGACCOUNT?.CustomerID?`${object?.SAVINGACCOUNT?.CustomerID} - ${object.SAVINGACCOUNT?.CUSTOMER?.GB_FullName}`:''}/>
      <Select_Object id={'slt_WaiveCharges_'+suffixID}label='Waive Charges'required={true}object={PreClose}length='25' disabled={isDisabled} dataID={1}/>
      
    </Block_Children>
    {isNotification_Success_01 && <Message_String type='success' text='Close Saving Account Successfully'/>} 
    {isNotification_Failed_01 && <Message_String type='error' text='Close Saving Account Failed'/>}  
    {isNotification_Message_01 && <Alert_String arrError={arrError}/>} 
</Block_Spacing>
      </Dialog>
    </div>
  );
}


const PreClose = [
  {id:1, Name:'Y'},
]

let arrError = []