// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Accordian_Children from '../../../components/Accordian_Children';
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import Select_Object from '../../../components/Select_Object';
import Table_Header_CustomerManagement from '../../../data/Table_Header_CustomerManagement';
import Table_Object from '../../../components/Table_Object';
import Message_String from '../../../components/Message_String';
import CustomerType from '../../../data/CustomerType';
import Block_Button from '../../../components/Block_Button';
import customerApi from '../../../apis/customerApi';
import IndividualCustomer_Components from './IndividualCustomer_Components';
import CorporateCustomer_Components from './CorporateCustomer_Components';
import Alert_String from '../../../components/Alert_String';
// APIs
// Fetch API by Custom Hook
import useFetchCity from '../../../customHooks/useFetchCity';
import useFetchCountry from '../../../customHooks/useFetchCountry';
import useFetchDocType from '../../../customHooks/useFetchDocType';
import useFetchMainIndustry from '../../../customHooks/useFetchMainIndustry';
import useFetchMainSector from '../../../customHooks/useFetchMainSector';
import useFetchIndustry from '../../../customHooks/useFetchIndustry';
import useFetchSubSector from '../../../customHooks/useFetchSubSector';
import useFetchAccountOfficer from '../../../customHooks/useFetchAccountOfficer';


// --------------- MUST HAVE -------------
// Data
let arrError = []
// ----------------------------------------
// Create Data
function createData(id, CustomerType, GBFullName, DocID, CellPhoneOfficeNum, Detail) {
        return { id, CustomerType, GBFullName, DocID, CellPhoneOfficeNum, Detail };
}

