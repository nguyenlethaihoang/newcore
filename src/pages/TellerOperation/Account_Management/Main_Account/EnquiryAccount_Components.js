// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

// Components
import Block_Children from '../../../../components/Block_Children'; 
import TextField_Value from '../../../../components/TextField_Value'; 
import Select_Object from '../../../../components/Select_Object';
import CustomerType from '../../../../data/CustomerType';
import Category_EnquiryAccount from '../../../../data/Category_EnquiryAccount';

// APIs
import countryApi from '../../../../apis/countryApi';
import docTypeApi from '../../../../apis/docTypeApi';
import mainIndustryApi from '../../../../apis/mainIndustryApi';
import industryApi from '../../../../apis/industryApi';
import mainSectorApi from '../../../../apis/mainSectorApi';
import subSectorApi from '../../../../apis/subSectorApi';
import cityApi from '../../../../apis/cityApi';
import accountOfficerApi from '../../../../apis/accountOfficerApi';
import customerApi from '../../../../apis/customerApi';
import productLineApi from '../../../../apis/productLineApi';
import currencyApi from '../../../../apis/currencyApi';
import chargeCodeApi from '../../../../apis/chargeCodeApi';
import relationCodeApi from '../../../../apis/relationCodeApi';
import Block_Button from '../../../../components/Block_Button';
import CheckBox_Value from '../../../../components/CheckBox_Value';
import Table_Object from '../../../../components/Table_Object';
import Table_Header_NonTermSaving from '../../../../data/Table_Header_NonTermSaving';
import Search from '@mui/icons-material/Search';
import debitAccountApi from '../../../../apis/debitAccountApi';


// --------- CONVERT -------------------
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
    // rersolve from text to id with Name Customer
    function resolveStrtoID(text) {
        let subArr = text.toString().split(" - ");
        let subStr = subArr[0]
        if(subStr){
            return subStr
        }
        return null
    }
    
    
    // rersolve from text to id with Code
    function resolveCodeID(object, text) {
        let temp = null
        object.map((data, index) => {
                if (data.Code == text)
                {
                temp = data.id.toString()
                
                }
        })
        return temp
    }
// -------------------------------------------------------

// --------------- MUST HAVE -------------
// Data
let arrError = []
// ----------------------------------------
// Create Data
function createData(id, CustomerID, GBFullName, DocID, Category, ProductLine, Currency,ActualBallance, WorkingAmount,Detail,CloseAccount,BlockUnblockAccount) {
        return { id, CustomerID, GBFullName, DocID, Category, ProductLine, Currency, ActualBallance,WorkingAmount,Detail,CloseAccount,BlockUnblockAccount };}
