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
import Product_SavingAccount from "../../../../data/Product_SavingAccount";
import Term_Quaterly_SavingAccount from "../../../../data/Term_Quaterly_SavingAccount";
import Product_Periodic_SavingAccount from "../../../../data/Product_Periodic_SavingAccount";
import Close_Online from "../../../../data/Close_Online";
import Block_Button from "../../../../components/Block_Button";
import Block_Info from "../../../../components/Block_Info";


function SavingAccount_OpenPeriodic_Components02({suffixID, object, forceDisable}) {
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    
    // Fetch Data
    const customerList = useFetchCustomer();
    const termSavingList =  useFetchTermSaving();
    // Manage Term
    const [isMonth, setIsMonth] = useState(termSavingList)
    // Determine variables
    if(!object) object = ""
return ( 
<div onChange={() => {
    if (document.getElementById('slt_Product_Open_Periodic_SavingAccount02').innerText == 'Tradi FD - Periodic - Monthly')
        setIsMonth(termSavingList)
        else setIsMonth(Term_Quaterly_SavingAccount)
}}
    onClick={() => {
        if (document.getElementById('slt_Product_Open_Periodic_SavingAccount02').innerText == 'Tradi FD - Periodic - Monthly')
        setIsMonth(termSavingList)
        else setIsMonth(Term_Quaterly_SavingAccount)
    }}
>
    <Box m={2}>
        {/* <Block_Info>
            <Block_Children header2='CUSTOMER INFOMATION'> 
                <TextField_Value id={'txt_Customer_'+suffixID} label='Customer' length='35' disabled={true} value='_'/> 
                <TextField_Value id={'txt_Category_'+suffixID} label='Category' length='35' disabled={true} value='_'/> 
                <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='35' disabled={true} value='_'/> 
            </Block_Children>
        </Block_Info> */} 
        <Block_Children header2='PRODUCT INFOMATION'>
                <Select_Object id={'slt_Product_'+suffixID} label='Product'object={Product_Periodic_SavingAccount}length='30' disabled={isDisabled} required={true} dataID={object != "" ? object.Product : ""}/>
                <TextField_Value id={'txt_Principal_'+suffixID} label='Principal' length='35' required={true} disabled={isDisabled} value={object.PrincipalAmount}/> 
                <DataPicker_Day id={'dp_Value Date_'+suffixID}label='Value Date'disabled={isDisabled}/>
                <Select_Object id={'slt_Term_'+suffixID} label='Term'object={isMonth}length='20' disabled={isDisabled} required={true} dataID={object.Term}/>
                <DataPicker_Day id={'dp_Maturity Date_'+suffixID}label='Maturity Date'disabled={isDisabled}/>
                <TextField_Value id={'txt_InterestRate_'+suffixID} label='Interest Rate' length='35' disabled={isDisabled} value={object.InterestRate}/> 
        </Block_Children>
        <Block_Children header2='PAYMENT INFOMATION'>
                <AutoComplete_Object id={'aut_WorkingAccount_'+suffixID} label='Working Account' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true} disabled={isDisabled} defaultValue={object.CustomerID?`${object.CustomerID} - ${object.Customer?.GB_FullName}`:''}/>
                <TextField_Value id={'txt_Maturity Instr_'+suffixID} label='Maturity Instr' length='40' disabled={true} value='AUTOMATIC ROLLOVER'/> 
        </Block_Children>
        <Block_Children header2='SCHEDULES'>
                <Select_Object id={'slt_SchedulesYN_'+suffixID} label='Schedules(Y/N)'object={Close_Online}length='30' disabled={true} dataID='1' />
                <TextField_Value id={'txt_SchedulesType_'+suffixID} label='Schedules Type' length='25' value='I' disabled={true}/> 
                <TextField_Value id={'txt_Frequency_'+suffixID} label='Frequency' length='25'  disabled={true}/> 

        </Block_Children>
    </Box>
</div>
);
}

export default SavingAccount_OpenPeriodic_Components02;