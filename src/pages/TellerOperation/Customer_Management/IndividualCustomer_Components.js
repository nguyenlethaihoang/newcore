// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
// Components
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import DataPicker_Day from '../../../components/DatePicker_Day';
import Select_Object from '../../../components/Select_Object';
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
function IndividualCustomer_Components({suffixID,forceDisable, object}) {
// Manage Disable
if (forceDisable === undefined) forceDisable = false
const [isDisabled, setIsDisabled] = useState(forceDisable)
const handleClick = () => {
  setIsDisabled(true);
};
// FILL VALUE
if(object === undefined){
        object = ""
}
        // ------------------ FETCH API ---------------
  // Fetch API City
  const [cityList, setCityList] = useState([]);useEffect(() => {const fetchCityList = async () => {try {const response = await cityApi.getAll();setCityList(response.rows)} catch (error) {console.log('Failed to fetch cityList: ', error)}};fetchCityList();}, [])
// Fetch API Country
const [countryList, setCountryList] = useState([]);useEffect(() => {const fetchCountryList = async () => {try {const response = await countryApi.getAll();setCountryList(response.rows)} catch (error) {console.log('Failed to fetch countryList: ', error)}};fetchCountryList();}, [])
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
    
const [shortNameStatic, setShortNameStatic] = useState('');

const subCustomer = object.CUSTOMER || ''

return ( 
        <div
                onChange={() => {
                        document.getElementById('txt_GBShortName_' + suffixID).value = document.getElementById('txt_LastName_' + suffixID).value + ' ' + document.getElementById('txt_MiddleName_' + suffixID).value + ' ' + document.getElementById('txt_FirstName_' + suffixID).value
                        document.getElementById('txt_GBFullName_' + suffixID).value = document.getElementById('txt_GBShortName_' + suffixID).value
                }}
        >
                <Box m={2}>
            {/* Block 1 - 1.1 Open Individual Customer */}
            <Block_Children>
                    <TextField_Value id={'txt_FirstName_'+suffixID} label='First Name' length='16' disabled={isDisabled} value={object.FirstName} />
                    <TextField_Value id={'txt_LastName_'+suffixID} label='Last Name' length='16' disabled={isDisabled} value={object.LastName}/>
                    <TextField_Value id={'txt_MiddleName_'+suffixID} label='Middle Name' length='16' disabled={isDisabled} value={object.MiddleName}/>
                    <TextField_Value id={'txt_GBShortName_'+suffixID} label='GB Short Name' length='28'required={true} disabled={isDisabled} value={((subCustomer.GB_FullName)) ? subCustomer.GB_FullName : '_'}/>
                    <TextField_Value id={'txt_GBFullName_'+suffixID} label='GB Full Name' length='28'required={true} disabled={isDisabled} value={((subCustomer.GB_ShortName)) ? subCustomer.GB_ShortName : '_'}/>
                    <DataPicker_Day id={'dp_BirthDay_'+suffixID}label='Birthday'disabled={isDisabled} value={object.Birthday || ''}/>
            </Block_Children>
            {/* Block 2 - 1.1 Open Individual Customer */}
            <Block_Children>
                    <TextField_Value id={'txt_GBStreet_'+suffixID} label='GB Street' length='30' required={true} disabled={isDisabled} value={subCustomer.GB_Street}/>
                    <TextField_Value id={'txt_GBTownDist_'+suffixID} label='GB Town/Dist' length='30' required={true} disabled={isDisabled} value={subCustomer.GB_Towndist}/>
                    <TextField_Value id={'txt_MobilePhone_'+suffixID} label='Mobile Phone' length='15' disabled={isDisabled} value={subCustomer.PhoneNumber}/>
                    <Select_Object id={'slt_CityProvince_'+suffixID}label='City/Province'required={true}object={cityList}length='25' disabled={isDisabled} dataID={subCustomer.CityProvince}/>
                    <Select_Object id={'slt_GBCountry_'+suffixID}label='GB Country'object={countryList}length='25'keyObj='Code' disabled={isDisabled} dataID={subCustomer.GB_Country}/>
                    <Select_Object id={'slt_Nationality_'+suffixID}label='Nationality'object={countryList}length='25'keyObj='Code' disabled={isDisabled} dataID={subCustomer.Nationality}/>
                    <Select_Object id={'slt_Residence_'+suffixID}label='Residence'object={countryList}length='25'keyObj='Code' disabled={isDisabled} dataID={subCustomer.Residence}/>
                    <Select_Object id={'slt_DocType_'+suffixID}label='Doc Type'object={docTypeList}length='25' required={true} disabled={isDisabled} dataID={subCustomer.Doctype}/>
                    <TextField_Value id={'txt_DocID_'+suffixID} label='Doc ID' length='20' required={true} disabled={isDisabled} value={subCustomer.DocID}/>
                    <DataPicker_Day id={'dp_DocIssuePlace_'+suffixID}label='Doc Issue Place' disabled={isDisabled} value={subCustomer.DocIssuePlace}/>
                    <DataPicker_Day id={'dp_DocExpiryDate_'+suffixID}label='Doc Expiry Date' disabled={isDisabled} value={subCustomer.DocExpiryDate}/>
                    <TextField_Value id={'txt_EmailAddress_'+suffixID} label='Email Address' length='30' disabled={isDisabled} value={object.EmailAddress}/>
            </Block_Children>
            {/* Block 3 - 1.1 Open Individual Customer */}
            <Block_Children>
                    <Select_Object id={'slt_MainSector_'+suffixID}label='Main Sector'required={true}disabled={true}dataID='10' object={mainSectorList}length='25'/>
                    <Select_Object id={'slt_SubSector_'+suffixID}label='Sub Sector'required={true}disabled={true}dataID='1' object={subSectorList  }length='25'/>
                    <Select_Object id={'slt_MainIndustry_'+suffixID}label='Main Industry'required={true}object={mainIndustryList}length='25' disabled={isDisabled} dataID={object.CUSTOMER?.MainIndustry}/>
                    <Select_Object id={'slt_Industry_'+suffixID}label='Industry'required={true}object={industryList}length='25' disabled={isDisabled} dataID={object.CUSTOMER?.Industry}/>
                    <Select_Object id={'slt_AccountOfficer_'+suffixID}label='Account Officer'object={accountOfficerList}length='25' disabled={isDisabled} dataID={object.CUSTOMER?.AccountOfficer}/>
            </Block_Children>     
        </Box>
        </div>
     );
}

export default IndividualCustomer_Components