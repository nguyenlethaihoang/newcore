import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Block_Button from "../../../../../components/Block_Button";
import Block_Children from "../../../../../components/Block_Children";
import Block_Info from "../../../../../components/Block_Info";
import Select_Object from "../../../../../components/Select_Object";
import TextField_Value from "../../../../../components/TextField_Value";
import Close_Online from "../../../../../data/Close_Online";
import CreditAccount_Full_List from "../../../../../data/CreditAccount_Full_List";
import Currency_ForeignExchange from "../../../../../data/Currency_ForeignExchange";

function TransferPayment({suffixID, forceDisable, object}) {
    const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
  const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
  const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable);
    // Init Params
    if (object === undefined) object = "";
    // Form control
    const [isSelected, setIsSelected] = useState(1);
    const handleChange = (event) => {setIsSelected(event.target.value); }
return ( 
<div>
    <Block_Children header2='DEBIT INFORMATION'>
        <TextField_Value id={'txt_Customer_'+suffixID} label='Customer' length='25' disabled={isDisabled}  />
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblDebitCurrency">Debit Currency</InputLabel>
          <Select
          labelId="idlblDebitCurrency"
          label='Debit Currency'
          id={"slt_DebitCurrency_"+suffixID}
          value={isSelected}
          disabled={isDisabled}
          onChange={handleChange}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {Currency_ForeignExchange.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
        </FormControl>
        <TextField_Value id={'txt_DebitAccount_'+suffixID} label='Debit Account' length='25' required={true} disabled={isDisabled}  />
        <TextField_Value id={'txt_DebitAmt_'+suffixID} label='Debit Amt' length='25' disabled={isDisabled}  />
        <Block_Info>
            <TextField_Value id={'txt_NextTransCom_'+suffixID} label='Next Trans Com' length='25' disabled={isDisabled}  />
            <TextField_Value id={'txt_OldCustomerBalance_'+suffixID} label='Old Customer Balance' length='25' disabled={isDisabled}  />
            <TextField_Value id={'txt_NewCustomerBalance_'+suffixID} label='New Customer Balance' length='25' disabled={isDisabled}  />

        </Block_Info>

    </Block_Children>  
    <Block_Children header2='CREDIT INFORMATION'>
    </Block_Children>
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblCreditAccount">Credit Account</InputLabel>
          <Select
          labelId="idlblCreditAccount"
          label='Credit Account'
          id={"slt_CreditAccount_"+suffixID}
          value={isSelected}
          disabled={isDisabled}
          onChange={handleChange}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {CreditAccount_Full_List.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblCreditCurrency">Credit Currency</InputLabel>
          <Select
          labelId="idlblCreditCurrency"
          label='Credit Currency'
          id={"slt_CreditCurrency_"+suffixID}
          value={isSelected}
          disabled={isDisabled}
          onChange={handleChange}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {Currency_ForeignExchange.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
        </FormControl>
        <TextField_Value id={'txt_AmtCreditForCust_'+suffixID} label='Amt Credit For Cust' length='25' disabled={isDisabled}  />

    <Block_Children>
        <TextField_Value id={'txt_CreditCardNumber_'+suffixID} label='Credit Card Number' length='25' disabled={isDisabled}  required={true}/>
        <Select_Object id={'slt_WaiveCharges_'+suffixID}label='Waive Charges?'object={Close_Online}length='25'  disabled={isDisabled} />
        <TextField_Value id={'txt_Narative_'+suffixID} label='Narative' length='25' disabled={isDisabled}  />

          
    </Block_Children>
    <Block_Button>
        <Button
            variant="contained"
        >
            Save
        </Button>
    </Block_Button>
</div>
);
}

export default TransferPayment;