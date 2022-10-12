// Libraries
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// Comonents
import Accordian_Children from "../../../../components/Accordian_Children";
import Block_Children from "../../../../components/Block_Children";
import Block_Spacing from "../../../../components/Block_Spacing";
import Select_Object from "../../../../components/Select_Object";
import TextField_Value from "../../../../components/TextField_Value";
import Block_Button from "../../../../components/Block_Button";
import Table_Object from '../../../../components/Table_Object';
// Data
import Type_Enquiry_Arrear_Periodic from "../../../../data/Type_Enquiry_Arrear_Periodic"
import Status_Enquiry_Arrear_Periodic from "../../../../data/Status_Enquiry_Arrear_Periodic"
import Category_SavingAccount from "../../../../data/Category_SavingAccount"; 
import ProductLine_SavingAccount from "../../../../data/ProductLine_SavingAccount";
import Currency_ForeignExchange from "../../../../data/Currency_ForeignExchange";
import Table_Header_ArrearPeriodic from '../../../../data/Table_Header_ArrearPeriodic';
// useFetch
import useFetchCustomer from "../../../../customHooks/useFetchCustomer";
import AutoComplete_Object from "../../../../components/AutoComplete_Object";
import Table_Header_Discounted from '../../../../data/Table_Header_Discounted';
import savingAccountApi from '../../../../apis/savingAccountApi';

