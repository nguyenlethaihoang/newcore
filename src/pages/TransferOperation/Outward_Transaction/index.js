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

function Outward_Transaction() {
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
                    // params.CashAccount = resolveNameID(DebitAccount_Full_List,document.getElementById('slt_CashAccount_TransferByCash').innerText);
                    params.Amount = document.getElementById('txt_Amount_TransferByCash').value;
                    params.SendingName = document.getElementById('txt_Name_TransferByCash').value;
                    params.SendingAddress = document.getElementById('txt_Address_TransferByCash').value;
                    params.SendingPhone = document.getElementById('txt_Phone_TransferByCash').value;
                    params.ReceiveName = document.getElementById('txt_Name_02_TransferByCash').value;
                    // params.ReceiveBenAccount =
                    // params.Province =
                    // params.BankCode =
                    params.IdentityCard = document.getElementById('txt_IdentityCard_TransferByCash').value;
                    // params.ReceiveIssueDate =
                    // params.ReceiveIssuePlace =
                    params.Teller = document.getElementById('txt_Teller_TransferByCash').value;
                    params.Narrative = document.getElementById('txt_Narrative_TransferByCash').value;
                    params.WaiveCharges = resolveNameID(Close_Online, document.getElementById('slt_WaiveCharges_TransferByAccount').innerText);
                    const res = await transferByCashApi.postCreateTransfer(params);
                    if(res != 'fail') {
                            console.log('fail cmnr')
                    } else {
                            console.log('yeah yeah di ngu')
                    }
                }}>Save</Button>
                <Button variant='outlined'endIcon={<RestartAltIcon />}>Reset</Button>
            </Block_Button>
        </Block_Spacing>
    </Accordian_Children>  
    {/* ---------------------------------------- */}
    {/* Accordian 1.2 Transfer By Account */}
    <Accordian_Children title='1.2 Transfer By Account' label='label1'>  
        <Block_Spacing>
            <TransferByAccountComponents suffixID={'TransferByAccount'}/>
            <Block_Button>
                <Button variant='contained'endIcon={<SaveIcon />}>Save</Button>
                <Button variant='outlined'endIcon={<RestartAltIcon />}>Reset</Button>
            </Block_Button>
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