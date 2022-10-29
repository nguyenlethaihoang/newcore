import { useState } from "react";
import Block_Children from "../../../components/Block_Children";
import DataPicker_Day from "../../../components/DatePicker_Day";
import Select_Object from "../../../components/Select_Object";
import TextField_Value from "../../../components/TextField_Value";
import useFetchCity from "../../../customHooks/useFetchCity";
import BankCode from "../../../data/BankCode";
import BenCom_Outward from "../../../data/BenCom_Outward";
import Close_Online from "../../../data/Close_Online";
import Currency_ForeignExchange from "../../../data/Currency_ForeignExchange";
import DebitAccount_Full_List from "../../../data/DebitAccount_Full_List";
import ProductID from "../../../data/ProductID"

function TransferByCashComponents({suffixID, object,forceDisable}) {
    const cityList = useFetchCity();
    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    const [isDisabledLevel2, setIsDisabledLevel2] = useState(false)

    const [isValueBankCode, setIsValueBankCode] = useState([])
    const [isValueCashAccount, setIsValueCashAccount] = useState([])
return ( 
<div
    onClick={() => {
        // Update array for Bank Code
        if (document.getElementById('slt_Province_TransferByCash').innerText.length != 1)
        {
            let type = parseInt(document.getElementById('slt_Province_TransferByCash').innerText.split(" - ")[0]) ?? 0;
            setIsValueBankCode(objectBankCode(BankCode, type));
        }
        // Check Disable RECEIVING INFORMATION
        if (document.getElementById('slt_ProductID_TransferByCash').innerText == '1000 - Điện CMND')
            setIsDisabledLevel2(true)
        else 
            setIsDisabledLevel2(false)
        // Update array for Cash Account
        if (document.getElementById('slt_Currency_TransferByCash').innerText.length != 1)
        {
            let idCurrency = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_Currency_TransferByCash').innerText)
            setIsValueCashAccount(objectCashAccount(DebitAccount_Full_List, idCurrency))
            document.getElementById('slt_CashAccount_TransferByCash').innerText = DebitAccount_Full_List[idCurrency-1]?.Name;
        }
        // Update Credit account
        if (document.getElementById('slt_BenCom_TransferByCash').innerText.length != 1 && document.getElementById('slt_ProductID_TransferByCash').innerText.length != 1) {
            let sum = 0
            let valueTemp = `0${document.getElementById('slt_BenCom_TransferByCash').innerText[6]}.`
            for (let i = 0; i < document.getElementById('slt_BenCom_TransferByCash').innerText.length; i++)
                sum += document.getElementById('slt_BenCom_TransferByCash').innerText[i].charCodeAt(0)
            for (let i = 1; i <= 9 - sum.toString().length; i++)
                valueTemp += '0'
            valueTemp += sum.toString() + '.'
            valueTemp += document.getElementById('slt_ProductID_TransferByCash').innerText[0]
            document.getElementById('txt_CreditAccount_TransferByCash').value = valueTemp;
        }
    }}
>
    {/* Block 1  */}
    <Block_Children header1='Cash Deposits Outside System'>
        <Select_Object id={'slt_ProductID_'+suffixID}label='Product ID'required={true}object={ProductID}length='40' disabled={isDisabled}/>
        <Select_Object id={'slt_Currency_'+suffixID}label='Currency'required={true}object={Currency_ForeignExchange}length='20' disabled={isDisabled}/>
        <Select_Object id={'slt_BenCom_'+suffixID}label='Ben Com'required={true}object={BenCom_Outward}length='40' disabled={isDisabled}/>
        {/* <Select_Object id={'slt_CreditAccount_'+suffixID}label='Credit Account' length='40' disabled={isDisabled} noValue={true}/> */}
        <TextField_Value id={'txt_CreditAccount_'+suffixID} label='Credit Account' length='40' disabled={true} noDown={true}/>
        <Select_Object id={'slt_CashAccount_'+suffixID}label='Cash Account' length='40' disabled={isDisabled} object={isValueCashAccount} dataID={0}/>
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
        <TextField_Value id={'txt_BenAccount_'+suffixID} label='Ben Account' length='20' disabled={isDisabledLevel2}/>
        <Select_Object id={'slt_Province_'+suffixID}label='Province' object={cityList}length='40' disabled={isDisabledLevel2}/>
        <Select_Object id={'slt_BankCode_'+suffixID}label='Bank Code' length='40' disabled={isDisabledLevel2} object={isValueBankCode}/>
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

function objectBankCode(object, type) {
    let objTmp = []
    object.map((value, index) => {
        {
            let tmp = {};
            if (value.type == type) {
                tmp.id = value.id;
                tmp.Name = value.Name
                objTmp.push(tmp);
            }
        }

    }) 
    return objTmp
}

function objectCashAccount(object, type) {
    let objTmp = []
    object.map((value, index) => {
        {
            let tmp = {};
            if (value.id == type) {
                tmp.id = value.id;
                tmp.Name = value.Name
                objTmp.push(tmp);
            }
        }

    }) 
    return objTmp
}

function resolveNameID(object, text) {
    let temp = null
    object.map((data, index) => {
            if (data.Name == text)
            {
            temp = data.id.toString()
            
            }
    })
    return temp
  }