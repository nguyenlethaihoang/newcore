// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
// Components
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import DataPicker_Day from '../../../components/DatePicker_Day';
import Select_Object from '../../../components/Select_Object';
// Fetch API by Custom Hook
import useFetchCity from '../../../customHooks/useFetchCity';
import useFetchCountry from '../../../customHooks/useFetchCountry';
import useFetchDocType from '../../../customHooks/useFetchDocType';
import useFetchMainIndustry from '../../../customHooks/useFetchMainIndustry';
import useFetchMainSector from '../../../customHooks/useFetchMainSector';
import useFetchIndustry from '../../../customHooks/useFetchIndustry';
import useFetchSubSector from '../../../customHooks/useFetchSubSector';
import useFetchAccountOfficer from '../../../customHooks/useFetchAccountOfficer';
import useFetchCustomer from '../../../customHooks/useFetchCustomer';
//-------------------------------
// -------------- MAIN ----------
function IndividualCustomer_Components({suffixID,forceDisable, object}) {
// Fetch Data 
const cityList = useFetchCity();
const countryList = useFetchCountry();
const docTypeList = useFetchDocType();
const mainIndustryList = useFetchMainIndustry();
const industryList = useFetchIndustry();
const mainSectorList = useFetchMainSector();
const subSectorList = useFetchSubSector();
const accountOfficerList = useFetchAccountOfficer();
const customerList = useFetchCustomer();
// Manage Disable
if (forceDisable === undefined) forceDisable = false
const [isDisabled, setIsDisabled] = useState(forceDisable)
const handleClick = () => {
  setIsDisabled(true);
};
// FILL VALUE
if(object === undefined){object = ""}
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
                    <TextField_Value id={'txt_FirstName_'+suffixID} label='First Name' length='14' disabled={isDisabled} value={object.FirstName} />
                    <TextField_Value id={'txt_LastName_'+suffixID} label='Last Name' length='14' disabled={isDisabled} value={object.LastName}/>
                    <TextField_Value id={'txt_MiddleName_'+suffixID} label='Middle Name' length='14' disabled={isDisabled} value={object.MiddleName}/>
                    <TextField_Value id={'txt_GBShortName_'+suffixID} label='GB Short Name' length='28'required={true} disabled={isDisabled} value={((subCustomer.GB_FullName)) ? subCustomer.GB_FullName : ''} noDown={true}/>
                    <TextField_Value id={'txt_GBFullName_'+suffixID} label='GB Full Name' length='28'required={true} disabled={isDisabled} value={((subCustomer.GB_ShortName)) ? subCustomer.GB_ShortName : ''} noDown={true}/>
                    <DataPicker_Day id={'dp_BirthDay_'+suffixID}label='Birthday'disabled={isDisabled} value={object.Birthday || ''}/>
            </Block_Children>
            {/* Block 2 - 1.1 Open Individual Customer */}
            <Block_Children>
                    <TextField_Value id={'txt_GBStreet_'+suffixID} label='GB Street' length='35' required={true} disabled={isDisabled} value={subCustomer.GB_Street}/>
                    <TextField_Value id={'txt_GBTownDist_'+suffixID} label='GB Town/Dist' length='35' required={true} disabled={isDisabled} value={subCustomer.GB_Towndist}/>
                    <TextField_Value id={'txt_MobilePhone_'+suffixID} label='Mobile Phone' length='20' disabled={isDisabled} value={subCustomer.PhoneNumber} number={true}/>
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