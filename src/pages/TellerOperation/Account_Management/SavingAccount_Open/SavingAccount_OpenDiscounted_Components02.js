import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AutoComplete_Object from "../../../../components/AutoComplete_Object";
import Block_Children from "../../../../components/Block_Children";
import DataPicker_Day from "../../../../components/DatePicker_Day";
import Select_Object from "../../../../components/Select_Object";
import TextField_Value from "../../../../components/TextField_Value";
import useFetchCustomer from "../../../../customHooks/useFetchCustomer";
import useFetchTermSaving from "../../../../customHooks/useFetchTermSaving";
import Category_SavingAccount from '../../../../data/Category_SavingAccount'
import ProductLine_SavingAccount from "../../../../data/ProductLine_SavingAccount";
import ProductLine_Discounted_SavingAccount from "../../../../data/ProductLine_Discounted_SavingAccount";
import Term_Discounted_SavingAccount from "../../../../data/Term_Discounted_SavingAccount";


import Product_Periodic_SavingAccount from "../../../../data/Product_Periodic_SavingAccount";
import Close_Online from "../../../../data/Close_Online";
import Block_Button from "../../../../components/Block_Button";
import Block_Info from "../../../../components/Block_Info";
import useFetchAccountOfficer from "../../../../customHooks/useFetchAccountOfficer";


function SavingAccount_OpenDiscounted_Components02({suffixID, object, forceDisable}) {
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    // Fetch Data
    const customerList = useFetchCustomer();
    const termSavingList =  useFetchTermSaving();
    const accountOfficerList =  useFetchAccountOfficer();
    // Determine variables
    if(!object) object = ""
return ( 
<div>
    <Box m={2}>
        <Block_Children header2='CUSTOMER DETAILS'> 
            <TextField_Value id={'txt_Customer_'+suffixID} label='Customer' length='35' disabled={true} value='_' required={true}/> 
            <AutoComplete_Object id={'aut_IDJoinHolder_'+suffixID} label='ID Join Holder' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' disabled={isDisabled} defaultValue={object.CustomerID?`${object.CustomerID} - ${object.Customer?.GB_FullName}`:''}/>
        </Block_Children>
        <Block_Children header2='CUSTOMER DETAILS'>
                <Select_Object id={'slt_Product_'+suffixID} label='Product'object={ProductLine_Discounted_SavingAccount}length='30' disabled={isDisabled} required={true}/> 
                <Select_Object id={'slt_Currency_'+suffixID} label='Currency'length='15' disabled={true} noValue={true}/>
                <TextField_Value id={'txt_Amount_'+suffixID} label='Amount' length='35' disabled={true} value='_' /> 
                <DataPicker_Day id={'dp_ValueDate_'+suffixID}label='Value Date'disabled={isDisabled}/>
                <Select_Object id={'slt_Term_'+suffixID} label='Term'length='15' disabled={isDisabled} object={Term_Discounted_SavingAccount}/>
                <DataPicker_Day id={'dp_FinalMatDate_'+suffixID}label='Final Mat Date'disabled={isDisabled}/>
                <TextField_Value id={'txt_InterestRate_'+suffixID} label='Interest Rate' length='20' disabled={isDisabled} number={true}/>
                <TextField_Value id={'txt_TotalIntAmt_'+suffixID} label='Total Int Amt' length='30' disabled={true} value='_'/>
                <TextField_Value id={'txt_WorkingAccount_'+suffixID} label='Working Account' length='30' disabled={true} value='_'/>
                <Select_Object id={'slt_Account Officer_'+suffixID} label='Account Officer'length='25' disabled={isDisabled} object={accountOfficerList}/>

                
        </Block_Children>
    </Box>
</div>
);
}

export default SavingAccount_OpenDiscounted_Components02;