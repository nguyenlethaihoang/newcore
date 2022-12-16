import { Button } from "@mui/material";
import { useState } from "react";

import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchIcon from '@mui/icons-material/Search';
import Accordian_Children from "../../../components/Accordian_Children";
import Block_Button from "../../../components/Block_Button";
import Block_Children from "../../../components/Block_Children";
import Block_Spacing from "../../../components/Block_Spacing";
import Table_Object from "../../../components/Table_Object";
import TransferByCashComponents from "./TransferByCashComponents";
import TransferByAccountComponents from "./TransferByAccountComponents";
import Outward_Transaction_Components from "./Outward_Transaction_Components";
import Table_Header_OutwardTransaction from '../../../data/Table_Header_OutwardTransaction'
import ProductID from "../../../data/ProductID";
import BenCom_Outward from "../../../data/BenCom_Outward";
import DebitAccount_Full_List from "../../../data/DebitAccount_Full_List";
import Close_Online from "../../../data/Close_Online";
import Currency_ForeignExchange from "../../../data/Currency_ForeignExchange";
import transferByCashApi from "../../../apis/transferByCashApi";
import transferByAccountApi from "../../../apis/transferByAccountApi";
import useFetchCity from "../../../customHooks/useFetchCity";
import BankCode from "../../../data/BankCode";
import Message_String from "../../../components/Message_String";
import Alert_String from "../../../components/Alert_String";

function Outward_Transaction() {
    // Notification of 4.1 Foreign Exchange
    const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
    const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
    const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)

    const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
    const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
    const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)

    const cityList = useFetchCity();
    // Config Table
  const [columnsTable, setColumnsTable] = useState([])
  const [rowsTable, setRowsTable] = useState([])
