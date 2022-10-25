import { useState } from "react";
import Block_Children from "../../../components/Block_Children";
import DataPicker_Day from "../../../components/DatePicker_Day";
import Select_Object from "../../../components/Select_Object";
import TextField_Value from "../../../components/TextField_Value";
import useFetchCity from "../../../customHooks/useFetchCity";
import BenCom_Outward from "../../../data/BenCom_Outward";
import Close_Online from "../../../data/Close_Online";
import Currency_ForeignExchange from "../../../data/Currency_ForeignExchange";
import ProductID from "../../../data/ProductID"

function TransferByCashComponents({suffixID, object,forceDisable}) {
    const cityList = useFetchCity();
    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable)
return ( 
<div>
    {/* Block 1  */}
    <Block_Children header1='Cash Deposits Outside System'>
        <Select_Object id={'slt_ProductID_'+suffixID}label='Product ID'required={true}object={ProductID}length='40' disabled={isDisabled}/>
        <Select_Object id={'slt_Currency_'+suffixID}label='Currency'required={true}object={Currency_ForeignExchange}length='20' disabled={isDisabled}/>
        <Select_Object id={'slt_BenCom_'+suffixID}label='Ben Com'required={true}object={BenCom_Outward}length='40' disabled={isDisabled}/>
        <Select_Object id={'slt_CreditAccount_'+suffixID}label='Credit Account' length='40' disabled={isDisabled} noValue={true}/>
        <Select_Object id={'slt_CashAccount_'+suffixID}label='Cash Account' length='40' disabled={isDisabled} noValue={true}/>
        <TextField_Value id={'txt_Amount_'+suffixID} label='Amount' length='20' disabled={isDisabled} number={true}/>
    </Block_Children>  
    {/* Block 2 */}
    <Block_Children header2='SENDING INFORMATION'>
        <TextField_Value id={'txt_Name_'+suffixID} label='Name' length='40' disabled={isDisabled} required={true}/>
        <TextField_Value id={'txt_Address_'+suffixID} label='Address' length='40' disabled={isDisabled} />
        <TextField_Value id={'txt_Phone_'+suffixID} label='Phone' length='15' disabled={isDisabled} />
    </Block_Children>
    {/* Block 3 */}
    <Block_Children header2='RECEIVING INFORMATION'>
        <TextField_Value id={'txt_Name_02_'+suffixID} label='Name' length='40' disabled={isDisabled}/>
        <TextField_Value id={'txt_BenAccount_'+suffixID} label='Ben Account' length='20' disabled={isDisabled}/>
        <Select_Object id={'slt_Province_'+suffixID}label='Province' object={cityList}length='40' disabled={isDisabled}/>
        <Select_Object id={'slt_BankCode_'+suffixID}label='Bank Code' noValue={true}length='40' disabled={isDisabled}/>
        <TextField_Value id={'txt_IdentityCard_'+suffixID} label='Identity Card' length='20' disabled={isDisabled}/>
        <DataPicker_Day id={'dp_IsssueDate_'+suffixID}label='Isssue Date' disabled={isDisabled}/>
        <DataPicker_Day id={'dp_DocExpiryDate_'+suffixID}label='Doc Expiry Date' disabled={isDisabled} />
    </Block_Children>
    {/* Block 4 */}
    <Block_Children header2=''>
        <TextField_Value id={'txt_Teller_'+suffixID} label='Teller' length='40' disabled={isDisabled} value='vietvictory'/>
        <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='40' disabled={isDisabled}/>
        <Select_Object id={'slt_WaiveCharges_'+suffixID}label='Waive Charges?'object={Close_Online}length='20' disabled={isDisabled}/>

    </Block_Children>
</div>
);
}

export default TransferByCashComponents;