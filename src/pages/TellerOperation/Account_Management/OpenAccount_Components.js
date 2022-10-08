// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import DataPicker_Day from '../../../components/DatePicker_Day';
import Select_Object from '../../../components/Select_Object';
import AutoComplete_Object from '../../../components/AutoComplete_Object';
import Category_OpenAccount from '../../../data/Category_OpenAccount';

// APIs
import countryApi from '../../../apis/countryApi';
import docTypeApi from '../../../apis/docTypeApi';
import mainIndustryApi from '../../../apis/mainIndustryApi';
import industryApi from '../../../apis/industryApi';
import mainSectorApi from '../../../apis/mainSectorApi';
import subSectorApi from '../../../apis/subSectorApi';
import cityApi from '../../../apis/cityApi';
import accountOfficerApi from '../../../apis/accountOfficerApi';
import customerApi from '../../../apis/customerApi';
import productLineApi from '../../../apis/productLineApi';
import currencyApi from '../../../apis/currencyApi';
import chargeCodeApi from '../../../apis/chargeCodeApi';
import relationCodeApi from '../../../apis/relationCodeApi';
import Block_Button from '../../../components/Block_Button';


function OpenAccount_Components({suffixID, forceDisable}) {
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

    return ( 
        <div>
          <Box m={2}>
            {/* Block 1 - 3.1.1 Open Corporate Customer */}
            <Block_Children>
                    <AutoComplete_Object id={'aut_CustomerID_'+suffixID} label='Customer ID' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true}/>
                    <Select_Object id={'slt_Category_'+suffixID} label='Category'required={true}object={Category_OpenAccount}length='25' disabled={isDisabled}/>
                    <Select_Object id={'slt_ProductLine_'+suffixID} label='Product Line'object={productLineList}length='25' disabled={isDisabled}/>
                    <Select_Object id={'slt_Currency_'+suffixID} label='Currency'required={true}object={currencyList}length='14' disabled={isDisabled}/>
                    <TextField_Value id={'txt_AccountTitle_'+suffixID} label='Account Title' length='35'/>
                    <TextField_Value id={'txt_ShortTitle_'+suffixID} label='Short Title' length='25'/>
                    <Select_Object id={'slt_AccountOfficer_'+suffixID} label='Account Officer'object={accountOfficerList}length='25' disabled={isDisabled}/>
                    <Select_Object id={'slt_ChargeCode_'+suffixID} label='Charge Code'object={chargeCodeList}length='25' disabled={isDisabled}/>
            </Block_Children>
            {/* Block 2 - 3.1.1 Open Corporate Customer */}
            <Block_Children header2='JOIN HOLDER'>
                    <AutoComplete_Object id={'aut_IDJoinHolder_'+suffixID} label='ID Join Holder' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true}/>
                    <AutoComplete_Object id={'aut_RelationCode_'+suffixID} label='Relation Code' object={relationCodeList} length='30' params1='id' params2='Name' required={true}/>
                    <TextField_Value id={'txt_Join Notes_'+suffixID} label='Join Notes' length='25'/>
            </Block_Children>
        </Box>
        <Block_Button>
              <Button
                  variant='contained'
                  endIcon={<SaveIcon />}
              >
                  Save
              </Button>
        </Block_Button>
        </div>
     );
}

export default OpenAccount_Components;