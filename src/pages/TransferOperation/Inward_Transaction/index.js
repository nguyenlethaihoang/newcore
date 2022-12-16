
import { Button } from "@mui/material";
import { useState } from "react";

import Table_Object from "../../../components/Table_Object";
import Table_Header_InwardTransaction from '../../../data/Table_Header_InwardTransaction'

import useFetchCity from "../../../customHooks/useFetchCity";

// FETCH DATA

// GLOBAL COMPONENTS
import Message_String from "../../../components/Message_String";
import Alert_String from "../../../components/Alert_String";
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchIcon from '@mui/icons-material/Search';
import Accordian_Children from "../../../components/Accordian_Children";
import Block_Button from "../../../components/Block_Button";
import Block_Children from "../../../components/Block_Children";
import Block_Spacing from "../../../components/Block_Spacing";

// COMPONENTS
import Inward_Transaction_Component from "./Inward_Transaction_Component"
import Inward_Enquiry from "./Inward_Enquiry"
// API
import InwardApi from "../../../apis/inwardApi"
// DATA
import Currency_ForeignExchange from "../../../data/Currency_ForeignExchange";
import InwardTypeData from "../../../data/Inward_Type"
import inwardApi from "../../../apis/inwardApi";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";

function createData(id, RefID, Type, ClearingID, DebitAccount, DebitAmtLCY, BOName,FOName, Status, Detail) {
    return {id, RefID, Type, ClearingID, DebitAccount, DebitAmtLCY, BOName,FOName, Status, Detail};}

function Inward_Transaction() {
    // Notification of 4.1 Foreign Exchange
    const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
    const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
    const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)

    const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)

    const [errorMessage, setErrorMessage] = useState("Action Failed")

    const [inwardEnquiryList, setInwardEnquiryList] = useState([])

    const cityList = useFetchCity();
    // Config Table
  const [columnsTable, setColumnsTable] = useState([])
  const [rowsTable, setRowsTable] = useState([])
