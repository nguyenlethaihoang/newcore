import { Button } from "@mui/material";
import { useState } from "react";
import cashDepositsApi from "../../../../../apis/cashDepositsApi";
import Block_Button from "../../../../../components/Block_Button";
import Block_Children from "../../../../../components/Block_Children";
import Block_Spacing from "../../../../../components/Block_Spacing";
import DataPicker_Day from "../../../../../components/DatePicker_Day";
import Select_Object from "../../../../../components/Select_Object";
import Table_Object from "../../../../../components/Table_Object";
import TextField_Value from "../../../../../components/TextField_Value";
import useFetchCurrency from "../../../../../customHooks/useFetchCurrency";
import AccountType_CashDeposits from "../../../../../data/AccountType_CashDeposits";
import currencyList_Basic from "../../../../../data/currencyList_Basic";
import Table_Header_CustomerTransaction from "../../../../../data/Table_Header_CustomerTransaction";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';


function EnquiryCustomerTranComponents({object, suffixID}) {
    const currencyList = useFetchCurrency();
    //
    const [depositsList, setDepositsList] = useState([])
    const [columnsTable, setColumnsTable] = useState([])
    const [rowsTable, setRowsTable] = useState([])
    
return ( 
<div>
    <Block_Spacing>
        <Block_Children>
            <Select_Object id={'slt_TransactionType_'+suffixID}label='Transaction Type'object={TransactionType} length='25' dataID={1}/>
            <TextField_Value id={'txt_RefID_'+suffixID} label='Ref ID' length='25' />
            <Select_Object id={'slt_CustomerType_'+suffixID}label='Customer Type'object={CustomerType} length='25' />
            <TextField_Value id={'txt_GBFullName_'+suffixID} label='GB Full Name' length='35' />
            <TextField_Value id={'txt_AmountFrom_'+suffixID} label='Amount From' length='20' number={true}/>
            <TextField_Value id={'txt_AmountTo_'+suffixID} label='Amount To' length='20'number={true} />
        </Block_Children>
        <Block_Children>
            <Select_Object id={'slt_AccountType_'+suffixID}label='Account Type'object={AccountType_CashDeposits} length='35' dataID={1} disabled={true} />
            <Select_Object id={'slt_Currency_'+suffixID}label='Currency'object={currencyList} length='17'/>
            <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='20' />
            <TextField_Value id={'txt_CustomerAccount_'+suffixID} label='Customer Account' length='20' />
            <DataPicker_Day id={'dp_Date_'+suffixID}label='Date' defaultValue={'2022-10-15'}/>
        </Block_Children>
        <Block_Button>
            <Button
                variant="contained"
                endIcon={<SearchIcon />}
                onClick={async() => {
                    let params = {}
                    let data = []
                    params.TransactionType = resolveNameID(TransactionType, document.getElementById('slt_TransactionType_EnquiryCustomerTranComponents').innerText)
                    params.RefID = document.getElementById('txt_RefID_EnquiryCustomerTranComponents').value
                    params.CustomerType = resolveNameID(CustomerType, document.getElementById('slt_CustomerType_EnquiryCustomerTranComponents').innerText)
                    params.GB_FullName = document.getElementById('txt_GBFullName_EnquiryCustomerTranComponents').value
                    params.AmountFr = document.getElementById('txt_AmountFrom_EnquiryCustomerTranComponents').value
                    params.AmountTo = document.getElementById('txt_AmountTo_EnquiryCustomerTranComponents').value
                    params.Currency = resolveNameID(currencyList_Basic, document.getElementById('slt_Currency_EnquiryCustomerTranComponents').innerText)
                    params.CustomerID = document.getElementById('txt_CustomerID_EnquiryCustomerTranComponents').value
                    params.Date = convertDatetime(document.getElementById('dp_Date_EnquiryCustomerTranComponents').value)
                    params.CustomerAccount = document.getElementById('txt_CustomerAccount_EnquiryCustomerTranComponents').value
                    const fetchDepositsList = async () => {
                        const response = await cashDepositsApi.postEnquiry(params);
                        setDepositsList(response.data) 
                    }
                    fetchDepositsList();
                    if (params.TransactionType == 1) {
                        depositsList.map((value, index) => {
                            data.push(createData(value.Transaction.id, value.Transaction.ACCOUNTTYPE.Name, value.Transaction.Account, value.Account.Customer.GB_FullName,currencyList[value?.Account.Currency-1]?.Name,value.Transaction.DepositAmount, StatusArray[value.Transaction.Status-1].Name ,  {id: value.Transaction.id, object: value, type: 1}))
                        })
                    } else
                    if (params.TransactionType == 2) {
                        depositsList.map((value, index) => {
                            data.push(createData(value.Transaction.id, value.Transaction.ACCOUNTTYPE.Name, value.Transaction.Account, value.Account.Customer.GB_FullName,currencyList[value?.Account.Currency-1]?.Name,value.Transaction.DepositAmount, StatusArray[value.Transaction.Status-1].Name ,  {id: value.Transaction.id, object: value, type: 2}))
                        })
                    } else 
                    if (params.TransactionType == 3) {
                        depositsList.map((value, index) => {
                            data.push(createData(value.Transaction.id, value.Transaction.ACCOUNTTYPE.Name, value.Transaction.Account, value.Account.Customer.GB_FullName,currencyList[value?.Account.Currency-1]?.Name,value.Transaction.DepositAmount, StatusArray[value.Transaction.Status-1].Name ,  {id: value.Transaction.id, object: value, type: 3}))
                        })
                    }
                    setColumnsTable(Table_Header_CustomerTransaction)
                    setRowsTable(data)
                }}
            >
                Search
            </Button>
            <Button
                endIcon={<DeleteIcon />}
                variant="outlined"
            >
                Reset
            </Button>
        </Block_Button>
        <Table_Object rows={rowsTable} columns={columnsTable}/>

    </Block_Spacing>
</div>
);
}

export default EnquiryCustomerTranComponents;

// array
const TransactionType = [
    {id: 1, Name: 'Cash Deposit'},
    {id: 2, Name: 'Cash Withdrawal'},
    {id: 3, Name: 'Transfer Withdrawal'},
]

const CustomerType = [
    {id: 1, Name: 'P - Person'},
    {id: 2, Name: 'C - Corporate'},
]

const StatusArray = [
    {id: 1, Name: 'PND'},
    {id: 2, Name: 'AUT'},
    {id: 3, Name: 'UNA'},

]


// Create Data
function createData(id, AccountType, AccountCode, CustomerName, Currency, TransactionAmount, Status, Detail) {
    return { id, AccountType, AccountCode, CustomerName, Currency, TransactionAmount, Status, Detail };}

// rersolve from text to id with Name
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

// ------------------- CONVERT DAY DATA ------------------------
function convertDatetime(date){
    let dateArr = date.split('/')
    let dateConverted = dateArr[2] + '-'+ dateArr[1] + '-' + dateArr[0]
    return dateConverted
  }