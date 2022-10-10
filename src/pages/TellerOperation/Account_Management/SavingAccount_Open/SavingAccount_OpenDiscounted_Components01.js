import { Box } from "@mui/system";
import { useState } from "react";
import AutoComplete_Object from "../../../../components/AutoComplete_Object";
import Block_Children from "../../../../components/Block_Children";
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
        <Block_Children> 
                <AutoComplete_Object id={'aut_CustomerID_'+suffixID} label='Customer ID' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true} disabled={isDisabled} defaultValue={object.CustomerID?`${object.CustomerID} - ${object.Customer?.GB_FullName}`:''}/>
                <Select_Object id={'slt_Category_'+suffixID} label='Category'required={true}object={Category_SavingAccount}length='30' disabled={isDisabled} dataID={object.Category}/>
                <TextField_Value id={'txt_AccountTitle_'+suffixID} label='Account Title' length='35' disabled={isDisabled} value={object.AccountTitle} required={true}/>
                <TextField_Value id={'txt_ShortTitle_'+suffixID} label='Short Title' length='20' disabled={isDisabled} value={object.AccountTitle}/>
                <Select_Object id={'slt_Currency_'+suffixID} label='Currency'required={true}object={Currency_ForeignExchange}length='15' disabled={isDisabled} />
        </Block_Children>
        <Block_Children header2='JOIN ACCOUNT INFOMATION'>
                <AutoComplete_Object id={'aut_JointA/CHolder_'+suffixID} label='Joint A/C Holder' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' disabled={isDisabled} defaultValue={object.CustomerID?`${object.CustomerID} - ${object.Customer?.GB_FullName}`:''}/>
                <Select_Object id={'slt_Relationship_'+suffixID} label='Relationship'object={relationCodeList}length='30' disabled={isDisabled} dataID={object.Category}/>
                <TextField_Value id={'txt_Notes_'+suffixID} label='Notes' length='20' disabled={isDisabled} value={object.AccountTitle}/>
                <Select_Object id={'slt_AccountOfficer_'+suffixID} label='Account Officer'object={accountOfficerList}length='30' disabled={isDisabled} dataID={object.Category}/>

        </Block_Children>
    </Box>
</div>
);
}

export default SavingAccount_OpenDiscounted_Components01;