return (
<div>
    {/* ---------------------------------------- */}
    {/* Accordian 1.1 Transfer By Cash */}
    <Accordian_Children title='1.1 Inward Transaction' label='label1'>  
        <Block_Spacing>
            <Inward_Transaction_Component suffixID={'Inward'} />
            <Block_Button>
                <Button variant='contained'endIcon={<SaveIcon />} onClick={async() => {
                    // Post TransferByCash
                    let params = {}

                    params.Type = resolveNameID(InwardTypeData, document.getElementById('slt_InwardType_Inward').innerText)
                    params.ClearingID = document.getElementById('txt_ClearingID_Inward').value
                    params.DebitCurrency = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_DebitCurrency_Inward').innerText)
                    params.DebitAccount = document.getElementById('txt_DebitAccount_Inward').value
                    params.DebitAmtLCY = document.getElementById('txt_DebitAmtLCY_Inward').value ?? 0
                    params.DebitAmtFCY = document.getElementById('txt_DebitAmtFCY_Inward').value ?? 0
                    params.DealRate= document.getElementById('txt_DealRate_Inward').value ?? 1
                    params.CreditCurrency = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_CreditCurrency_Inward').innerText)
                    params.CreditAccount= document.getElementById('txt_CreditAccount_Inward').value
                    params.CreditAmtLCY= document.getElementById('txt_CreditAmtLCY_Inward').value ?? 0
                    params.CreditAmtFCY = document.getElementById('txt_CreditAmtFCY_Inward').value ?? 0
                    params.BOName = document.getElementById('txt_BOName_Inward').value
                    params.FOName = document.getElementById('txt_FOName_Inward').value
                    params.LegalID = document.getElementById('txt_LegalID_Inward').value
                    params.Telephone = document.getElementById('txt_Telephone_Inward').value
                    params.IssueDate = convertDatetime(document.getElementById('dp_IssueDate_Inward').value)
                    params.IssuePlace = document.getElementById('txt_IssuePlace_Inward').value
                    params.Narrative = document.getElementById('txt_Narrative_Inward').value

                    // Check error and store it by Array
                    arrError = []
                    if(!params.Type) arrError.push('Inward Type is Required');
                    if(!params.DebitCurrency) arrError.push('Debit Currency is Required');
                    if(!params.CreditCurrency) arrError.push('Credit Currency is Required');
                    if(!params.ClearingID) arrError.push('ClearingID is Required')
                    if(arrError.length == 0) {
                        let res
                        if(params.Type == 1 || params.Type == 2){
                            res = await InwardApi.createCashWithdrawal(params);
                        }else if(params.Type == 3){
                            res = await InwardApi.createCredit(params);
                        }
                       
                        if(res == 'success') {
                            setIsNotification_Success_01(true); 
                            setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                        } else {
                            setErrorMessage(res)
                            setIsNotification_Failed_01(true)
                            setTimeout(() => {setIsNotification_Failed_01(false)}, 5000);
                        }
                    }
                    else{
                        setIsNotification_Message_01(true)
                        setTimeout(() => {setIsNotification_Message_01(false)}, 4000);
                      }
                    
                }}>Save</Button>
                <Button variant='outlined'endIcon={<RestartAltIcon />}>Reset</Button>
            </Block_Button>

            {isNotification_Success_01 && <Message_String type='success' text='Add Inward By Cash Successfully'/>} 
            {isNotification_Failed_01 && <Message_String type='error' text={errorMessage}/>}  
            {isNotification_Message_01 && <Alert_String arrError={arrError}/>}
        </Block_Spacing>
    </Accordian_Children>  

    {/* ---------------------------------------- */}
    {/* Accordian 1.2 Enquiry */}
    <Accordian_Children title='1.2 Enquiry' label='label1'>
        <Block_Spacing>
            <Inward_Enquiry suffixID={'InwardEnquiry'}/> 
            <Block_Button>
                <Button variant='contained'endIcon={<SearchIcon />} onClick={async () => {
                    // -----------------------------
                    // Action

                    let params = {}
                    arrError = []

                    params.TransactionType = resolveNameID(InwardTypeData, document.getElementById('slt_TransactionType_InwardEnquiry').innerText)
                    params.BOName = document.getElementById('txt_BOName_InwardEnquiry').value
                    params.FOName = document.getElementById('txt_FOName_InwardEnquiry').value
                    params.LegalID = document.getElementById('txt_FOLegalID_InwardEnquiry').value
                    params.RefID = document.getElementById('txt_RefID_InwardEnquiry').value
                    params.CreditCurrency =  resolveNameID(Currency_ForeignExchange, document.getElementById('slt_CreditCurrency_InwardEnquiry').innerText)
                    params.AmountFr = document.getElementById('txt_Amountfr_InwardEnquiry').value
                    params.AmountTo = document.getElementById('txt_Amountto_InwardEnquiry').value

                    console.log(params.TransactionType)
                    if(!params.TransactionType){
                        arrError.push('Transaction Type is Required');
                    }
                    if(arrError.length != 0){
                        setIsNotification_Message_02(true)
                        setTimeout(() => {setIsNotification_Message_02(false)}, 4000);
                    }else{
                        let data = []

                        const fetchInwardList = async () => {
                            const response = await inwardApi.enquiry(params)
                            setInwardEnquiryList(response.data)

                        }
                        fetchInwardList()
                        data = []

                        inwardEnquiryList.map((value, index) => {
                            let itemStatus = value.Status
                            if(itemStatus == 1){
                                itemStatus = 'UAT'
                            }else if(itemStatus == 2){
                                itemStatus = 'AUT'
                            }else{
                                itemStatus = 'REV'
                            }

                            let type 
                            InwardTypeData.map((data, index) => {
                                    if (data.id == value.Type)
                                    {
                                        type = data.Name
                                    }
                            })
                            console.log(value)
                            console.log(type)
                            data.push(createData(value.id, value.RefID, type, value.ClearingID, value.DebitAccount, value.DebitAmtLCY, value.BOName, value.FOName, itemStatus, {id: value.id}))
                        })

                        setColumnsTable(Table_Header_InwardTransaction)
                        setRowsTable(data)
                    }
                    
                }}>Search</Button>
                <Button variant='outlined'endIcon={<RestartAltIcon />} onClick={() => {
                    // -----------------------------
                    // Action
                    setColumnsTable([])
                    setRowsTable([])
                }}>Reset</Button>
            </Block_Button>
            <Block_Children>
             *Note: Click twice "Search" to update the table
            </Block_Children>
            {isNotification_Message_02 && <Alert_String arrError={arrError}/>}
        </Block_Spacing>  
        <Table_Object rows={rowsTable} columns={columnsTable}/>
    </Accordian_Children>  
</div>
)
}

export default Inward_Transaction;

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

  function convertDatetime(date){
    let dateArr = date.split('/')
    let dateConverted = dateArr[2] + '-'+ dateArr[1] + '-' + dateArr[0]
    return dateConverted
  }

  let arrError = []
