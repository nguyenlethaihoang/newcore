import { Box } from "@mui/system";
import { useState } from "react";
import AutoComplete_Object from "../../../../components/AutoComplete_Object";
import Block_Children from "../../../../components/Block_Children";
import Block_Info from "../../../../components/Block_Info";
import Block_Spacing from "../../../../components/Block_Spacing";
import Select_Object from "../../../../components/Select_Object";
import TextField_Value from "../../../../components/TextField_Value";
import useFetchCustomer from "../../../../customHooks/useFetchCustomer";
import Currency_ForeignExchange from '../../../../data/Currency_ForeignExchange'


function SavingAccount_OpenPeriodic_Components03({suffixID, object, forceDisable}) {
 // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    // Fetch Data
    const customerList = useFetchCustomer();
    
return ( 
<div>
<Block_Spacing>
    <Block_Children>
        <TextField_Value id={'txt_AcccountNumber_'+suffixID} label='Acccount Number' length='40' disabled={true} /> 
        <TextField_Value id={'txt_PaymentNumber_'+suffixID} label='Payment Number' length='25' /> 
        <Select_Object id={'slt_PaymentCCY_'+suffixID} label='Payment CCY'object={Currency_ForeignExchange}length='20' disabled={isDisabled} disabled={true} noValue='true' dataID='1'/>
        <TextField_Value id={'txt_ForTeller_'+suffixID} label='For Teller' length='25' value='vietvictory'/> 
        <Select_Object id={'slt_DebitAccount_'+suffixID} label='Debit Account'object={Currency_ForeignExchange}length='30' disabled={isDisabled} disabled={true} noValue='true' dataID='1'/>
        <TextField_Value id={'txt_Narative_'+suffixID} label='Narative' length='30'/> 
    </Block_Children>
    <Block_Children>
        <Block_Info>
            <TextField_Value id={'txt_AccountCCY_'+suffixID} label='Account CCY' length='30' disabled={true} /> 
            <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='20' disabled={true} /> 
            <TextField_Value id={'txt_AccountNumber_'+suffixID} label='Account Number' length='30' disabled={true} /> 
            <TextField_Value id={'txt_AccountLCY_'+suffixID} label='Account LCY' length='30' disabled={true} /> 
            <TextField_Value id={'txt_AccountFCY_'+suffixID} label='Account FCY' length='30' disabled={true} /> 
            <TextField_Value id={'txt_Narrative01_'+suffixID} label='Narrative' length='30' disabled={true} value='AZ Deposit Credit'/> 
            <TextField_Value id={'txt_Narrative02_'+suffixID} label='Narrative' length='30' disabled={true} /> 
            <TextField_Value id={'txt_Narrative03_'+suffixID} label='Narrative' length='30' disabled={true} /> 
            <TextField_Value id={'txt_Narrative04_'+suffixID} label='Narrative' length='30' disabled={true} /> 
            <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='30' disabled={true} /> 
            <TextField_Value id={'txt_AccountInLCY_'+suffixID} label='Account In LCY' length='30' disabled={true} /> 

        </Block_Info>
    </Block_Children>
</Block_Spacing>
</div>
);
}

export default SavingAccount_OpenPeriodic_Components03;