// ----- MAIN -----
function Customer_Management() {
// Fetch Data 
const cityList = useFetchCity();
const countryList = useFetchCountry();
const docTypeList = useFetchDocType();
const mainIndustryList = useFetchMainIndustry();
const industryList = useFetchIndustry();
const mainSectorList = useFetchMainSector();
const subSectorList = useFetchSubSector();
const accountOfficerList = useFetchAccountOfficer();
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
// Clear text after add successfully function
function clearTextFields() {
        document.getElementById('txt_FirstName_OpenIndividual').value = document.getElementById('txt_LastName_OpenIndividual').value = document.getElementById('txt_MiddleName_OpenIndividual').value = document.getElementById('txt_GBStreet_OpenIndividual').value = document.getElementById('txt_GBTownDist_OpenIndividual').value = document.getElementById('txt_MobilePhone_OpenIndividual').value = document.getElementById('slt_CityProvince_OpenIndividual').innerText = document.getElementById('slt_GBCountry_OpenIndividual').innerText = document.getElementById('slt_Nationality_OpenIndividual').innerText = document.getElementById('slt_Residence_OpenIndividual').innerText = document.getElementById('slt_DocType_OpenIndividual').innerText =  document.getElementById('txt_DocID_OpenIndividual').value =  document.getElementById('txt_EmailAddress_OpenIndividual').value  = document.getElementById('slt_MainIndustry_OpenIndividual').innerText = document.getElementById('slt_Industry_OpenIndividual').innerText = document.getElementById('slt_AccountOfficer_OpenIndividual').innerText = ''
        document.getElementById('txt_GBShortName_OpenIndividual').value = document.getElementById('txt_GBFullName_OpenIndividual').value = '_'
        document.getElementById('txt_GBShortName_OpenCorporate').value = document.getElementById('txt_GBFullName_OpenCorporate').value = document.getElementById('dp_IncorpDate_OpenCorporate').value = document.getElementById('txt_GBStreet_OpenCorporate').value = document.getElementById('txt_GBTownDist_OpenCorporate').value = document.getElementById('slt_CityProvince_OpenCorporate').innerText = document.getElementById('slt_GBCountry_OpenCorporate').innerText = document.getElementById('slt_Nationality_OpenCorporate').innerText = document.getElementById('slt_Residence_OpenCorporate').innerText = document.getElementById('slt_DocType_OpenCorporate').innerText = document.getElementById('txt_DocID_OpenCorporate').value = document.getElementById('dp_DocIssuePlace_OpenCorporate').value = document.getElementById('dp_DocIssueDate_OpenCorporate').value = document.getElementById('dp_DocExpiryDate_OpenCorporate').value = document.getElementById('txt_ContactPerson_OpenCorporate').value = document.getElementById('txt_Position_OpenCorporate').value = document.getElementById('txt_Telephone_OpenCorporate').value = document.getElementById('txt_EmailAddress_OpenCorporate').value = document.getElementById('txt_Remarks_OpenCorporate').value = document.getElementById('slt_MainSector_OpenCorporate').innerText = document.getElementById('slt_SubSector_OpenCorporate').innerText = document.getElementById('slt_MainIndustry_OpenCorporate').innerText = document.getElementById('slt_Industry_OpenCorporate').innerText = document.getElementById('slt_AccountOfficer_OpenCorporate').innerText = ''
}
  // Callback childs -> parent
  const [message, setMessage] = useState('panel1')
  const callbackFunction = (childData) => {setMessage(childData)}
  // Show notification
  // Notification of Accordian 1
  const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
  const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
  const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
  // Notification of Accordian 2
  const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
  const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
  const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)

  // Expand panels
  const [expanded, setExpanded] = React.useState('panel1');const handleChange = (panel) => (event, newExpanded) => {setExpanded(newExpanded ? panel : false);};
  // ------------------ FETCH API ---------------
 // Fetch Specific Information Individual Customer
  const [specificCustomerList, setSpecificCustomerList] = useState([]);
  // Config Table
  const [columnsTable, setColumnsTable] = useState([])
  const [rowsTable, setRowsTable] = useState([])
    return (
        <div>
            {/* 1.1 Open Individual Customer  */}
            <Accordian_Children title='1.1 Open Individual Customer' label='label1' parentCallback={callbackFunction} message={message}>  
                    <IndividualCustomer_Components suffixID={'OpenIndividual'}/> 
                    <Block_Button>
                        <Button
                                variant="contained"
                                endIcon={<SaveIcon />}
                                onClick={async () => 
                                        {
                                                
                                                let params = {}
                                                params.FirstName = document.getElementById('txt_FirstName_OpenIndividual').value;
                                                params.LastName = document.getElementById('txt_LastName_OpenIndividual').value;
                                                params.MiddleName = document.getElementById('txt_MiddleName_OpenIndividual').value;
                                                params.GBShortName = document.getElementById('txt_GBShortName_OpenIndividual').value;
                                                params.GBFullName = document.getElementById('txt_GBFullName_OpenIndividual').value;
                                                params.BirthDay = document.getElementById('dp_BirthDay_OpenIndividual').value;
                                                
                                                params.GBStreet = document.getElementById('txt_GBStreet_OpenIndividual').value;
                                                params.GBTownDist = document.getElementById('txt_GBTownDist_OpenIndividual').value;
                                                params.MobilePhone = document.getElementById('txt_MobilePhone_OpenIndividual').value;
                                                params.CityProvince = resolveNameID(cityList, document.getElementById('slt_CityProvince_OpenIndividual').innerText);
                                                params.GBCountry = resolveCodeID(countryList,document.getElementById('slt_GBCountry_OpenIndividual').innerText);
                                                params.Nationality = resolveCodeID(countryList,document.getElementById('slt_Nationality_OpenIndividual').innerText);
                                                params.Residence = resolveCodeID(countryList,document.getElementById('slt_Residence_OpenIndividual').innerText);
                                                params.DocType = resolveNameID(docTypeList,document.getElementById('slt_DocType_OpenIndividual').innerText);
                                                params.DocID = document.getElementById('txt_DocID_OpenIndividual').value;
                                                params.DocIssuePlace = document.getElementById('dp_DocIssuePlace_OpenIndividual').value;
                                                params.DocExpiryDate = document.getElementById('dp_DocExpiryDate_OpenIndividual').value;
                                                params.EmailAddress = document.getElementById('txt_EmailAddress_OpenIndividual').value;

                                                params.MainSector = resolveNameID(mainSectorList,document.getElementById('slt_MainSector_OpenIndividual').innerText);
                                                params.SubSector = resolveNameID(subSectorList,document.getElementById('slt_SubSector_OpenIndividual').innerText);
                                                params.MainIndustry = resolveNameID(mainIndustryList,document.getElementById('slt_MainIndustry_OpenIndividual').innerText);
                                                params.Industry = resolveNameID(industryList,document.getElementById('slt_Industry_OpenIndividual').innerText);
                                                params.AccountOfficer = resolveNameID(accountOfficerList,document.getElementById('slt_AccountOfficer_OpenIndividual').innerText);
                                                arrError = []
                                                if (document.getElementById('txt_GBShortName_OpenIndividual').value.length <= 2)
                                                        arrError.push('GB Short Name is Required')
                                                if (document.getElementById('txt_GBFullName_OpenIndividual').value.length <= 2)
                                                        arrError.push('GB Full Name is Required')
                                                if (document.getElementById('txt_GBStreet_OpenIndividual').value.length == 0)
                                                        arrError.push('GB Street is Required')
                                                if (document.getElementById('txt_GBTownDist_OpenIndividual').value.length == 0)
                                                        arrError.push('GB Town/Dist is Required')
                                                        
                                                if (resolveNameID(cityList,document.getElementById('slt_CityProvince_OpenIndividual').innerText) === null)
                                                        arrError.push('City/Province is Required')
                                                if (resolveNameID(docTypeList,document.getElementById('slt_DocType_OpenIndividual').innerText) === null)
                                                        arrError.push('Doc Type is Required')
                                                if (document.getElementById('txt_DocID_OpenIndividual').value.length == 0) 
                                                        arrError.push('Doc ID is Required')
                                                if (resolveNameID(mainIndustryList,document.getElementById('slt_MainIndustry_OpenIndividual').innerText) === null)
                                                        arrError.push('Main Industry is Required')
                                                if (resolveNameID(industryList,document.getElementById('slt_Industry_OpenIndividual').innerText) === null)
                                                        arrError.push('Industry is Required')
                                                        ///
                                                if (
                                                        arrError.length == 0
                                                ) {
                                                   
                                                        const res = await customerApi.postIndividual(params);
                                                        if(res != 'fail') {
                                                                setIsNotification_Success_01(true); 
                                                                setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                                                clearTextFields()
                                                        } else {
                                                                setIsNotification_Failed_01(true)
                                                                setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                                                        }

                                                } else {
                                                        setIsNotification_Message_01(true)
                                                        setTimeout(() => {setIsNotification_Message_01(false)}, 5000);
                                                }
                                        }}
                        >
                                Save
                        </Button>      
                        {isNotification_Success_01 && <Message_String type='success' text='Add Individual Customer Successfully'/>}                  
                        {isNotification_Failed_01 && <Message_String type='error' text='Add Individual Customer Failed'/>}  
                        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}                
                    </Block_Button>
            </Accordian_Children>  
            {/* 1.2 Open Corporate Customer  */}
            <Accordian_Children title='1.2 Open Corporate Customer' label='label2' parentCallback={callbackFunction} message={message}>
                    <CorporateCustomer_Components suffixID={'OpenCorporate'}/>
                    <Block_Button>
                        <Button
                                variant="contained"
                                endIcon={<SaveIcon />}
                                onClick={async () => 
                                        {
                                                
                                                let params = {}
                                                params.GBShortName = document.getElementById('txt_GBShortName_OpenCorporate').value;
                                                params.GBFullName = document.getElementById('txt_GBFullName_OpenCorporate').value;
                                                params.IncorpDate = document.getElementById('dp_IncorpDate_OpenCorporate').value;
                                                
                                                params.GBStreet = document.getElementById('txt_GBStreet_OpenCorporate').value;
                                                params.GBTownDist = document.getElementById('txt_GBTownDist_OpenCorporate').value;
                                                params.CityProvince = resolveNameID(cityList, document.getElementById('slt_CityProvince_OpenCorporate').innerText);
                                                params.GBCountry = resolveCodeID(countryList,document.getElementById('slt_GBCountry_OpenCorporate').innerText);
                                                params.Nationality = resolveCodeID(countryList,document.getElementById('slt_Nationality_OpenCorporate').innerText);
                                                params.Residence = resolveCodeID(countryList,document.getElementById('slt_Residence_OpenCorporate').innerText);
                                                params.DocType = resolveNameID(docTypeList,document.getElementById('slt_DocType_OpenCorporate').innerText);
                                                params.DocID = document.getElementById('txt_DocID_OpenCorporate').value;
                                                params.DocIssuePlace = document.getElementById('dp_DocIssuePlace_OpenCorporate').value;
                                                params.DocIssueDate = document.getElementById('dp_DocIssueDate_OpenCorporate').value;
                                                params.DocExpiryDate = document.getElementById('dp_DocExpiryDate_OpenCorporate').value;

                                                params.ContactPerson = document.getElementById('txt_ContactPerson_OpenCorporate').value;
                                                params.Position = document.getElementById('txt_Position_OpenCorporate').value;
                                                params.Telephone = document.getElementById('txt_Telephone_OpenCorporate').value;
                                                params.EmailAddress = document.getElementById('txt_EmailAddress_OpenCorporate').value;
                                                params.Remarks = document.getElementById('txt_Remarks_OpenCorporate').value;

                                                params.MainSector = resolveNameID(mainSectorList,document.getElementById('slt_MainSector_OpenCorporate').innerText);
                                                params.SubSector = resolveNameID(subSectorList,document.getElementById('slt_SubSector_OpenCorporate').innerText);
                                                params.MainIndustry = resolveNameID(mainIndustryList,document.getElementById('slt_MainIndustry_OpenCorporate').innerText);
                                                params.Industry = resolveNameID(industryList,document.getElementById('slt_Industry_OpenCorporate').innerText);
                                                params.AccountOfficer = resolveNameID(accountOfficerList,document.getElementById('slt_AccountOfficer_OpenCorporate').innerText);
                                                arrError = []
                                                if (document.getElementById('txt_GBShortName_OpenCorporate').value.length <= 2)
                                                        arrError.push('GB Short Name is Required')
                                                if (document.getElementById('txt_GBFullName_OpenCorporate').value.length <= 2)
                                                        arrError.push('GB Full Name is Required')
                                                if (document.getElementById('txt_GBStreet_OpenCorporate').value.length == 0)
                                                        arrError.push('GB Street is Required')
                                                if (document.getElementById('txt_GBTownDist_OpenCorporate').value.length == 0)
                                                        arrError.push('GB Town/Dist is Required')
                                                        
                                                if (resolveNameID(cityList,document.getElementById('slt_CityProvince_OpenCorporate').innerText) === null)
                                                        arrError.push('City/Province is Required')
                                                if (resolveNameID(docTypeList,document.getElementById('slt_DocType_OpenCorporate').innerText) === null)
                                                        arrError.push('Doc Type is Required')
                                                if (document.getElementById('txt_DocID_OpenCorporate').value.length == 0) 
                                                        arrError.push('Doc ID is Required')
                                                if (resolveNameID(mainIndustryList,document.getElementById('slt_MainIndustry_OpenCorporate').innerText) === null)
                                                        arrError.push('Main Industry is Required')
                                                if (resolveNameID(industryList,document.getElementById('slt_Industry_OpenCorporate').innerText) === null)
                                                        arrError.push('Industry is Required')
                                                        if (
                                                         arrError.length == 0
                                                ) {
                                                   
                                                                const res = await customerApi.postCorporate(params);
                                                                if(res != 'fail') {
                                                                        setIsNotification_Success_02(true); 
                                                                        setTimeout(() => {setIsNotification_Success_02(false)}, 5000);
                                                                        clearTextFields()
                                                                } else {
                                                                        setIsNotification_Failed_02(true)
                                                                        setTimeout(() => {setIsNotification_Failed_02(false)}, 5000); 
                                                                }

                                                } else {
                                                        setIsNotification_Message_02(true)
                                                        setTimeout(() => {setIsNotification_Message_02(false)}, 5000);
                                                }
                                        }}
                        >
                                Save
                        </Button>      
                        {isNotification_Success_02 && <Message_String type='success' text='Add Corporate Customer Successfully'/>}                  
                        {isNotification_Failed_02 && <Message_String type='error' text='Add Corporate Customer Failed'/>}  
                        {isNotification_Message_02 && <Alert_String arrError={arrError}/>}                
                    </Block_Button>
            </Accordian_Children>
            {/* 1.3 Enquiry Customer */}
            <Accordian_Children title='1.3 Enquiry Customer' label='label3' parentCallback={callbackFunction} message={message}>
                  {/* Block 1 - 1.3 Enquiry Customer */}
                  <Block_Children>
                        <Select_Object id='slt_CustomerType_EnquiryCustomer'label='Customer Type'object={CustomerType}length='20'/>
                  </Block_Children>
                  {/* Block 2 - 1.3 Enquiry Customer */}
                  <Block_Children>
                        <TextField_Value id='txt_CustomerID_EnquiryCustomer' label='Customer ID' length='23'/>
                        <TextField_Value id='txt_CellPhone/OfficeNum_EnquiryCustomer' label='Cell Phone/Office Num' length='23'/>
                        <TextField_Value id='txt_GBFullName_EnquiryCustomer' label='GB Full Name' length='28'/>
                        <TextField_Value id='txt_DocID_EnquiryCustomer' label='Doc ID' length='20'/>
                  </Block_Children>
                  {/* Block 3 - 1.3 Enquiry Customer */}
                  <Block_Children>
                        <Select_Object id='slt_MainSector_EnquiryCustomer'label='Main Sector' object={mainSectorList}length='25'/>
                        <Select_Object id='slt_SubSector_EnquiryCustomer'label='Sub Sector'object={subSectorList}length='25'/>
                        <Select_Object id='slt_MainIndustry_EnquiryCustomer'label='Main Industry'object={mainIndustryList}length='25'/>
                        <Select_Object id='slt_Industry_EnquiryCustomer'label='Industry'object={industryList}length='25'/>
                  </Block_Children>
                  <Block_Button>
                        <Button
                                variant="contained"
                                endIcon={<SearchIcon />}
                                onClick={() => {
                                        let data = []
                                        let params = {}
                                        
                                        params.CustomerType = resolveNameID(CustomerType, document.getElementById('slt_CustomerType_EnquiryCustomer').innerText);
                                        params.CustomerID = document.getElementById('txt_CustomerID_EnquiryCustomer').value;
                                        params.GB_FullName = document.getElementById('txt_GBFullName_EnquiryCustomer').value;
                                        params.PhoneNumber = document.getElementById('txt_CellPhone/OfficeNum_EnquiryCustomer').value;
                                        params.DocID = document.getElementById('txt_DocID_EnquiryCustomer').value;
                                        params.MainSector = resolveNameID(mainSectorList, document.getElementById('slt_MainSector_EnquiryCustomer').innerText);
                                        params.SubSector = resolveNameID(subSectorList, document.getElementById('slt_SubSector_EnquiryCustomer').innerText);
                                        params.MainIndustry = resolveNameID(mainIndustryList, document.getElementById('slt_MainIndustry_EnquiryCustomer').innerText);
                                        params.SubIndustry = resolveNameID(industryList, document.getElementById('slt_Industry_EnquiryCustomer').innerText);
                                        const fetchspecificCustomerList = async () => 
                                        {
                                                const response = await customerApi.enquiry(params);
                                                
                                                setSpecificCustomerList(response.data)
                                        }
                                        fetchspecificCustomerList();
                                        specificCustomerList.map((value, index) => {
                                                // data.push(createData(value.id, value.CustomerType, value.GB_FullName, value.DocID, value.PhoneNumber, {id: value.id, type: value.CustomerType}))
                                                let param1 = value.id
                                                let param2 = value.CustomerType
                                                let param3 = value.GB_FullName
                                                let param4 = value.DocID
                                                let param5 = value.PhoneNumber
                                                let param6 = {id: value.id, type: value.CustomerType}
                                                data.push(createData(param1, param2, param3, param4, param5, param6))
                                        })
                                        setColumnsTable(Table_Header_CustomerManagement)
                                        setRowsTable(data)
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
            </Accordian_Children>
        </div>
    ) 
}

export default Customer_Management;



    