function EnquiryAccount_Components({suffixID, forceDisable}) {
// Manage Disable
if (forceDisable === undefined) forceDisable = false
const [isDisabled, setIsDisabled] = useState(forceDisable)
const handleClick = () => {
  setIsDisabled(true);
};
      // ------------------ FETCH API ---------------
  // Fetch API City
  const [cityList, setCityList] = useState([]);useEffect(() => {const fetchCityList = async () => {try {const response = await cityApi.getAll();setCityList(response.rows)} catch (error) {console.log('Failed to fetch cityList: ', error)}}
  fetchCityList();}, [])
// Fetch API Country
const [countryList, setCountryList] = useState([]);useEffect(() => {const fetchCountryList = async () => {try {const response = await countryApi.getAll();setCountryList(response.rows)} catch (error) {console.log('Failed to fetch countryList: ', error)}}
  fetchCountryList();}, [])
// Fetch API Doc Type
const [docTypeList, setDocTypeList] = useState([]); useEffect(() => {const fetchDocTypeList = async () => {try {const response = await docTypeApi.getAll();setDocTypeList(response.rows)} catch (error) {console.log('Failed to fetch docTypeList: ', error)}}
  fetchDocTypeList();}, [])
// Fetch API Main Industry
const [mainIndustryList, setMainIndustryList] = useState([]);useEffect(() => {const fetchMainIndustryList = async () => {try {const response = await mainIndustryApi.getAll();setMainIndustryList(response.rows)} catch (error) {console.log('Failed to fetch mainIndustryList: ', error)}}
  fetchMainIndustryList();}, [])
// Fetch API Sub Industry
const [industryList, setIndustryList] = useState([]);useEffect(() => {const fetchIndustryList = async () => {try {const response = await industryApi.getAll();setIndustryList(response.data.subIndustry)} catch (error) {console.log('Failed to fetch industryList: ', error)}}
fetchIndustryList();}, [])
// Fetch API MainSector
const [mainSectorList, setMainSectorList] = useState([]);useEffect(() => {const fetchMainSectorList = async () => {try {const response = await mainSectorApi.getAll();setMainSectorList(response.rows)} catch (error) {console.log('Failed to fetch mainSectorList: ', error)}}
fetchMainSectorList();}, [])
// Fetch API SubSector
const [subSectorList, setSubSectorList] = useState([]);useEffect(() => {const fetchSubSectorList = async () => {try {const response = await subSectorApi.getAll();setSubSectorList(response.data.subsector)} catch (error) {console.log('Failed to fetch subSectorList: ', error)}}
fetchSubSectorList();}, [])
// Fetch API Account Officer
const [accountOfficerList, setAccountOfficerList] = useState([]);useEffect(() => {const fetchAccountOfficerList = async () => {try {const response = await accountOfficerApi.getAll();setAccountOfficerList(response.rows)} catch (error) {console.log('Failed to fetch accountOfficer: ', error)}}
fetchAccountOfficerList();}, [])
// Fetch API Customer
const [customerList, setCustomerList] = useState([]);useEffect(() => {const fetchCustomerList = async () => {try {const response = await customerApi.getAll();setCustomerList(response.data.customer)} catch (error) {console.log('Failed to fetch customerlist: ', error)}};fetchCustomerList();}, [])
// Fetch API Product Line
const [productLineList, setProductLineList] = useState([]);useEffect(() => {const fetchProductLineList = async () => {try {const response = await productLineApi.getAll();setProductLineList(response.rows)} catch (error) {console.log('Failed to fetch ProductLinelist: ', error)}};fetchProductLineList();}, [])
// Fetch API Currency 
const [currencyList, setCurrencyList] = useState([]);useEffect(() => {const fetchCurrencyList = async () => {try {const response = await currencyApi.getAll();setCurrencyList(response.rows)} catch (error) {console.log('Failed to fetch Currencylist: ', error)}};fetchCurrencyList();}, [])
// Fetch API Charge Code 
const [chargeCodeList, setChargeCodeList] = useState([]);useEffect(() => {const fetchChargeCodeList = async () => {try {const response = await chargeCodeApi.getAll();setChargeCodeList(response.rows)} catch (error) {console.log('Failed to fetch chargeCodelist: ', error)}};fetchChargeCodeList();}, [])
// Fetch API Relation Code
const [relationCodeList, setRelationCodeList] = useState([]);useEffect(() => {const fetchRelationCodeList = async () => {try {const response = await relationCodeApi.getAll();setRelationCodeList(response.rows)} catch (error) {console.log('Failed to fetch relationCodelist: ', error)}};fetchRelationCodeList();}, [])
  // Config Table
  const [accountList, setAccountList] = useState([]);
  const [columnsTable, setColumnsTable] = useState([])
  const [rowsTable, setRowsTable] = useState([])
    return ( 
        <div>
          <Box m={2}>
            {/* Block 1 - 3.1.2 Enquiry Account */}
            <Block_Children>
                <TextField_Value id={'txt_AccountCode_'+suffixID} label='Account Code' length='20'/>
                <Select_Object id={'slt_Currency_'+suffixID} label='Currency'object={currencyList}length='14' disabled={isDisabled}/>
                <Select_Object id={'slt_CustomerType_'+suffixID} label='Customer Type'object={CustomerType}length='20' disabled={isDisabled}/>
                <Block_Button>
                    <CheckBox_Value label='Blocked' id={'ckb_Blocked_' + suffixID} value={'Blocked'}/>
                    <CheckBox_Value label='Closed'  id={'ckb_Closed_' + suffixID} value={'Closed'}/>    
                </Block_Button>
            </Block_Children>
            <Block_Children>
                <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='20'/>
                <TextField_Value id={'txt_GBFullName_'+suffixID} label='GB Full Name' length='25'/>
                <TextField_Value id={'txt_DocID_'+suffixID} label='Doc ID' length='20'/>
                <Select_Object id={'slt_Category_'+suffixID} label='Category' object={Category_EnquiryAccount}length='25' disabled={isDisabled}/>
                <Select_Object id={'slt_ProductLine_'+suffixID} label='Product Line' object={productLineList}length='25' disabled={isDisabled}/>
            </Block_Children>
            <Block_Button>
                <Button
                        endIcon={<Search />}
                        variant="contained"
                        onClick={async () => {
                                console.log('enquiry')
                                let params = {}
                                params.AccountID = document.getElementById('txt_AccountCode_'+suffixID).value
                                params.CustomerType = resolveNameID(CustomerType, document.getElementById('slt_CustomerType_'+suffixID).innerText)
                                params.CustomerID = document.getElementById('txt_CustomerID_'+suffixID).value
                                params.DocID = document.getElementById('txt_DocID_'+suffixID).value
                                params.GB_FullName = document.getElementById('txt_GBFullName_'+suffixID).value
                                params.ProductLine = resolveNameID(productLineList, document.getElementById('slt_ProductLine_'+suffixID).innerText)
                                params.Category = resolveNameID(Category_EnquiryAccount, document.getElementById('slt_Category_'+suffixID).innerText)
                                params.Currency = resolveNameID(currencyList, document.getElementById('slt_Currency_'+suffixID).innerText)
                                params.isBlocked = document.getElementById('ckb_Blocked_'+suffixID).value
                                params.isClosed = document.getElementById('ckb_Closed_'+suffixID).value
                                //params.Status = 
                                let data = []
                                //data.push(createData('acc1', '1', 'FullName', 'DOC123', 'Cate', 'product', 'currency', 'actual', 'working', 'detail', 'cclose', 'block'))
                                
                                const fetchAccountList = async () => {
                                        const response = await debitAccountApi.enquiry(params);
                                        setAccountList(response.data) 
                                }
                                fetchAccountList();
                                console.log('account list')
                                console.log(accountList)
                                data = []
                                accountList.map((value, index) => {
                                        console.log("index", index)
                                        console.log(value.id)
                                        data.push(createData(value.id, value.CustomerID, value.Customer.GB_FullName, value.Customer.DocID, value.CATEGORY.Name, value.PRODUCTLINE.Name, value.CURRENCY.Name, value.ActualBalance, value.WorkingAmount, {id: value.id}, {id: value.id}, {id: value.id}))
                                })
                                console.log('table data')
                                console.log(data)
                                setRowsTable(data)
                                setColumnsTable(Table_Header_NonTermSaving)
                        }}
                >
                        Search
                </Button>
                <Button
                        variant="contained"
                        endIcon={<DeleteIcon />}
                        onClick={() => {
                                setRowsTable([])
                                setColumnsTable([])
                        }}
                >
                        Reset   
                </Button>
            </Block_Button>
            <Table_Object rows={rowsTable} columns={columnsTable}/>
        
        </Box>
        </div>
     );
}

export default EnquiryAccount_Components;