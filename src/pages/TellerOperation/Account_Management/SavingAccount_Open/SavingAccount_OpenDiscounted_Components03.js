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


function SavingAccount_OpenArrear_Components03({suffixID, object, forceDisable}) {
 // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    // Fetch Data
    const customerList = useFetchCustomer();
    
return ( 
<div>
<Block_Spacing>
    <Block_Info>
        <TextField_Value id={'txt_Customer_'+suffixID} label='Customer' length='30' disabled={true} value='_'/>
        <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='15' disabled={true} value='_'/>
        <TextField_Value id={'txt_DrAccount_'+suffixID} label='Dr Account' length='40' disabled={true} value='_'/>
        <TextField_Value id={'txt_AmountLCY_'+suffixID} label='Amount LCY' length='20' disabled={true} value='_'/>
        <TextField_Value id={'txt_AmountFCY_'+suffixID} label='Amount FCY' length='20' disabled={true} value='_'/>
        <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='20' disabled={true} value='_'/>
        <Select_Object id={'slt_PaymentCCY_'+suffixID} label='Payment CCY'length='25' disabled={isDisabled} noValue={true}/>
        <TextField_Value id={'txt_ForTeller_'+suffixID} label='For Teller' length='20' disabled={isDisabled} value='vietvictory'/>
        <Select_Object id={'slt_CreditAccount_'+suffixID} label='Credit Account'length='30' disabled={isDisabled} noValue={true}/>
        <TextField_Value id={'txt_ExchRate_'+suffixID} label='Exch Rate' length='20' disabled={isDisabled} number={true}/>
        <TextField_Value id={'txt_NewCustBal_'+suffixID} label='New Cust Bal' length='20' disabled={true} value='0.00'/>
        <TextField_Value id={'txt_AmtPaid_'+suffixID} label='Amt Paid' length='20' disabled={true} />

    </Block_Info>
</Block_Spacing>
</div>
);
}

export default SavingAccount_OpenArrear_Components03;