import { Button } from "@mui/material";
import { useState } from "react";
import Block_Children from "../../../../../components/Block_Children";
import Select_Object from "../../../../../components/Select_Object";
import TextField_Value from "../../../../../components/TextField_Value";
import useFetchCurrency from "../../../../../customHooks/useFetchCurrency";
import AccountType_CashDeposits from "../../../../../data/AccountType_CashDeposits";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Block_Info from "../../../../../components/Block_Info";
import DataPicker_Day from "../../../../../components/DatePicker_Day";
import Close_Online from "../../../../../data/Close_Online";
import debitAccountApi from "../../../../../apis/debitAccountApi";
import currencyList_Basic from "../../../../../data/currencyList_Basic";


function TransferWithdrawalComponents({suffixID, object, forceDisable}) {
    // Borrow Data
    const currencyList = useFetchCurrency();
    //
    const [debitAccountList, setDebitAccountList] = useState([]);
    const [colorState, setColorState] = useState(0)
    const [isFound, setIsFound] = useState(false)
    const [colorState01, setColorState01] = useState(0)
    const [isFound01, setIsFound01] = useState(false)
    // Manage Disable
    const [isDisabled, setIsDisable] = useState(forceDisable)
    // Manage Validation Component
    const [isValidation, setIsValidation] = useState(false)
    // if (object === undefined) {
    //     // setIsValidation(false)
    // } else setIsValidation(true)
    
    let checkShow = false
    let popup = false
    if (object == undefined) object = ""; else {
        popup = true
        if (object.Transaction.Status == 1)
            checkShow = true
    }
return ( 
<div
    onChange={() => {
        if (popup == false) {
            const fetchDebitAccountList = async () => {
                const response = await debitAccountApi.getAll();
                setDebitAccountList(response.data) 
            }
            fetchDebitAccountList();
            document.getElementById('txt_AmtCreditForCust_Transfer').value = parseFloat(document.getElementById('txt_DebitAmt_Transfer').value) * parseFloat(document.getElementById('txt_DealRate_Transfer').value)
            document.getElementById('txt_NewCustBal_Transfer').value = document.getElementById('txt_CustBal_Transfer').value - document.getElementById('txt_DebitAmt_Transfer').value
        }
    }}
>
    {/* Validation Components  */}
    {
       popup 
        &&
        <Block_Info>
            <Block_Children header2='VALIDATION'>
            <Select_Object id={'slt_Status_'+suffixID}label='Status'object={StatusArray}length='25'  disabled={!checkShow} dataID={object?.Transaction?.Status}/>
            </Block_Children>
        </Block_Info>
    }
    {/* Block 1 */}
    <Block_Children header2='DEBIT INFORMATION'>
        <Select_Object id={'slt_AccountType_'+suffixID}label='Account Type'object={AccountType_CashDeposits}length='25'  disabled={true} dataID={1}/>
         
    </Block_Children>
    <Block_Children>
        <TextField_Value id={'txt_DebitAccount_'+suffixID} label='Debit Account' length='25' disabled={isDisabled}  required={true} value={object?.Transaction?.DebitAccount}/>
        <div
            style={{display: 'flex',
            alignItems: 'center',
            paddingTop: '20px',
            paddingLeft: '20px',
            flexWrap: 'wrap',
            columnGap: '20px'}}
        > 
            <Button
            variant='contained'
            disabled={isDisabled}
            onClick={() => {
                //
                
                // Temp variable
                let temp 
                // Fetch 
                const fetchDebitAccountList = async () => {
                    const response = await debitAccountApi.getAll();
                    setDebitAccountList(response.data) 
                }
                fetchDebitAccountList();
                debitAccountList.map((value, index) => {
                    if (value.id == document.getElementById('txt_DebitAccount_Transfer').value){
                        temp = value;     
                    }
                })
                if (temp != null) {
                    setColorState(1)
                    setIsFound(true)
                    // Fill value
                    document.getElementById('txt_CustomerID_01_Transfer').value = temp.CustomerID 
                    document.getElementById('txt_CustomerName_01_Transfer').value = temp.Customer.GB_FullName
                    document.getElementById('txt_Currency_01_Transfer').value = temp.CURRENCY.Name
                    document.getElementById('txt_CustBal_Transfer').value = temp.WorkingAmount
                } else
                {
                    setColorState(2)
                    setIsFound(false)
                }
            }}
        >
            Confirm
        </Button>
        
        {colorState == 1 && <div style={{display:'flex', color: 'green'}}><DoneIcon sx={{color:'green'}} /></div>}
        {colorState == 2 &&  <div style={{display:'flex', color: 'red'}}><CloseIcon sx={{color:'red'}} />Customer Account does not exist</div>}
        </div>
    </Block_Children>
    <Block_Info>
        <Block_Children>
            <TextField_Value id={'txt_CustomerID_01_'+suffixID} label='Customer ID' length='25' disabled={true} noDown={true} value={object?.Account?.Customer?.id}/>
            <TextField_Value id={'txt_CustomerName_01_'+suffixID} label='Customer Name' length='30' disabled={true} noDown={true} value={object?.Account?.Customer?.GB_FullName}/>
            <TextField_Value id={'txt_Currency_01_'+suffixID} label='Currency' length='15' disabled={true} noDown={true} value={object != "" ? currencyList_Basic[object.Account.Currency-1].Name : currencyList_Basic[1].Name}/>   
        </Block_Children>
    </Block_Info>
    <Block_Children>
        <TextField_Value id={'txt_DebitAmt_'+suffixID} label='Debit Amt' length='25' disabled={isDisabled} noDown={true} number={true} value={object?.Transaction?.TransferAmount}/>
        <TextField_Value id={'txt_CustBal_'+suffixID} label='Cust Bal' length='25' disabled={true} noDown={true} value={object?.Transaction?.InitialAmount}/>
        <TextField_Value id={'txt_NewCustBal_'+suffixID} label='New Cust Bal' length='25' disabled={true} noDown={true} value={object != "" ?  object?.Transaction?.InitialAmount - object?.Transaction?.TransferAmount : 0}/>
        <DataPicker_Day id={'dp_ValueDate_'+suffixID} label='Value Date' disabled={isDisabled}/>
    </Block_Children>
    <Block_Children header2='CREDIT INFORMATION'>
        <TextField_Value id={'txt_CreditAccount_'+suffixID} label='Credit Account' length='25' disabled={isDisabled}  required={true} value={object?.Transaction?.CreditAccount}/>
        <div
            style={{display: 'flex',
            alignItems: 'center',
            paddingTop: '20px',
            paddingLeft: '20px',
            flexWrap: 'wrap',
            columnGap: '20px'}}
        >
            <Button
            variant='contained'
            disabled={isDisabled}
            onClick={() => {
                //
                
                // Temp variable
                let temp 
                // Fetch 
                const fetchDebitAccountList = async () => {
                    const response = await debitAccountApi.getAll();
                    setDebitAccountList(response.data) 
                }
                fetchDebitAccountList();
                debitAccountList.map((value, index) => {
                    if (value.id == document.getElementById('txt_CreditAccount_Transfer').value){
                        temp = value;     
                    }
                })
                if (temp != null) {
                    setColorState01(1)
                    setIsFound01(true)
                    // Fill value
                    document.getElementById('txt_CustomerID_02_Transfer').value = temp.CustomerID 
                    document.getElementById('txt_CustomerName_02_Transfer').value = temp.Customer.GB_FullName
                    document.getElementById('txt_Currency_02_Transfer').value = temp.CURRENCY.Name
                } else
                {
                    setColorState01(2)
                    setIsFound01(false)
                }
            }}
        >
            Confirm
        </Button>
        
        {colorState01 == 1 && <div style={{display:'flex', color: 'green'}}><DoneIcon sx={{color:'green'}} /></div>}
        {colorState01 == 2 &&  <div style={{display:'flex', color: 'red'}}><CloseIcon sx={{color:'red'}} />Customer Account does not exist</div>}
        </div>
    </Block_Children>
    <Block_Info>
        <Block_Children>
            <TextField_Value id={'txt_CustomerID_02_'+suffixID} label='Customer ID' length='25' disabled={true} noDown={true}/>
            <TextField_Value id={'txt_CustomerName_02_'+suffixID} label='Customer Name' length='30' disabled={true} noDown={true}/>
            <TextField_Value id={'txt_Currency_02_'+suffixID} label='Currency' length='15' disabled={true} noDown={true}/>
        </Block_Children>
    </Block_Info>
    <Block_Children>
        <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='25' disabled={isDisabled} noDown={true} value={object != "" ? object.Transaction.DealRate : 1} number={true}/>
        <TextField_Value id={'txt_AmtCreditForCust_'+suffixID} label='Amt Credit For Cust' length='25' disabled={true} noDown={true} value={object != "" ? object.Transaction.DealRate * object?.Transaction?.TransferAmount: 0} number={true}/>
        <DataPicker_Day id={'dp_ValueDate_01_'+suffixID} label='Value Date' disabled={isDisabled}/>
    </Block_Children>
    <Block_Children>
        <Select_Object id={'slt_WaiveCharges_'+suffixID}label='Waive Charges?'object={Close_Online}length='25'  disabled={isDisabled} dataID={ object?.Transaction?.WaiveCharges == true ? 1 : 2 | 1}/>
        <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='25'  disabled={isDisabled}/>
    </Block_Children>
</div>
);
}

export default TransferWithdrawalComponents;


const StatusArray = [
    {id: 1, Name: 'Pending'},
    {id: 2, Name: 'Authorize'},
    {id: 3, Name: 'Un-Authorize'},

]