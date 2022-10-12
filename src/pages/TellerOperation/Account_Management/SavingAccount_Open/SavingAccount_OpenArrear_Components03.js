import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AutoComplete_Object from "../../../../components/AutoComplete_Object";
import Block_Children from "../../../../components/Block_Children";
import Block_Info from "../../../../components/Block_Info";
import Block_Spacing from "../../../../components/Block_Spacing";
import Select_Object from "../../../../components/Select_Object";
import TextField_Value from "../../../../components/TextField_Value";
import useFetchCustomer from "../../../../customHooks/useFetchCustomer";
import Account_ForeignExchange from "../../../../data/Account_ForeignExchange";
import Currency_ForeignExchange from '../../../../data/Currency_ForeignExchange'


function SavingAccount_OpenArrear_Components03({suffixID, object, forceDisable}) {
 // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    // Fetch Data
    const customerList = useFetchCustomer();

    const [isSelected01, setIsSelected01] = useState(1);
    const handleChange01 = (event) => {setIsSelected01(event.target.value); }
    if (object == undefined) object = ""
return ( 
<div>
<Block_Spacing>
    <Block_Children>
        <TextField_Value id={'txt_AcccountNumber_'+suffixID} label='Acccount Number' length='40' disabled={true} value={object.AccountNo != "" ? object.AccountNo:'Generated'}/> 
        <TextField_Value id={'txt_PaymentNumber_'+suffixID} label='Payment Number' length='25' value={genPaymentNumber()} disabled={isDisabled}/> 
        {/* <Select_Object id={'slt_PaymentCCY_'+suffixID} label='Payment CCY' object={Currency_ForeignExchange} length='20' disabled={isDisabled} /> */}
        {/* Automation Select  */}
     <FormControl sx={{ m: 0, minWidth: "20ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblPaymentCCY">Payment CCY</InputLabel>
          <Select
          labelId="idlblPaymentCCY"
          label='Payment CCY'
          id={"slt_PaymentCCY_"+suffixID}
          value={isSelected01}
          disabled={isDisabled}
          onChange={handleChange01}
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
     <TextField_Value id={'txt_ForTeller_'+suffixID} label='For Teller' length='25' value='vietvictory' disabled={isDisabled}/> 
     <FormControl sx={{ m: 0, minWidth: "20ch", mt: '20px', mr: '20px'}}>
          <InputLabel id="idlblDebitAccount">Debit Account</InputLabel>
          <Select
          labelId="idlblDebitAccount"
          label='Debit Account'
          id={"slt_DebitAccount_"+suffixID}
          value={isSelected01}
          disabled={isDisabled}
          onChange={handleChange01}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {Account_ForeignExchange.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
     </FormControl> 
        
        {/* <Select_Object id={'slt_DebitAccount_'+suffixID} label='Debit Account'object={Currency_ForeignExchange} length='30' disabled={isDisabled} /> */}
        <TextField_Value id={'txt_Narative_'+suffixID} label='Narative' length='30' disabled={isDisabled}/> 
    </Block_Children>
    <Block_Children>
        <Block_Info>
            <TextField_Value id={'txt_AccountCCY_'+suffixID} label='Account CCY' length='30' disabled={true} /> 
            <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='20' disabled={true} /> 
            <TextField_Value id={'txt_AccountNumber_'+suffixID} label='Account Number' length='30' disabled={true} value={object.AccountNo != "" ? object.AccountNo:'Generated'} /> 
            <TextField_Value id={'txt_AccountLCY_'+suffixID} label='Account LCY' length='30' disabled={true} />    
            <TextField_Value id={'txt_AccountFCY_'+suffixID} label='Account FCY' length='30' disabled={true} /> 
            <TextField_Value id={'txt_Narrative01_'+suffixID} label='Narrative' length='30' disabled={true} value='AZ Deposit Credit'/> 
            <TextField_Value id={'txt_Narrative02_'+suffixID} label='Narrative' length='30' disabled={true} noDown={true}/> 
            <TextField_Value id={'txt_Narrative03_'+suffixID} label='Narrative' length='30' disabled={true} noDown={true}/> 
            <TextField_Value id={'txt_Narrative04_'+suffixID} label='Narrative' length='30' disabled={true} /> 
            <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='30' disabled={true} /> 
            <TextField_Value id={'txt_AccountInLCY_'+suffixID} label='Account In LCY' length='30' disabled={true} noDown={true}/> 

        </Block_Info>
    </Block_Children>
</Block_Spacing>
</div>
);
}

// Function Generate Payment Number
function genPaymentNumber() {
    let str = 'TT/'
    for (let i = 0; i < 5; i++) str +=  Math.floor(Math.random() * 10).toString()
    str += '/'
    for (let i = 0; i < 5; i++) str +=  Math.floor(Math.random() * 10).toString()
    return str
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

export default SavingAccount_OpenArrear_Components03;