return (
<div>
    {/* ---------------------------------------- */}
    {/* Accordian 1.1 Transfer By Cash */}
    <Accordian_Children title='1.1 Transfer By Cash' label='label1'>  
        <Block_Spacing>
            <TransferByCashComponents suffixID={'TransferByCash'}/>
            <Block_Button>
                <Button variant='contained'endIcon={<SaveIcon />} onClick={async() => {
                    // Post TransferByCash
                    let params = {}
                    params.ProductID = resolveNameID(ProductID,document.getElementById('slt_ProductID_TransferByCash').innerText);
                    params.Currency = resolveNameID(Currency_ForeignExchange,document.getElementById('slt_Currency_TransferByCash').innerText);
                    params.Bencom = resolveNameID(BenCom_Outward,document.getElementById('slt_BenCom_TransferByCash').innerText);
                    params.CreditAccount = document.getElementById('txt_CreditAccount_TransferByCash').value;
                    params.CashAccount = resolveNameID(DebitAccount_Full_List,document.getElementById('slt_CashAccount_TransferByCash').innerText);
                    params.Amount = document.getElementById('txt_Amount_TransferByCash').value;
                    params.SendingName = document.getElementById('txt_Name_TransferByCash').value;
                    params.SendingAddress = document.getElementById('txt_Address_TransferByCash').value;
                    params.SendingPhone = document.getElementById('txt_Phone_TransferByCash').value;
                    params.ReceiveName = document.getElementById('txt_Name_02_TransferByCash').value;
                    params.ReceiveBenAccount = document.getElementById('txt_BenAccount_TransferByCash').value
                    params.Province = resolveNameID(cityList, document.getElementById('slt_Province_TransferByCash').innerText)
                    params.BankCode = resolveNameID(BankCode, document.getElementById('slt_BankCode_TransferByCash').innerText)
                    params.IdentityCard = document.getElementById('txt_IdentityCard_TransferByCash').value;
                    params.ReceiveIssueDate = convertDatetime(document.getElementById('dp_IsssueDate_TransferByCash').value)
                    params.ReceiveIssuePlace = document.getElementById('txt_IsssuePlace_TransferByCash').value;
                    params.Teller = document.getElementById('txt_Teller_TransferByCash').value;
                    params.Narrative = document.getElementById('txt_Narrative_TransferByCash').value;
                    params.WaiveCharges = resolveNameID(Close_Online, document.getElementById('slt_WaiveCharges_TransferByAccount').innerText);
                    // Check error and store it by Array
                    arrError = []
                    if(!params.ProductID) arrError.push('Product ID is Required');
                    if(!params.Currency) arrError.push('Currency is Required');
                    if(!params.Bencom) arrError.push('Bencom is Required');
                    if(!params.SendingName) arrError.push('Sending Name is Required');
                    if(arrError.length == 0) {
                        const res = await transferByCashApi.postCreateTransfer(params);
                        if(res != 'fail') {
                            setIsNotification_Success_01(true); 
                            setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                        } else {
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
            {isNotification_Success_01 && <Message_String type='success' text='Add Transfer By Cash Successfully'/>} 
            {isNotification_Failed_01 && <Message_String type='error' text='Add Transfer By Cash Failed'/>}  
            {isNotification_Message_01 && <Alert_String arrError={arrError}/>}
        </Block_Spacing>
    </Accordian_Children>  
    {/* ---------------------------------------- */}
    {/* Accordian 1.2 Transfer By Account */}
    <Accordian_Children title='1.2 Transfer By Account' label='label1'>  
        <Block_Spacing>
            <TransferByAccountComponents suffixID={'TransferByAccount'}/>
            <Block_Button>
                <Button variant='contained'endIcon={<SaveIcon />} onClick={async () => {
                    let params = {}
                    params.ProductID = resolveNameID(ProductID,document.getElementById('slt_ProductID_TransferByAccount').innerText);
                    params.Currency = resolveNameID(Currency_ForeignExchange,document.getElementById('slt_Currency_TransferByAccount').innerText);
                    params.ProductID = resolveNameID(ProductID,document.getElementById('slt_ProductID_TransferByAccount').innerText);;
                    params.Currency = resolveNameID(Currency_ForeignExchange,document.getElementById('txt_Currency_TransferByAccount').value);
                    params.Bencom = resolveNameID(BenCom_Outward,document.getElementById('slt_BenCom_TransferByAccount').innerText);
                    params.CreditAccount = document.getElementById('txt_CreditAccount_TransferByAccount').value;
                    params.DebitAccount = document.getElementById('txt_DebitAccount_TransferByAccount').value;
                    params.Amount = document.getElementById('txt_Amount_TransferByAccount').value;
                    params.SendingName = document.getElementById('txt_SendingName_TransferByAccount').value;
                    params.SendingAddress = document.getElementById('txt_SendingAddress_TransferByAccount').value;
                    params.TaxCode = document.getElementById('txt_IDTaxCode_TransferByAccount').value;
                    params.ReceiveName = document.getElementById('txt_ReceivingName_TransferByAccount').value;
                    params.BenAccount = document.getElementById('txt_BenAccount_TransferByAccount').value;
                    params.IDCard = document.getElementById('txt_IDCard_TransferByAccount').value;
                    params.ReceiveIssueDate = '';
                    params.ReceiveIssuePlace = '';
                    params.ReceivePhone = '';
                    params.BankCode = '';
                    params.BankName = '';
                    params.TellerID = document.getElementById('txt_Teller_TransferByAccount').value;
                    params.Narrative = document.getElementById('txt_Narrative_TransferByAccount').value;
                    params.WaiveCharge = '';
                    params.Province = '';

                    // Check error and store it by Array
                    arrError = []
                    if(!params.ProductID) arrError.push('Product ID is Required');
                    if(!params.Currency) arrError.push('Currency is Required');
                    if(!params.Bencom) arrError.push('Ben Com is Required');
                    if(!params.DebitAccount) arrError.push('Debit Account is Required');
                    if(!params.SendingName) arrError.push('Sending Name is Required');
                    if(!params.ReceiveName) arrError.push('Receiving Name is Required');
                    if(!params.ReceiveName) arrError.push('Receiving Name is Required');
                    if(!params.TellerID) arrError.push('Teller ID is Required');
                    if(!params.Narrative) arrError.push('Narrative is Required');
                    if(parseFloat(params.Amount) > parseFloat(document.getElementById('txt_CustomerBalance_TransferByAccount').value))
                        arrError.push('Amount cannot be greater than Balance')
                    if(parseFloat(params.Amount) < 0)
                        arrError.push('Amount cannot be less than 0')

                    if(arrError.length == 0) {
                        const res = await transferByAccountApi.postCreateTransfer(params);
                        if(res != 'fail') {
                            setIsNotification_Success_01(true); 
                            setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                        } else {
                            setIsNotification_Failed_01(true)
                            setTimeout(() => {setIsNotification_Failed_01(false)}, 5000);
                        }
                    } else {
                        setIsNotification_Message_02(true)
                        setTimeout(() => {setIsNotification_Message_02(false)}, 4000);
                    }
                }}>Save</Button>
                <Button variant='outlined'endIcon={<RestartAltIcon />}>Reset</Button>
            </Block_Button>
            {isNotification_Success_02 && <Message_String type='success' text='Add Transfer By Account Successfully'/>} 
            {isNotification_Failed_02 && <Message_String type='error' text='Add Transfer By Account Failed'/>}  
            {isNotification_Message_02 && <Alert_String arrError={arrError}/>}
        </Block_Spacing>
    </Accordian_Children>  
    {/* ---------------------------------------- */}
    {/* Accordian 1.3 Enquiry */}
    <Accordian_Children title='1.3 Enquiry' label='label1'>
        <Block_Spacing>
            <Outward_Transaction_Components suffixID={'Enquiry'}/>
            <Block_Button>
                <Button variant='contained'endIcon={<SearchIcon />} onClick={() => {
                    // -----------------------------
                    // Action
                    setColumnsTable(Table_Header_OutwardTransaction)
                    setRowsTable([])
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
        </Block_Spacing>  
        <Table_Object rows={rowsTable} columns={columnsTable}/>
    </Accordian_Children>  
</div>
)
}

export default Outward_Transaction;

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