// ----- MAIN -----
function SavingAccount_Enquiry() {
    // Init Table 
    const [accountList, setAccountList] = useState([]);
    const [columnsTable, setColumnsTable] = useState([])
    const [rowsTable, setRowsTable] = useState([])
    // Init Table Discounted
    const [columnsTable_Discounted, setColumnsTable_Discounted] = useState([])
    const [rowsTable_Discounted, setRowsTable_Discounted] = useState([])
    // Fetch Data
    const customerList = useFetchCustomer();
return ( 
<div>
    {/* 1. Enquiry Arrear and Periodic  */}
    <Accordian_Children title='1. Enquiry Arrear and Periodic' label='label1'>
        {/* Padding 20px   */}
        <Block_Spacing>
            {/* Block 1 - 1. Enquiry Arrear and Periodic*/}
            <Block_Children>
                <Select_Object id={'slt_Type_Enquiry_ArrearPeriodic'} label='Type' object={Type_Enquiry_Arrear_Periodic}length='15'/>
                <TextField_Value id={'txt_RefID_Enquiry_ArrearPeriodic'} label='Ref ID' length='15'/>
                <AutoComplete_Object id={'aut_CustomerID_Enquiry_ArrearPeriodic'} label='Customer ID' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' />
                <Select_Object id={'slt_Status_Enquiry_ArrearPeriodic'} label='Status' object={Status_Enquiry_Arrear_Periodic}length='15'/>
                <Select_Object id={'slt_Category_Enquiry_ArrearPeriodic'} label='Category' object={Category_SavingAccount}length='15'/>
                <Select_Object id={'slt_ProductLine_Enquiry_ArrearPeriodic'} label='Product Line' object={ProductLine_SavingAccount}length='35'/>
                <TextField_Value id={'txt_PrincipalFrom_Enquiry_ArrearPeriodic'} label='Principal From' length='20' number={true}/>
                <TextField_Value id={'txt_PrincipalTo_Enquiry_ArrearPeriodic'} label='Principal To' length='20' number={true}/>
                <Select_Object id={'slt_Currency_Enquiry_ArrearPeriodic'} label='Currency' object={Currency_ForeignExchange}length='20'/>
            </Block_Children>
        </Block_Spacing>
        {/* Button For Search */}
        <Block_Button>
            <Button
                variant="contained"
                endIcon={<SearchIcon />}
                onClick={() => {
                    // Temp Data
                    let data = []
                    // data.push(createData(1, 'Status', 'CustomerID', 'Category', 'CCY', 'ProductLine', 'Principal', {id: 7, type: 1}))
                    

                    let params = {}
                    const fetchArrearList = async () => {
                        const response = await savingAccountApi.postEnquiryArrear(params);
                        setAccountList(response.data) 
                    }
                    fetchArrearList();
                    // console.log('accountList')
                    // console.log(accountList)

                    accountList.map((value, index) => {                                                                                     
                        data.push(createData(value.id, 'AUT', value.SAVINGACCOUNT.CustomerID, Category_SavingAccount[value.Category-1]?.Name, Currency_ForeignExchange[value.PaymentCurrency]?.Name, ProductLine_SavingAccount[value.ProductLine]?.Name, value.PrincipalAmount, {id: value.id, type: 1, object: value}))
                    })
                    setColumnsTable(Table_Header_ArrearPeriodic)
                    setRowsTable(data)
                }}
            >
                Search
            </Button>
            <Button
                variant="contained"
                endIcon={<DeleteIcon />}
                onClick={() => {
                    setColumnsTable([])
                    setRowsTable([])
                }}
            >
                Reset
            </Button>
        </Block_Button>
        <Table_Object rows={rowsTable} columns={columnsTable}/>
    </Accordian_Children>
    {/* 2. Enquiry Discounted  */}
    <Accordian_Children title='2. Enquiry Discounted' label='label1'>  
        {/* Padding 20px */}
        <Block_Spacing>
            <Block_Children>
                <Select_Object id={'slt_Status_Enquiry_Discounted'} label='Status' object={Status_Enquiry_Arrear_Periodic}length='15'/>
                <TextField_Value id={'txt_RefID_Enquiry_Discounted'} label='Ref ID' length='15'/>
                <TextField_Value id={'txt_LDID_Enquiry_Discounted'} label='LD ID' length='15'/>
                <TextField_Value id={'txt_WorkingAccID_Enquiry_Discounted'} label='Working Acc ID' length='25'/>
                <TextField_Value id={'txt_WorkingAccName_Enquiry_Discounted'} label='Working Acc Name' length='25'/>
                <TextField_Value id={'txt_PrincipalFrom_Enquiry_Discounted'} label='Principal From' length='20' number={true}/>
                <TextField_Value id={'txt_PrincipalTo_Enquiry_Discounted'} label='Principal To' length='20' number={true}/>
                <Select_Object id={'slt_Currency_Enquiry_Discounted'} label='Currency' object={Currency_ForeignExchange}length='20'/>
            </Block_Children>
        </Block_Spacing>
        <Block_Button>
            <Button
                variant="contained"
                endIcon={<SearchIcon />}
                onClick={() => {
                    // Temp Data
                    let data = []
                    data.push(createData_Discounted(1, 'LDID', 'Status', 'WorkingAccID', 'WorkingAccName', 'Currency', 'Principal', {id: 7, type: 1}))
                    // setColumnsTable_Discounted(Table_Header_Discounted)
                    // setRowsTable_Discounted(data)
                    
                }}
            >
                Search
            </Button>
            <Button
                variant="contained"
                endIcon={<DeleteIcon />}
                onClick={() => {
                    setColumnsTable_Discounted([])
                    setRowsTable_Discounted([])
                }}
            >
                Reset
            </Button>
        </Block_Button>
        <Table_Object rows={rowsTable_Discounted} columns={columnsTable_Discounted}/>
    </Accordian_Children>
</div>

);
}
export default SavingAccount_Enquiry;

// Create Data Arrear and Periodic
function createData(id, Status, CustomerID, Category, CCY, ProductLine, Principal, Detail) {
    return { id, Status, CustomerID, Category, CCY, ProductLine, Principal, Detail };
}
// Create Data Discounted
function createData_Discounted(id, LDID, Status, WorkingAccID, WorkingAccName, Currency, Principal, Detail) {
    return { id, LDID, Status, WorkingAccID, WorkingAccName, Currency, Principal, Detail };
}