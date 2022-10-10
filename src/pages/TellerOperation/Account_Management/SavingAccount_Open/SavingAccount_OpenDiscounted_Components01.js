import { Box } from "@mui/system";
import { useState } from "react";
import AutoComplete_Object from "../../../../components/AutoComplete_Object";
import Block_Children from "../../../../components/Block_Children";
import Block_Info from "../../../../components/Block_Info";
import Select_Object from "../../../../components/Select_Object";
import TextField_Value from "../../../../components/TextField_Value";
import useFetchAccountOfficer from "../../../../customHooks/useFetchAccountOfficer";
import useFetchCustomer from "../../../../customHooks/useFetchCustomer";
import useFetchRelationCode from "../../../../customHooks/useFetchRelationCode";
import Category_SavingAccount from '../../../../data/Category_SavingAccount'
import Currency_ForeignExchange from "../../../../data/Currency_ForeignExchange";
import ProductLine_SavingAccount from "../../../../data/ProductLine_SavingAccount";




function SavingAccount_OpenDiscounted_Components01({suffixID, forceDisable, object}) {
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    // Fetch Data
    const customerList = useFetchCustomer();
    const relationCodeList = useFetchRelationCode();
    const accountOfficerList = useFetchAccountOfficer();
    // Determine variables
    if(!object) object = ""

return ( 
<div>
    <Box m={2}>
        <Block_Info>
        <Block_Children> 
                <TextField_Value id={'txt_Customer_'+suffixID} label='Customer' length='30' disabled={true}/>
                <TextField_Value id={'txt_WorkingACCurrency_'+suffixID} label='Working AC Currency' length='25' disabled={true}/>
        </Block_Children>
        </Block_Info>
        <Block_Children>
                <AutoComplete_Object id={'aut_WorkingAccount_'+suffixID} label='Working Account' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true} disabled={isDisabled} defaultValue={object.CustomerID?`${object.CustomerID} - ${object.Customer?.GB_FullName}`:''}/>
                <TextField_Value id={'txt_AmountLCY_'+suffixID} label='Amount LCY' length='30' disabled={isDisabled} number={true}/>
                <TextField_Value id={'txt_AmountFCY_'+suffixID} label='Amount FCY' length='30' disabled={isDisabled} number={true}/>
                <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='30' disabled={isDisabled}/>
                <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='20' disabled={isDisabled} number={true}/>
        </Block_Children>
        <Block_Children>
                <TextField_Value id={'txt_AmtCreditForCust_'+suffixID} label='Amt Credit For Cust' length='30' disabled={true} value='_'/>
                <TextField_Value id={'txt_NewCustBal_'+suffixID} label='New Cust Bal' length='30' disabled={true} value='_'/>
        </Block_Children>
        <Block_Children>
                <Select_Object id={'slt_PaymentCCY_'+suffixID} label='Payment CCY'object={Currency_ForeignExchange}length='20' disabled={isDisabled} dataID={object.Category}/>
                <TextField_Value id={'txt_ForTeller_'+suffixID} label='For Teller' length='20' disabled={isDisabled} value={'vietvictory'}/>
                <Select_Object id={'slt_DebitAccount_'+suffixID} label='Debit Account'length='30' disabled={isDisabled} noValue={true}/>
        </Block_Children>
    </Box>
</div>
);
}

export default SavingAccount_OpenDiscounted_Components01;