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
// ----- MAIN -----
function CorporateCustomer_Components({suffixID, forceDisable, object}) {
  // Fetch Data 
const cityList = useFetchCity();
const countryList = useFetchCountry();
const docTypeList = useFetchDocType();
const mainIndustryList = useFetchMainIndustry();
const industryList = useFetchIndustry();
const mainSectorList = useFetchMainSector();
const subSectorList = useFetchSubSector();
const accountOfficerList = useFetchAccountOfficer();
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


const subCustomer = object.CUSTOMER || ''
    return ( 
        <Box m={2}
            
        >
                    {/* Block 1 - 1.2 Open Corporate Customer */}
                    <Block_Children>
                            <TextField_Value id={'txt_GBShortName_'+suffixID} label='GB Short Name' length='30' required={true} disabled={isDisabled} value={subCustomer.GB_ShortName}/>
                            <TextField_Value id={'txt_GBFullName_'+suffixID} label='GB Full Name' length='30' required={true} disabled={isDisabled} value={subCustomer.GB_FullName}/>
                            <DataPicker_Day id={'dp_IncorpDate_'+suffixID} label='Incorp Date' disabled={isDisabled} value={object.IncorpDate}/>
                    </Block_Children>
                    {/* Block 2 - 1.2 Open Corporate Customer */}
                    <Block_Children>
                            <TextField_Value id={'txt_GBStreet_'+suffixID}  label='GB Street' length='30' required={true} disabled={isDisabled} value={subCustomer.GB_Street}/>
                            <TextField_Value id={'txt_GBTownDist_'+suffixID } label='GB Town/Dist' length='30' required={true} disabled={isDisabled} value={subCustomer.GB_Towndist}/>
                            <Select_Object id={'slt_CityProvince_'+suffixID} label='City/Province'required={true}object={cityList}length='25' disabled={isDisabled} dataID={subCustomer.CityProvince}/>
                            <Select_Object id={'slt_GBCountry_'+suffixID} label='GB Country'object={countryList}length='25'keyObj='Code' disabled={isDisabled} dataID={subCustomer.GB_Country}/>
                            <Select_Object id={'slt_Nationality_'+suffixID }label='Nationality'object={countryList}length='25'keyObj='Code' disabled={isDisabled} dataID={subCustomer.Nationality}/>
                            <Select_Object id={'slt_Residence_'+suffixID} label='Residence'object={countryList}length='25'keyObj='Code' disabled={isDisabled} dataID={subCustomer.Residence}/>
                            <Select_Object id={'slt_DocType_'+suffixID} label='Doc Type'object={docTypeList}length='25' required={true} disabled={isDisabled} dataID={subCustomer.Doctype}/>
                            <TextField_Value id={'txt_DocID_'+suffixID}  label='Doc ID' length='20' required={true} disabled={isDisabled} value={subCustomer.DocID}/>
                            <DataPicker_Day id={'dp_DocIssuePlace_'+suffixID} label='Doc Issue Place' disabled={isDisabled} value={subCustomer.DocIssuePlace}/>
                            <DataPicker_Day id={'dp_DocIssueDate_'+suffixID} label='Doc Issue Date' disabled={isDisabled} value={subCustomer.DocExpiryDate}/>
                            <DataPicker_Day id={'dp_DocExpiryDate_'+suffixID} label='Doc Expiry Date' disabled={isDisabled} value={subCustomer.DocExpiryDate}/>
                    </Block_Children>
                    {/* Block 3 - 1.2 Open Corporate Customer */}
                    <Block_Children>
                            <TextField_Value id={'txt_ContactPerson_'+suffixID}  label='Contact Person' length='23' disabled={isDisabled} value={object.ContactPerson}/>
                            <TextField_Value id={'txt_Position_'+suffixID}  label='Position' length='23' disabled={isDisabled} value={object.Position}/>
                            <TextField_Value id={'txt_Telephone_'+suffixID } label='Telephone' length='15' disabled={isDisabled} value={object.Telephone}/>
                            <TextField_Value id={'txt_EmailAddress_'+suffixID } label='Email Address' length='30' disabled={isDisabled} value={object.EmailAddress}/>
                            <TextField_Value id={'txt_Remarks_'+suffixID}  label='Remarks' length='30' disabled={isDisabled} value={object.Remarks}/>
                    </Block_Children>
                    {/* Block 4 - 1.2 Open Corporate Customer */}
                    <Block_Children>
                            <Select_Object id={'slt_MainSector_'+suffixID} label='Main Sector'required={true} object={mainSectorList}length='25' disabled={isDisabled} dataID={subCustomer.MainSector}/>
                            <Select_Object id={'slt_SubSector_'+suffixID} label='Sub Sector'required={true} object={subSectorList}length='25' disabled={isDisabled} dataID={subCustomer.SubSector}/>
                            <Select_Object id={'slt_MainIndustry_'+suffixID} label='Main Industry'object={mainIndustryList}length='25' disabled={isDisabled} dataID={subCustomer.MainIndustry}/>
                            <Select_Object id={'slt_Industry_'+suffixID} label='Industry'object={industryList}length='25' disabled={isDisabled} dataID={subCustomer.Industry}/>
                            <Select_Object id={'slt_AccountOfficer_'+suffixID} label='Account Officer'object={accountOfficerList}length='25' disabled={isDisabled} dataID={subCustomer.AccountOfficer}/>
                    </Block_Children>
        </Box>
     );
}

export default CorporateCustomer_Components;